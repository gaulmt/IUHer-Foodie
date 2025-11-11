// --- Dữ liệu Dịch Ngôn Ngữ (Giữ nguyên) ---
const translations = {
    'vi': {
        'login_title': 'Đăng nhập',
        'phone_input': 'Email',
        'password_input': 'Mật khẩu',
        'remember_me': 'Lưu thông tin',
        'forgot_password': 'Quên mật khẩu',
        'login_with': 'Đăng nhập với',
        'no_account': 'Bạn chưa có tài khoản?',
        'register_now': 'Đăng kí ngay',
        'signin_title': 'Đăng Ký',
        'signin_button': 'Đăng Ký Tài Khoản',
        'signin_with': 'Đăng ký với',
        'username_input': 'Tên người dùng',
        'email_input': 'Email (dùng để đăng nhập)',
        'confirm_password_input': 'Xác nhận mật khẩu',
        'have_account': 'Đã có tài khoản?',
        'login_now': 'Đăng nhập ngay',
        'footer_text': 'Cảm ơn bạn vì đã dừng chân tại website của chúng tôi, chúc bạn kiếm được những món ăn thật sự phù hợp. Nhớ để lại bình luận nha',
        'footer_home': 'Trang chủ',
        'footer_support': 'Hỗ trợ',
        'footer_contact': 'Liên hệ',
        'new_restaurants': 'Quán ăn mới',
        'top_reviews': 'Top đánh giá',
        'help_center': 'Trung tâm trợ giúp',
        'report': 'Báo cáo',
        'about_us': 'Về chúng tôi',
        // Alerts
        'alert_invalid_pass': 'Mật khẩu phải có ít nhất 6 ký tự!',
        'alert_login_success': 'Đăng nhập thành công! Chào mừng trở lại.',
        'alert_register_confirm': 'Tài khoản chưa tồn tại. Bạn có muốn đăng ký tài khoản mới không?',
        'alert_register_success': 'Đăng ký thành công! Bạn đã được đăng nhập.',
        'alert_login_fail': 'Đăng nhập thất bại.',
        'alert_register_error': 'Lỗi Đăng ký: ',
        'alert_login_error': 'Lỗi Đăng nhập: ',
        'alert_pass_mismatch': 'Mật khẩu và Xác nhận mật khẩu không khớp!',
        'alert_signin_success': 'Đăng ký thành công! Bạn đã được đăng nhập.',
        'alert_email_in_use': 'Email này đã được sử dụng. Vui lòng Đăng nhập hoặc dùng Email khác.',
        'alert_social_login': 'Tính năng đăng nhập bằng [platform] cần logic Firebase Auth mở rộng (ví dụ: auth.signInWithPopup).'
    },
    'en': {
        'login_title': 'Login',
        'phone_input': 'Email',
        'password_input': 'Password',
        'remember_me': 'Remember me',
        'forgot_password': 'Forgot password',
        'login_with': 'Log in with',
        'no_account': 'Don\'t have an account?',
        'register_now': 'Register now',
        'signin_title': 'Sign Up',
        'signin_button': 'Register Account',
        'signin_with': 'Sign up with',
        'username_input': 'Username',
        'email_input': 'Email (for login)',
        'confirm_password_input': 'Confirm Password',
        'have_account': 'Already have an account?',
        'login_now': 'Login now',
        'footer_text': 'Thank you for visiting our website, we hope you find suitable dishes. Please leave a review!',
        'footer_home': 'Home',
        'footer_support': 'Support',
        'footer_contact': 'Contact',
        'new_restaurants': 'New restaurants',
        'top_reviews': 'Top reviews',
        'help_center': 'Help center',
        'report': 'Report',
        'about_us': 'About us',
        'alert_invalid_pass': 'Password must be at least 6 characters long!',
        'alert_login_success': 'Login successful! Welcome back.',
        'alert_register_confirm': 'Account does not exist. Do you want to register a new account?',
        'alert_register_success': 'Registration successful! You are now logged in.',
        'alert_login_fail': 'Login failed.',
        'alert_register_error': 'Registration Error: ',
        'alert_login_error': 'Login Error: ',
        'alert_pass_mismatch': 'Password and Confirm Password do not match!',
        'alert_signin_success': 'Registration successful! You are now logged in.',
        'alert_email_in_use': 'This email is already in use. Please Login or use a different Email.',
        'alert_social_login': 'Social login via [platform] requires extended Firebase Auth logic (e.g., auth.signInWithPopup).'
    }
};

