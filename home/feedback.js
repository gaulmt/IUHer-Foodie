const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');

let currentIndex = 0; // Thẻ đầu tiên (index 0) sẽ là thẻ trung tâm khi khởi tạo

function updateCarousel() {
    // 1. Xóa tất cả các class định vị trước đó
    carouselItems.forEach(item => {
        item.classList.remove('center', 'left', 'right', 'active');
    });

    // 2. Tính toán các chỉ mục cho thẻ trung tâm, trái và phải
    const totalItems = carouselItems.length;

    // Sử dụng modulo (%) để lặp lại danh sách (khi đến cuối thì quay lại đầu)
    const centerIndex = (currentIndex + totalItems) % totalItems;
    // (currentIndex - 1 + totalItems) % totalItems: Đảm bảo chỉ mục không bị âm
    const leftIndex = (currentIndex - 1 + totalItems) % totalItems; 
    const rightIndex = (currentIndex + 1 + totalItems) % totalItems;

    // 3. Áp dụng các class CSS cho từng thẻ
    carouselItems[centerIndex].classList.add('center', 'active');
    carouselItems[leftIndex].classList.add('left', 'active');
    carouselItems[rightIndex].classList.add('right', 'active');
}

// Xử lý sự kiện nút Kế tiếp (Next)
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

// Xử lý sự kiện nút Trước đó (Previous)
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

// Khởi tạo carousel khi tải trang
updateCarousel();