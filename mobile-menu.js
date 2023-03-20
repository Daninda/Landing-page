function toggleMobileMenu () {
    body.classList.toggle('no-scroll');
    menuButton.classList.toggle('mobile-menu-button_active');
    menu.classList.toggle('mobile-menu_active');
}

let menuButton = document.querySelector('.mobile-menu-button');
let menu = document.querySelector('.mobile-menu');
let body = document.querySelector('body')
let menuItems = document.querySelectorAll('.mobile-menu__menu-link')

menuButton.addEventListener('click', toggleMobileMenu)

menuItems.forEach(element => {
    element.addEventListener('click', toggleMobileMenu)
});

let mediaQuery = window.matchMedia('(min-width: 768px)')
mediaQuery.addEventListener('change', function(e) {
    if (e.matches && menu.classList.contains('mobile-menu_active')) {
        toggleMobileMenu();
      }
})
