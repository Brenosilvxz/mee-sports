const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const carrossel = document.querySelector(".carrossel")
const items = carrossel.querySelectorAll(".list .item")
const indicator = document.querySelector(".indicators .number")

let active = 0
const lastPosition = items.length - 1

function updateCarousel() {

    // remove active de todos
    items.forEach(item => {
        item.classList.remove("active")
    })

    // adiciona no item atual
    items[active].classList.add("active")

    // indicador
    indicator.innerHTML = "0" + (active + 1)
}


// NEXT
nextButton.addEventListener("click", () => {

    if (active >= lastPosition) {
        active = 0
    } else {
        active++
    }

    updateCarousel()
})


// PREV
prevButton.addEventListener("click", () => {

    if (active <= 0) {
        active = lastPosition
    } else {
        active--
    }

    updateCarousel()


    setinterval(() => item(1),7000)
})