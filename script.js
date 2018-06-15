let introContainer

function toggleCopy(date){

    console.log(date.style.color)
    
    if (date.style.color = 'rgb(255, 38, 0)'){
        date.style.color = 'rgb(144, 19, 254)'
    } else {
        date.style.color = 'rgb(255, 38, 0)'
    }
}

function elementIsVisible(element){
    let vh = window.innerHeight
    let bounds = element.getBoundingClientRect()
    return !(bounds.top < 0 && bounds.bottom < 0)
      && !(bounds.top > vh && bounds.bottom > vh)
}

window.addEventListener('load', function(){
    
    introContainer = document.querySelector('.intro-screen')

    introContainer.addEventListener('click', function(){
        let location = document.querySelector('.location')
        let nextMeetup = document.querySelector('.next-meetup')
        let date = document.querySelector('.date')
        toggleCopy(date)
    })
}) 

window.addEventListener('scroll', function() {
    console.log(elementIsVisible(introContainer))
})


