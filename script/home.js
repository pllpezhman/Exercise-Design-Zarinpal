let elements = {
    header:document.querySelector("header"),
    mobileHamMenu: document.querySelector('.btnToggleMobileHamMenu'),
    wrapper:document.querySelector('.wrapper'),
    mobileMenu:document.querySelector(".mobile-menu"),
}


window.addEventListener('scroll', e =>{
    if(window.scrollX > 10){
        elements.header.classList.add("sticky");
    }else{
        elements.header.classList.remove("sticky");
    }
})

mobileHamMenu.addEventListener("click", e => {
    let e.
})