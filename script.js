let nextMeetup
let date
let eventLocation
let introText
let animationMap = {}
let animatedElements = []

function elementIsVisible(element){
    let vh = window.innerHeight
    let bounds = element.getBoundingClientRect()
    return !(bounds.top < 0 && bounds.bottom < 0)
      && !(bounds.top > vh && bounds.bottom > vh)
}

function addAnimation(element){ 
    let referenceString = `"${element.id}"`
    console.log(referenceString)
    let animation = animationMap[referenceString]
    console.log(animation)
    element.classList.add(animation)
}

function removeAnimation(element){
    element.classList.remove('animation-01')
}

window.addEventListener('load', function(){ 

    //Grab Elements to animate
    let faqBox = document.getElementById('faq-box')
    let roomBox = document.getElementById('room-container')
    let letterWrapper = document.getElementById('letter-wrapper')
    let computerImage = document.getElementById('computer-image')
    let houseImage = document.getElementById('house-image')
    animatedElements.push(faqBox, roomBox, letterWrapper, computerImage, houseImage)
    animationMap = {
        faqBox: ['animation-01', 'faq-box'],
        roomContainer: ['animation-02', 'room-container'],
        letterWrapper: ['letter-animation', 'letter-wrapper'],
        computerImage: ['animation-01', 'computer-image'],
        houseImage: ['animation-02', 'house-image']
    }
    
    //Grab Elements to switch Copy
    nextMeetup = document.querySelector('.next-meetup')
    date = document.querySelector('.date')
    eventLocation = document.querySelector('.location')
    introText = document.querySelector('.full-size')

    introText.addEventListener('click', function(){
        nextMeetup.innerText = "NEXT MEETUP"
        nextMeetup.style.color = "#9013FE"
        eventLocation.innerText = "DE BLOEMENBAR"
        eventLocation.style.color = "#9013FE"
        date.innerText = "8PM | JULY 25TH"
        date.style.color = "#9013FE"
    })
}) 

window.addEventListener('scroll', function() {
    animatedElements.forEach(element => {
        if (elementIsVisible(element)) {
            addAnimation(element)
        } else {
            removeAnimation(element)
        }
    })
})