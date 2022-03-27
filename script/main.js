
const ymap = document.querySelector('.yandex-map');
const ymapShadow = ymap.querySelector('.yandex-map__bg-shadow');

let classToggle = (element, classTarget) => {
    if (element.classList.contains(classTarget)) {
        element.classList.remove(classTarget);
    } else {
        element.classList.add(classTarget);
    }
}

let mouseLeave = (element, classTarget) => {
    if (element.classList.contains(classTarget)) {
        element.classList.remove(classTarget);
    }
}

ymapShadow.addEventListener('click', () => classToggle(ymapShadow, 'd-none'));
ymap.addEventListener('mouseleave', () => mouseLeave(ymapShadow, 'd-none'));