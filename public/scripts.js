const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function(){
        const id = card.getAttribute("id")
        const product = card.querySelector("h2").innerHTML
        const author = card.querySelector("h3").innerHTML

        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = id;
        modalOverlay.querySelector("h2").innerHTML = product
        modalOverlay.querySelector("h3").innerHTML = author
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
})
