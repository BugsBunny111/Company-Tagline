// Бургер меню

let burgerMenu = document.querySelector('.burger-menu'),
    headerMainMenu = document.querySelector('.header__main-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerMainMenu.classList.toggle('active');
    
    if (headerMainMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

burgerMenu.addEventListener('touch', () => {
    burgerMenu.classList.toggle('active');
    headerMainMenu.classList.toggle('active');
    
    if (headerMainMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});