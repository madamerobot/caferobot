function toggleCopy(date){

    console.log(date.style.color)
    
    if (date.style.color = 'rgb(255, 38, 0)'){
        date.style.color = 'rgb(144, 19, 254)'
    } else {
        date.style.color = 'rgb(255, 38, 0)'
    }

    // if (!toggled){
    //     date.innerText = 'JUNE 25TH'
    //     location.innerText = 'LOCATION TBC'
    //     nextMeetup.innerText = 'NEXT MEETUP'
    //     date.style.color = '#9013FE'
    //     location.style.color = '#9013FE'
    //     nextMeetup.style.color = '#9013FE'
    //     // toggled = true
    // } else {
    //     date.innerText = 'WHAT WEB DEVELOPERS DO'
    //     location.innerText = 'YOUR FOCUS'
    //     nextMeetup.innerText = 'IN YOUR ASS'
    //     date.style.color = '#FF2600'
    //     location.style.color = '#FF2600'
    //     nextMeetup.style.color = '#FF2600'
    //     // toggled = false
    // }
}

window.addEventListener('load', function(){
    
    let introContainer = document.querySelector('.full-size')

    introContainer.addEventListener('click', function(){
        let location = document.querySelector('.location')
        let nextMeetup = document.querySelector('.next-meetup')
        let date = document.querySelector('.date')
        toggleCopy(date)
    })
}) 


