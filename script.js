let nextMeetup
let date
let eventLocation
let introText

let animatedElements = []
let animationMap = {}

let copyToggled = true
let smallScreen = false

function setIntroCopy1 () {
    nextMeetup.innerText = "NEXT MEETUP"
    nextMeetup.style.color = "#9013FE"
    eventLocation.innerText = "DE BLOEMENBAR"
    eventLocation.style.color = "#9013FE"
    date.innerText = "8PM | JULY 25TH"
    date.style.color = "#9013FE"
}

function setIntroCopy2 () {
    nextMeetup.innerText = "IN YOUR ASS"
    nextMeetup.style.color = "#FF2600"
    eventLocation.innerText = "YOUR FOCUS"
    eventLocation.style.color = "#FF2600"
    date.innerText = "WHAT WEB DEVELOPERS DO"
    date.style.color = "#FF2600"
}

function createAnimationMap (elementArray) {
    elementArray.map((element) => {
        if (element.id == 'room-container' || element.id == 'computer-image') {
            element.animationType = 'animation-01'
        } else if (element.id == 'faq-box' || element.id == 'house-image' ) {
            element.animationType = 'animation-02'
        } else if (element.id == 'letter-wrapper') {
            element.animationType = 'letter-animation'
        }
    })
    return elementArray
}

function elementIsVisible (element) {
    let vh = window.innerHeight
    let bounds = element.getBoundingClientRect()
    return !(bounds.top < 0 && bounds.bottom < 0)
      && !(bounds.top > vh && bounds.bottom > vh)
}

function addAnimation (element, animation) { 
    if (!smallScreen) {
        element.classList.add(animation)
    }
}

function removeAnimation (element, animation) {
    if (!smallScreen) {
        element.classList.remove(animation)
    }
}

function validateScreenSize () {
    if (this.window.innerWidth < 1000) {
        smallScreen = true
    } else {
        smallScreen = false
    }
}

window.addEventListener('load', function() { 

    validateScreenSize()

    //Grab Elements to animate
    let faqBox = document.getElementById('faq-box')
    let roomBox = document.getElementById('room-container')
    let letterWrapper = document.getElementById('letter-wrapper')
    let computerImage = document.getElementById('computer-image')
    let houseImage = document.getElementById('house-image')

    animatedElements.push(faqBox, roomBox, letterWrapper, computerImage, houseImage)
    animationMap = createAnimationMap(animatedElements)

    //Grab Elements to switch Copy
    nextMeetup = document.querySelector('.next-meetup')
    date = document.querySelector('.date')
    eventLocation = document.querySelector('.location')
    introText = document.querySelector('.full-size')

    introText.addEventListener('click', function() {
        if (copyToggled) {
            setIntroCopy1()
            copyToggled = false
        } else {
            setIntroCopy2()
            copyToggled = true
        }
    })
}) 

window.addEventListener('scroll', function() {
    Object.keys(animationMap).map((key, index) => {
        if (elementIsVisible(animationMap[index])){
            addAnimation(animationMap[index], animationMap[index].animationType)
        }
        else {
            removeAnimation(animationMap[index], animationMap[index].animationType)
        }
    })
})

window.addEventListener('resize', function () {
    validateScreenSize()
})