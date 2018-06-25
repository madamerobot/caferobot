let screen01
let screen02
let screen03
let nextMeetup
let date
let eventLocation
let introText

function elementIsVisible(element){
    let vh = window.innerHeight
    let bounds = element.getBoundingClientRect()
    return !(bounds.top < 0 && bounds.bottom < 0)
      && !(bounds.top > vh && bounds.bottom > vh)
}

function animateElements(screen){    
    console.log(`Animating ${screen.id}`)
    let screenNumber = screen.id.split('-')[1]
    let selector = `img-${screenNumber}`
    let selectedElement = document.getElementById(selector)
    let bounds = selectedElement.getBoundingClientRect()
    console.log(bounds.x, bounds.y)
    selectedElement.style.transition = "transform(0.25s ease-in-out)";
    selectedElement.style.transform = "translate(-15px, 15px)";
    // selectedElement.style.transform = "translate(50px, -50px)";
}

window.addEventListener('load', function(){ 
    screen01 = document.getElementById('screen-01')
    screen02 = document.getElementById('screen-02')
    screen03 = document.getElementById('screen-03')

    nextMeetup = document.querySelector('.next-meetup')
    date = document.querySelector('.date')
    eventLocation = document.querySelector('.location')

    introText = document.querySelector('.full-size')

    introText.addEventListener('click', function(){
        nextMeetup.innerText = "MEXT MEETUP"
        nextMeetup.style.color = "#9013FE"
        eventLocation.innerText = "DE RUYSCHKAMER"
        eventLocation.style.color = "#9013FE"
        date.innerText = "JUNE 27TH"
        date.style.color = "#9013FE"
    })
}) 

window.addEventListener('scroll', function() {
    
    let animationToggled = false

    if (elementIsVisible(screen02)){
        console.log("👀 SCREEN 02")
        animateElements(screen02)
        animationToggled = true
    } else if (elementIsVisible(screen03)){
        console.log("👀 SCREEN 03")
        animateElements(screen03)
        animationToggled = true
    }
})


