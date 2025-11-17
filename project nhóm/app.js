// 1. Tìm nút 3 gạch
const hamburgerBtn = document.querySelector('.menu-icon');

// 2. Tìm 2 menu cần bật/tắt
const headMenu = document.querySelector('.head');
const userMenu = document.querySelector('.user-section');

// 3. Thêm sự kiện "click" cho nút 3 gạch
hamburgerBtn.addEventListener('click', () => {
    // Khi click, sẽ thêm/bỏ class 'active' cho cả 2 menu
    headMenu.classList.toggle('active');
    userMenu.classList.toggle('active');
});