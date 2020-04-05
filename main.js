//Select element function

const elementSelector = (element) => {
    return document.querySelector(element)
}

let menuToggle = elementSelector('.menu-toggle')
let body = elementSelector('body')

menuToggle.addEventListener('click' , function() {
    body.classList.toggle('open')
})

// Scroll Reveal

window.sr = ScrollReveal()

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
})

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
})
