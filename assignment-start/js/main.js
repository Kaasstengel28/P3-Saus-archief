window.addEventListener('load', init);

//globale variabelen
let fetchUrl = 'http://localhost/Programeren-3-magazine/assignment-start/webservice/index.php';
let magazine;
let sauceData = {};
let favorites = JSON.parse(localStorage.getItem("favorite")) || [];
let detailModal;
let detailModalContent;
let detailModalCloseButton;

function init() {
    magazine = document.getElementById('sauce-gallery');
    magazine.addEventListener('click', sauceClickHandler);
    magazine.addEventListener('click', favoriteClickHandler)

    detailModal = document.getElementById('sauce-detail');
    detailModalCloseButton = document.getElementById('modal-content');
    detailModalContent = document.querySelector('.modal-content');

    getSauceData();
}

function detailModalCloseClickHandler(e) {
    let clickedItem = e.target;

    if (clickedItem.nodeName !== "BUTTON") {
        return;
    }

    detailModal.classList.remove('open');
    detailModalContent.innerHTML = "";
    detailModal.removeEventListener('click', detailModalCloseClickHandler);
}

function sauceClickHandler(e) {
    let clickedItem = e.target;

    if (clickedItem.className !== "recipe") {
        return;
    }

    let sauce = sauceData[clickedItem.dataset.id];

    let image = document.createElement('img');
    image.src = sauce.imgUrl;
    detailModalContent.appendChild(image);

    let title = document.createElement('h2');
    title.innerHTML = `${sauce.name}`
    detailModalContent.appendChild(title)

    let recipe = document.createElement('p');
    title.innerHTML = `${sauce.recipe}`
    detailModalContent.appendChild(recipe)

    detailModal.classList.add('open');
    detailModal.addEventListener('click', detailModalCloseClickHandler)
}

function getSauceData() {
    fetch(fetchUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createSauceCards)
        .catch(ajaxErrorHandler);
}


/**
 * Create initial sauce cards based on initial API data
 *
 * @param data
 */

function createSauceCards(data) {

    for (let sauce of data) {

        let sauceCard = document.createElement('div');
        sauceCard.classList.add('sauce-card');
        sauceCard.dataset.name = sauce.name;

        magazine.appendChild(sauceCard);

        fetch((fetchUrl + '?id=' + sauce.id))
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(fillSauceCard)
            .catch(ajaxErrorHandler);
    }
}

function fillSauceCard(sauce) {

    let sauceCard = document.querySelector(`.sauce-card[data-name='${sauce.name}']`);

    let title = document.createElement('h2');
    title.innerHTML = `${sauce.name}`;
    sauceCard.appendChild(title);

    let image = document.createElement('img');
    image.src = sauce.imgUrl;
    sauceCard.appendChild(image);

    let button = document.createElement('button');
    button.setAttribute("class", "recipe")
    button.innerHTML = "details";
    button.dataset.id = sauce.id;
    sauceCard.appendChild(button);

    let favButton = document.createElement('button');
    favButton.setAttribute("class", "favorite")
    favButton.innerHTML = 'favorite'
    for (let favorite of favorites) {
        if (favorite == sauce.id) {
            favButton.classList.replace("favorite","favorited");
        }
    }

    favButton.dataset.id = sauce.id;
    sauceCard.appendChild(favButton);

    sauceData[sauce.id] = sauce;
}

function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'er is iets fout gegaan!';
    magazine.before(error);
}


function favoriteClickHandler(e) {
    let clickedItem = e.target;
    if (clickedItem.nodeName !== "BUTTON") {
        return;
    }
    if (clickedItem.className === 'favorite') {
        addFavorites(clickedItem);
    } else {
        removeFavorites(clickedItem);
    }
}

function addFavorites(clickedItem) {
    clickedItem.classList.replace("favorite", "favorited");
    favorites.push(clickedItem.dataset.id);
    localStorage.setItem("favorite", JSON.stringify(favorites));
    console.log(favorites)
}

function removeFavorites(clickedItem) {
    let index = favorites.indexOf(clickedItem.dataset.id);
    clickedItem.classList.replace("favorited", "favorite");
    favorites.splice(index, 1);
    localStorage.setItem("favorite", JSON.stringify(favorites));
}