// Grow DOM element

const images = document.querySelector(".images")
const imagesCollections = document.querySelectorAll(".image")
const btnPrev = document.querySelector(".prev")
const btnNext = document.querySelector(".next")

let index = 0

let Interval = setInterval(startInterval, 5000)

function startInterval () {
    index++
    changeImages ()
}


function changeImages () {
    
    if(index > imagesCollections.length -1) {
        index = 0
    } else if (index < 0){
        index = imagesCollections.length -1
    }

    images.style.transform = `translateX(-${index * 800 }px)`
} 


btnNext.addEventListener('click', nextImage)

function nextImage () {
    index++
    changeImages()
}


btnPrev.addEventListener('click', prevImage)

function prevImage () {
    index--
    changeImages()
}