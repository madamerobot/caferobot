let screen01
let screen02
let screen03

function elementIsVisible(element){
    let vh = window.innerHeight
    let bounds = element.getBoundingClientRect()
    return !(bounds.top < 0 && bounds.bottom < 0)
      && !(bounds.top > vh && bounds.bottom > vh)
}

window.addEventListener('load', function(){ 
    screen01 = document.getElementById('screen-01')
    screen02 = document.getElementById('screen-02')
    screen03 = document.getElementById('screen-03')
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


