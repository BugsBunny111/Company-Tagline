window.onload = () => {
    function include(url) {
        var script = document.createElement('script');
        script.src = './script/'+url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    include('main.js');


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
}


