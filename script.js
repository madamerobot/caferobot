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

// function addAnimation(element, direction){
//     element.style.transform = "translate(10px)"
// }

window.addEventListener('load', function(){ 
    screen01 = document.getElementById('screen-01')
    screen02 = document.getElementById('screen-02')
    screen03 = document.getElementById('screen-03')

    nextMeetup = document.querySelector('.next-meetup')
    date = document.querySelector('.date')
    eventLocation = document.querySelector('.location')

    introText = document.querySelector('.full-size')
    console.log('INTRO TEXT:')
    console.log(introText)

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
    if (elementIsVisible(screen01)){
        console.log("👀 SCREEN 01")
    } else if (elementIsVisible(screen02)){
        console.log("👀 SCREEN 02")
    } else if (elementIsVisible(screen03)){
        console.log("👀 SCREEN 03")
    }
})


