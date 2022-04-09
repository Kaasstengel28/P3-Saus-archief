<?php
/**
 * @return array
 */
function getSauce()
{
    return [
        [
            "id" => 1,
            "name" => "Kaassaus",
        ],
        [
            "id" => 2,
            "name" => "Knoflook saus",
        ],
        [
            "id" => 3,
            "name" => "Ketchup",
        ],
        [
            "id" => 4,
            "name" => "Joppie saus",
        ],
        [
            "id" => 5,
            "name" => "Chilli saus",
        ],
        [
            "id" => 6,
            "name" => "Piri piri saus",
        ],
        [
            "id" => 7,
            "name" => "Mammoet saus",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getSauceDetails($id)
{
    $details = [
        1 => [
            "id" => 1,
            "name" => "Kaassaus",
            "imgUrl" => "https://cdn.discordapp.com/attachments/639826394850787351/961030000742649876/Akbar_4.jpg",
            "recipe" => "lekker sausje",
        ],
        2 => [
            "id" => 2,
            "name" => "Knoflook saus",
            "imgUrl" => "https://cdn.discordapp.com/attachments/639826394850787351/961030000742649876/Akbar_4.jpg",
            "recipe" => "",
        ],
        3 => [
            "id" => 3,
            "name" => "Ketchup",
            "imgUrl" => "https://cdn.discordapp.com/attachments/639826394850787351/961030000742649876/Akbar_4.jpg",
            "recipe" => "",
        ],
        4 => [
            "id" => 4,
            "name" => "Joppie saus",
            "imgUrl" => "https://cdn.discordapp.com/attachments/639826394850787351/961030000742649876/Akbar_4.jpg",
            "recipe" => "",
        ],
        5 => [
            "id" => 5,
            "name" => "Chilli saus",
            "imgUrl" => "https://cdn.discordapp.com/attachments/639826394850787351/961030000742649876/Akbar_4.jpg",
            "recipe" => "",
        ],
        6 => [
            "id" => 6,
            "name" => "Piri piri saus",
            "imgUrl" => "https://cdn.discordapp.com/attachments/639826394850787351/961030000742649876/Akbar_4.jpg",
            "recipe" => "",
        ],
        7 => [
            "id" => 7,
            "name" => "Mammoet saus",
            "imgUrl" => "https://cdn.discordapp.com/attachments/639826394850787351/961030000742649876/Akbar_4.jpg",
            "recipe" => "",
        ],
    ];

    return $details[$id];
}