function translatePage() {
    // ... (logic dịch ngôn ngữ giữ nguyên) ...
    const lang = localStorage.getItem('lang') || 'vi'; 
    const dict = translations[lang];

    if (!dict) return; 

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (dict[key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', dict[key]);
            } 
            else if (element.tagName === 'TITLE') {
                const appName = " - IUHer Foodie";
                // Lấy từ khóa đăng nhập hoặc đăng ký và nối với tên ứng dụng
                const titleKey = key.includes('login') ? 'login_title' : 'signin_title'; 
                element.textContent = dict[titleKey] + appName;
            }
            else {
                element.textContent = dict[key];
            }
        }
    });

    document.documentElement.setAttribute('lang', lang);
}


// --- Logic Firebase và Xử lý Form ---
document.addEventListener('DOMContentLoaded', function() {
    
    translatePage(); 
    
    const lang = localStorage.getItem('lang') || 'vi'; 
    const dict = translations[lang];
    
    const loginForm = document.getElementById('loginForm');
    const signinForm = document.getElementById('signinForm'); 

    // ------------------------------------------------------------------
    // A. Xử lý logic Đăng Nhập (index.html)
    // ------------------------------------------------------------------
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault(); 

            const email = document.getElementById('phone').value; 
            const password = document.getElementById('password').value;

            if (password.length < 6) {
                alert(dict['alert_invalid_pass']);
                return;
            }

            try {
                // Cố gắng Đăng nhập
                const userCredential = await auth.signInWithEmailAndPassword(email, password);
                const user = userCredential.user;
                
                await updateLoginTime(user.uid);
                alert(dict['alert_login_success']);

                // === LOGIC CHUYỂN HƯỚNG MỚI (ĐĂNG NHẬP THÀNH CÔNG) ===
                window.location.href = "../home.html";
                // ======================================================

            } catch (loginError) {
                if (loginError.code === 'auth/user-not-found' || loginError.code === 'auth/wrong-password') {
                    
                    // Nếu đăng nhập thất bại, thử Đăng ký
                    if (confirm(dict['alert_register_confirm'])) {
                        try {
                            const newUserCredential = await auth.createUserWithEmailAndPassword(email, password);
                            const newUser = newUserCredential.user;

                            // Giả định không có username khi đăng ký trực tiếp từ trang login
                            await saveNewUserData(newUser.uid, email); 

                            alert(dict['alert_register_success']);

                            // === LOGIC CHUYỂN HƯỚNG MỚI (ĐĂNG KÝ NGAY TỪ LOGIN) ===
                            window.location.href = "../home.html"; 
                            // ======================================================

                        } catch (registerError) {
                            console.error('Lỗi Đăng ký:', registerError.message);
                            alert(dict['alert_register_error'] + registerError.message);
                        }
                    } else {
                        alert(dict['alert_login_fail']);
                    }
                } else {
                    console.error('Lỗi Đăng nhập:', loginError.message);
                    alert(dict['alert_login_error'] + loginError.message);
                }
            }
        });
    }

    // ------------------------------------------------------------------
    // B. Xử lý logic Đăng Ký (signin.html)
    // ------------------------------------------------------------------
    if (signinForm) {
        signinForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password.length < 6) {
                alert(dict['alert_invalid_pass']);
                return;
            }

            if (password !== confirmPassword) {
                alert(dict['alert_pass_mismatch']);
                return;
            }
            
            try {
                // 1. Tạo người dùng Firebase Auth
                const newUserCredential = await auth.createUserWithEmailAndPassword(email, password);
                const newUser = newUserCredential.user;

                // 2. Lưu thông tin bổ sung (username) vào Firestore
                await saveNewUserData(newUser.uid, email, username);

                console.log('Đăng ký và Lưu trữ Firestore thành công:', newUser.uid);
                alert(dict['alert_signin_success']);
                
                // === LOGIC CHUYỂN HƯỚNG MỚI (ĐĂNG KÝ THÀNH CÔNG) ===
                window.location.href = "home.html"; 
                // ===================================================

            } catch (error) {
                console.error('Lỗi Đăng ký:', error.message);
                
                if (error.code === 'auth/email-already-in-use') {
                    alert(dict['alert_email_in_use']);
                } else {
                    alert(dict['alert_register_error'] + error.message);
                }
            }
        });
    }

    // ------------------------------------------------------------------
    // C. Các hàm Firebase và logic Social Login (Giữ nguyên)
    // ------------------------------------------------------------------
    async function saveNewUserData(uid, email, username = null) {
        return db.collection('users').doc(uid).set({
            email: email,
            username: username, 
            role: 'user', 
            createdAt: firebase.firestore.FieldValue.serverTimestamp(), 
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
    
    async function updateLoginTime(uid) {
         return db.collection('users').doc(uid).update({
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    document.querySelectorAll('.social-button').forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.classList.contains('facebook-btn') ? 'Facebook' : 'TikTok';
            const alertMessage = dict['alert_social_login'].replace('[platform]', platform);
            alert(alertMessage);
        });
    });
});