console.log('=== LOGIN.JS LOADED ===');

// --- Dữ liệu Dịch Ngôn Ngữ (Giữ nguyên) ---
const translations = {
    'vi': {
        'login_title': 'Đăng nhập',
        'phone_input': 'Email/Số điện thoại',
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
        'alert_login_success': 'Đăng nhập thành công!',
        'alert_login_success_msg': 'Chào mừng bạn trở lại với IUHer Foodie',
        'alert_register_confirm': 'Tài khoản chưa tồn tại. Bạn có muốn đăng ký tài khoản mới không?',
        'alert_register_success': 'Đăng ký thành công!',
        'alert_register_success_msg': 'Chào mừng bạn đến với IUHer Foodie',
        'alert_login_fail': 'Đăng nhập thất bại',
        'alert_login_fail_msg': 'Email hoặc mật khẩu không đúng',
        'alert_account_not_exist': 'Tài khoản không tồn tại',
        'alert_wrong_password': 'Sai mật khẩu',
        'alert_wrong_password_msg': 'Vui lòng kiểm tra lại mật khẩu của bạn',
        'alert_register_error': 'Lỗi Đăng ký',
        'alert_login_error': 'Lỗi Đăng nhập',
        'alert_pass_mismatch': 'Mật khẩu và Xác nhận mật khẩu không khớp!',
        'alert_signin_success': 'Đăng ký thành công!',
        'alert_email_in_use': 'Email này đã được sử dụng. Vui lòng đăng nhập hoặc dùng email khác.',
        'alert_email_in_use_title': 'Email đã tồn tại',
        'alert_social_login': 'Tính năng đăng nhập bằng [platform] cần logic Firebase Auth mở rộng (ví dụ: auth.signInWithPopup).'
    },
    'en': {
        'login_title': 'Login',
        'phone_input': 'Email/Phone number',
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
        'alert_login_success': 'Login successful!',
        'alert_login_success_msg': 'Welcome back to IUHer Foodie',
        'alert_register_confirm': 'Account does not exist. Do you want to register a new account?',
        'alert_register_success': 'Registration successful!',
        'alert_register_success_msg': 'Welcome to IUHer Foodie',
        'alert_login_fail': 'Login failed',
        'alert_login_fail_msg': 'Email or password is incorrect',
        'alert_account_not_exist': 'Account does not exist',
        'alert_wrong_password': 'Wrong password',
        'alert_wrong_password_msg': 'Please check your password again',
        'alert_register_error': 'Registration Error',
        'alert_login_error': 'Login Error',
        'alert_pass_mismatch': 'Password and Confirm Password do not match!',
        'alert_signin_success': 'Registration successful!',
        'alert_email_in_use': 'This email is already in use. Please login or use a different email.',
        'alert_email_in_use_title': 'Email already exists',
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
document.addEventListener('DOMContentLoaded', function () {
    console.log('=== LOGIN.JS DOM READY ===');

    translatePage();

    const lang = localStorage.getItem('lang') || 'vi';
    const dict = translations[lang];

    const loginForm = document.getElementById('loginForm');
    const signinForm = document.getElementById('signinForm');

    console.log('loginForm found:', loginForm !== null);
    console.log('signinForm found:', signinForm !== null);

    // ------------------------------------------------------------------
    // A. Xử lý logic Đăng Nhập (index.html)
    // ------------------------------------------------------------------
    if (loginForm) {
        console.log('=== ADDING LOGIN FORM LISTENER ===');
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            console.log('=== LOGIN FORM SUBMITTED ===');

            const email = document.getElementById('phone').value;
            const password = document.getElementById('password').value;

            if (password.length < 6) {
                alert(dict['alert_invalid_pass']);
                return;
            }

            console.log('Bắt đầu đăng nhập với email:', email);

            try {
                // Kiểm tra đăng nhập với Firebase Auth
                console.log('Đang gọi Firebase Auth...');
                const userCredential = await auth.signInWithEmailAndPassword(email, password);
                const user = userCredential.user;
                console.log('✅ Đăng nhập thành công! UID:', user.uid);

                // Chuyển hướng ngay lập tức đến trang home (không đợi update)
                console.log('🚀 Đang chuyển hướng đến home.html...');
                window.location.href = 'home.html';

                // Cập nhật lastLogin trong background (không chặn redirect)
                updateLoginTime(user.uid).then(() => {
                    console.log('✅ Cập nhật lastLogin thành công!');
                }).catch((updateError) => {
                    console.warn('⚠️ Không thể cập nhật lastLogin:', updateError);
                });

            } catch (loginError) {
                console.error('Lỗi Đăng nhập:', loginError.code, loginError.message);

                // Hiển thị thông báo lỗi chung cho tất cả các trường hợp sai
                showErrorNotification(
                    dict['alert_login_fail'] || 'Đăng nhập thất bại',
                    'Email hoặc mật khẩu không chính xác. Vui lòng thử lại.'
                );
            }
        });
    }

    // ------------------------------------------------------------------
    // B. Xử lý logic Đăng Ký (signin.html)
    // ------------------------------------------------------------------
    if (signinForm) {
        signinForm.addEventListener('submit', async function (event) {
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

            console.log('Bắt đầu đăng ký với email:', email);

            try {
                // 1. Tạo tài khoản mới với Firebase Auth (tự động lưu email + mật khẩu đã mã hóa)
                console.log('Đang tạo tài khoản Firebase Auth...');
                const newUserCredential = await auth.createUserWithEmailAndPassword(email, password);
                const newUser = newUserCredential.user;
                console.log('✅ Tạo tài khoản thành công! UID:', newUser.uid);

                // 2. Chuyển hướng ngay lập tức đến trang home (không đợi Firestore)
                console.log('🚀 Đang chuyển hướng đến home.html...');
                window.location.href = 'home.html';

                // Lưu thông tin vào Firestore trong background (không chặn redirect)
                saveNewUserData(newUser.uid, email, username).then(() => {
                    console.log('✅ Lưu Firestore thành công!');
                }).catch((saveError) => {
                    console.warn('⚠️ Không thể lưu vào Firestore:', saveError);
                });

            } catch (error) {
                console.error('Lỗi Đăng ký:', error.code, error.message);

                // Xử lý các loại lỗi cụ thể
                if (error.code === 'auth/email-already-in-use') {
                    // Email đã được sử dụng
                    showErrorNotification(
                        dict['alert_email_in_use_title'],
                        dict['alert_email_in_use']
                    );
                } else if (error.code === 'auth/invalid-email') {
                    // Email không hợp lệ
                    showErrorNotification(
                        dict['alert_register_error'],
                        'Email không hợp lệ'
                    );
                } else if (error.code === 'auth/weak-password') {
                    // Mật khẩu yếu
                    showErrorNotification(
                        dict['alert_register_error'],
                        'Mật khẩu quá yếu. Vui lòng chọn mật khẩu mạnh hơn'
                    );
                } else {
                    // Lỗi khác
                    showErrorNotification(
                        dict['alert_register_error'],
                        error.message
                    );
                }
            }
        });
    }

    // ------------------------------------------------------------------
    // C. Các hàm Firebase và logic Social Login 
    // ------------------------------------------------------------------

    /**
     * Lưu thông tin người dùng vào Firestore
     * LƯU Ý: 
     * - Firebase Auth tự động lưu email + mật khẩu (đã mã hóa) - KHÔNG THỂ truy xuất mật khẩu plain text
     * - Firestore lưu thông tin bổ sung: username, email, role, timestamps
     * - Mật khẩu KHÔNG được lưu trong Firestore vì lý do bảo mật
     */
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

    // ------------------------------------------------------------------
    // D. Đăng nhập bằng Google và Facebook
    // ------------------------------------------------------------------

    // Đăng nhập bằng Google
    const googleButtons = document.querySelectorAll('.google-btn');
    console.log('Found Google buttons:', googleButtons.length);

    googleButtons.forEach(button => {
        console.log('Adding click listener to Google button');
        button.addEventListener('click', async function (e) {
            e.preventDefault();
            console.log('🔵 Google button clicked!');

            try {
                const provider = new firebase.auth.GoogleAuthProvider();
                const result = await auth.signInWithPopup(provider);
                const user = result.user;

                console.log('✅ Đăng nhập Google thành công! UID:', user.uid);

                // Lưu thông tin người dùng vào Firestore (nếu là lần đầu)
                saveNewUserData(user.uid, user.email, user.displayName).catch(err => {
                    console.warn('User đã tồn tại hoặc lỗi lưu:', err);
                });

                // Chuyển hướng đến home
                console.log('🚀 Đang chuyển hướng đến home.html...');
                window.location.href = 'home.html';

            } catch (error) {
                console.error('Lỗi đăng nhập Google:', error);

                if (error.code === 'auth/popup-closed-by-user') {
                    showErrorNotification(
                        'Đăng nhập bị hủy',
                        'Bạn đã đóng cửa sổ đăng nhập Google'
                    );
                } else if (error.code === 'auth/popup-blocked') {
                    showErrorNotification(
                        'Popup bị chặn',
                        'Vui lòng cho phép popup trong trình duyệt'
                    );
                } else {
                    showErrorNotification(
                        'Lỗi đăng nhập Google',
                        error.message
                    );
                }
            }
        });
    });

    // Đăng nhập bằng Facebook
    const facebookButtons = document.querySelectorAll('.facebook-btn');
    facebookButtons.forEach(button => {
        button.addEventListener('click', async function (e) {
            e.preventDefault();
            console.log('Đăng nhập bằng Facebook...');

            try {
                const provider = new firebase.auth.FacebookAuthProvider();
                const result = await auth.signInWithPopup(provider);
                const user = result.user;

                console.log('✅ Đăng nhập Facebook thành công! UID:', user.uid);

                // Lưu thông tin người dùng vào Firestore (nếu là lần đầu)
                saveNewUserData(user.uid, user.email, user.displayName).catch(err => {
                    console.warn('User đã tồn tại hoặc lỗi lưu:', err);
                });

                // Chuyển hướng đến home
                console.log('🚀 Đang chuyển hướng đến home.html...');
                window.location.href = 'home.html';

            } catch (error) {
                console.error('Lỗi đăng nhập Facebook:', error);

                if (error.code === 'auth/popup-closed-by-user') {
                    showErrorNotification(
                        'Đăng nhập bị hủy',
                        'Bạn đã đóng cửa sổ đăng nhập Facebook'
                    );
                } else if (error.code === 'auth/popup-blocked') {
                    showErrorNotification(
                        'Popup bị chặn',
                        'Vui lòng cho phép popup trong trình duyệt'
                    );
                } else if (error.code === 'auth/account-exists-with-different-credential') {
                    showErrorNotification(
                        'Email đã tồn tại',
                        'Email này đã được sử dụng với phương thức đăng nhập khác'
                    );
                } else {
                    showErrorNotification(
                        'Lỗi đăng nhập Facebook',
                        error.message
                    );
                }
            }
        });
    });
});
