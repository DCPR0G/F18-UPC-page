// - - - - - - - - EFECTO HEADER SCROLL - - - - - - - - //

const header = document.querySelector(".header");

let mainPosition = window.pageYOffset;

window.onscroll = function(){
    let currentOffSe = window.pageYOffset;
    if(mainPosition >= currentOffSe){
        header.style.transition = "250ms";
        header.style.top = "0";
    }
    else{
        header.style.top = "-59px";
        header.style.transition = "250ms";
    }
    mainPosition = currentOffSe;
};



const welcomeButton = document.querySelectorAll(".welcome-button");
const winds = document.querySelectorAll(".wind");
const f18 = document.querySelector(".f18-svg")

welcomeButton.forEach(button=>{

    button.addEventListener("mouseover",()=>{
        f18.style.marginRight = `1em`
        winds.forEach(wind=>{
            wind.style.animationDuration = `500ms`
        })   
    })

    button.addEventListener("mouseleave",()=>{
        f18.style.marginRight = 0
        winds.forEach(wind=>{
            wind.style.animationDuration = `1s`
        })
    })
})

