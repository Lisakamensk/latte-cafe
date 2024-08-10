// Переключение табов
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.menu-food__tabs button');
    const tabs = document.querySelectorAll('.menu-food__right > div');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabs.forEach(tab => tab.classList.remove('active'));
            tabs[index].classList.add('active');
        });
    });

    buttons[0].classList.add('active');
    tabs[0].classList.add('active');
});

// Hamburger Menu
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
});