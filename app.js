const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo');
// Display mobile menu 
const mobileMenu =() => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling

const highlightMenu =() =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')

    let scrollPos = window.scrollY

    // Adds 'highlight' class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight') 
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos <2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem){
        elem.classList.remove('highlight')
    }
}


window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)

// close mobile menu after clicking a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click',hideMobileMenu)
navLogo.addEventListener('click',hideMobileMenu)

// function sign(){
//     window.location.href="signup.html" <button class="main__btn" onclick="javascript:window.location.replace('./New Project 1/signup.html')">Sign Up</button>
// }