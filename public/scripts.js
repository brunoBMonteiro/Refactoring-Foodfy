const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".button");
const ingredients = document.querySelector(".ingredients-content");
const preparation = document.querySelector(".preparation-content");
const information = document.querySelector(".information-content");

for (let card of cards) {
    card.addEventListener("click", function () {
        const recipeId = card.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`
    })
}

for (let button of buttons) {
    button.addEventListener('click', function () {
        if (button === 'MOSTRAR') {
            ingredients.classList.add('active')

        }

    })
}