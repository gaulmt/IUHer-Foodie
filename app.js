const hamburgerBtn = document.querySelector('.menu-icon');
const headMenu = document.querySelector('.head');
const userMenu = document.querySelector('.user-section');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        headMenu.classList.toggle('active');
        userMenu.classList.toggle('active');
    });
}

const translations = {
    "en": {
        "nav-home": "Home",
        "nav-explore": "Explore",
        "nav-contact": "Contact",
        "nav-login": "Login",
        
        "story-title": "Our Story",
        "story-desc": "As students, we know that the journey of independence is tough. Finding a place to eat that is delicious, clean, and affordable is not easy. That's why we created this website to help make your academic journey a little easier.",
        
        "mission-title": "Our Mission",
        
        "card1-title": "Delicious - Cheap",
        "card1-desc": "The website will try to find and suggest the best, most hygienic, and suitable eateries for you.",
        
        "card2-title": "Connect - Share",
        "card2-desc": "Creating a student community to share dining locations and experiences. Forming a culinary map.",
        
        "card3-title": "Convenient - Saving",
        "card3-desc": "Saving time for students looking for restaurants, while creating convenience and ease for students in their meals.",
        
        "footer-desc": "Thank you for stopping by our website, hope you find the truly suitable dishes. Remember to leave a comment!",
        "footer-home": "Home",
        "footer-new": "New Restaurants",
        "footer-top": "Top Rated",
        "footer-support": "Support",
        "footer-help": "Help Center",
        "footer-report": "Report",
        "footer-about": "About Us",
        "footer-contact": "Contact"
    },
    "vi": {
        "nav-home": "Trang chủ",
        "nav-explore": "Khám phá",
        "nav-contact": "Liên hệ",
        "nav-login": "Đăng nhập",
        
        "story-title": "Câu chuyện của chúng tớ",
        "story-desc": "Là một sinh viên, chúng tớ biết rằng mọi thứ trong hành trình bước đầu tự lập của mỗi sinh viên đều rất khó khăn. Trong số đó, việc chọn được những quán ăn sao cho vừa ngon, vừa sạch sẽ, lại đảm bảo túi tiền là một điều không dễ với các bạn. Lẽ thế nên chúng tớ muốn góp chút sức thông qua trang web này để giúp các bạn dễ dàng hơn đôi chút trong hành trình học tập sắp tới.",
        
        "mission-title": "Sứ mệnh của trang web",
        
        "card1-title": "Ngon - Bổ - Rẻ",
        "card1-desc": "Trang web sẽ cố gắng tìm, đề xuất cho bạn những quán ăn tốt, đảm bảo vệ sinh và phù hợp nhất với bạn",
        
        "card2-title": "Kết nối - Sẻ chia",
        "card2-desc": "Tạo cộng đồng sinh viên cùng nhau chia sẻ địa điểm và kinh nghiệm ăn uống. Hình thành bản đồ ẩm thực",
        
        "card3-title": "Tiết kiệm - Tiện lợi",
        "card3-desc": "Tiết kiệm được quỹ thời gian cho sinh viên khi đi tìm quán, đồng thời còn tạo sự tiện lợi, dễ dàng cho sinh viên trong những bữa ăn",
        
        "footer-desc": "Cảm ơn bạn vì đã dừng chân tại website của chúng tớ, chúc bạn kiếm được những món ăn thật sự phù hợp. Nhớ để lại bình luận nha",
        "footer-home": "Trang chủ",
        "footer-new": "Quán ăn mới",
        "footer-top": "Top đánh giá",
        "footer-support": "Hỗ trợ",
        "footer-help": "Trung tâm trợ giúp",
        "footer-report": "Báo cáo",
        "footer-about": "Về chúng tôi",
        "footer-contact": "Liên hệ"
    }
};

const langBtn = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');
const langDropdown = document.querySelector('.lang-dropdown');

if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('show');
        langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target)) {
            langMenu.classList.remove('show');
            langDropdown.classList.remove('active');
        }
    });
}

function changeLang(lang) {
    const textSpan = langBtn.querySelector('span');
    
    if (lang === 'en') {
        textSpan.textContent = 'English';
    } else {
        textSpan.textContent = 'Tiếng Việt';
    }

    const data = translations[lang];

    for (let id in data) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = data[id];
        }
    }

    if (langMenu && langDropdown) {
        langMenu.classList.remove('show');
        langDropdown.classList.remove('active');
    }
}