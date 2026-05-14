let prevButton = document.getElementById("prev")
let nextButton = document.getElementById("next")
let carrossel = document.querySelector('.carrossel')
let items = carrossel.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')


let active = 0
let firstPosition = 1
let lastPosition = items.lenght -1

nextButton.onclick = () => {
    let itemOld = carrossel.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
    //if
    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
    
}
prevButton.onclick = () => {
    let itemOld = carrossel.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
    //if
    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

     indicator.querySelector('.number').innerHTML = '0' + (active + 2 - 1)

}