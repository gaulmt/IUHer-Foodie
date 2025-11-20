document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.langBtn');
    const menu = document.querySelector('.langMenu');

    btn.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});
