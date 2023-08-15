const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow,i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0
     arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (4 + clickCounter) <0){
                  movieLists[i].style.transform = "translateX()"
        }
        
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.sign-in,.cart,.Sign,.wrapper,.login,body");


ball.addEventListener("click",() => {
    items.forEach(items => {
        items.classList.toggle("active");
    })
    ball.classList.toggle("active");
}) 
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");



registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active")

})
 loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active")

})
btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup")

})
iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup")

})
iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup")

})
