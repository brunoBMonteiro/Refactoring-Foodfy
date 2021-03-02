const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function () {
        const recipeId = card.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`
    })
}

const recipeWrapers = document.querySelectorAll('.recipe-wraper')

for (let wraper of recipeWrapers) {
    const button = wrapper.querySelector('.button')

    button.addEventListener('click', function () {
        wraper.classList.add('button')
        wraper.querySelector('').classList.toggle('button')
        if (button.innerHTML == 'ESCONDER') {
            button.innerHTML = 'MOSTRAR'
        } else {
            button.innerHTML = 'ESCONDER'
        }
    })
}