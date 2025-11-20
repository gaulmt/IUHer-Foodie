# 🔐 Hướng dẫn cấu hình đăng nhập Google & Facebook

## 📋 Tổng quan

Để sử dụng đăng nhập bằng Google và Facebook, bạn cần:
1. Bật các phương thức đăng nhập trong Firebase Console
2. Cấu hình OAuth cho Facebook (nếu dùng Facebook)
3. Code đã được implement sẵn trong `login.js`

---

## 🔧 Bước 1: Cấu hình Firebase Console

### 1.1. Truy cập Firebase Console
1. Vào https://console.firebase.google.com/
2. Chọn project **"iuher-foodie"**
3. Vào menu **Authentication** (bên trái)
4. Chọn tab **Sign-in method**

---

## ✅ Bước 2: Bật Google Sign-In

### 2.1. Trong Firebase Console:
1. Tìm **Google** trong danh sách providers
2. Click vào **Google**
3. Bật **Enable**
4. Chọn **Project support email** (email của bạn)
5. Click **Save**

### 2.2. Test Google Sign-In:
- Mở `index.html` hoặc `signin.html`
- Click nút Google (biểu tượng G)
- Popup Google sẽ hiện ra
- Chọn tài khoản Google
- Đăng nhập thành công → Chuyển đến `home.html`

**✅ XONG! Google Sign-In đã hoạt động!**

---

## 📘 Bước 3: Bật Facebook Sign-In (Phức tạp hơn)

### 3.1. Tạo Facebook App

1. **Vào Facebook Developers:**
   - Truy cập: https://developers.facebook.com/
   - Đăng nhập bằng tài khoản Facebook của bạn

2. **Tạo App mới:**
   - Click **"My Apps"** → **"Create App"**
   - Chọn **"Consumer"** (hoặc "None" nếu không có)
   - Điền:
     - **App Display Name**: IUHer Foodie
     - **App Contact Email**: email của bạn
   - Click **"Create App"**

3. **Thêm Facebook Login:**
   - Trong Dashboard của App
   - Tìm **"Facebook Login"** → Click **"Set Up"**
   - Chọn **"Web"**
   - Nhập **Site URL**: 
     ```
     http://localhost
     ```
     (hoặc domain thật nếu đã deploy)
   - Click **"Save"** → **"Continue"**

4. **Lấy App ID và App Secret:**
   - Vào **Settings** → **Basic**
   - Copy **App ID**
   - Click **"Show"** để xem **App Secret** → Copy

### 3.2. Cấu hình Firebase với Facebook

1. **Quay lại Firebase Console:**
   - Vào **Authentication** → **Sign-in method**
   - Tìm **Facebook** → Click vào

2. **Bật Facebook:**
   - Bật **Enable**
   - Paste **App ID** từ Facebook
   - Paste **App Secret** từ Facebook
   - Copy **OAuth redirect URI** (ví dụ: `https://iuher-foodie.firebaseapp.com/__/auth/handler`)

3. **Quay lại Facebook Developers:**
   - Vào **Facebook Login** → **Settings**
   - Trong **Valid OAuth Redirect URIs**, paste URI từ Firebase
   - Click **"Save Changes"**

4. **Chuyển App sang Live Mode:**
   - Vào **Settings** → **Basic**
   - Ở trên cùng, chuyển từ **"In Development"** → **"Live"**
   - (Có thể cần thêm Privacy Policy URL)

### 3.3. Test Facebook Sign-In:
- Mở `index.html` hoặc `signin.html`
- Click nút Facebook (biểu tượng f)
- Popup Facebook sẽ hiện ra
- Đăng nhập Facebook
- Cho phép quyền truy cập
- Đăng nhập thành công → Chuyển đến `home.html`

**✅ XONG! Facebook Sign-In đã hoạt động!**

---

## 🧪 Test nhanh (chỉ Google)

Nếu bạn muốn test nhanh mà không cần cấu hình Facebook:

1. **Chỉ bật Google Sign-In** (Bước 2)
2. **Ẩn nút Facebook** (tùy chọn):
   - Mở `index.html` và `signin.html`
   - Tìm `.facebook-btn`
   - Thêm `style="display: none;"` vào nút Facebook

---

## 📝 Code đã implement

File `login.js` đã có sẵn code xử lý:

### Google Sign-In:
```javascript
const provider = new firebase.auth.GoogleAuthProvider();
const result = await auth.signInWithPopup(provider);
// Tự động lưu user vào Firestore
// Chuyển hướng đến home.html
```

### Facebook Sign-In:
```javascript
const provider = new firebase.auth.FacebookAuthProvider();
const result = await auth.signInWithPopup(provider);
// Tự động lưu user vào Firestore
// Chuyển hướng đến home.html
```

### Xử lý lỗi:
- Popup bị đóng
- Popup bị chặn
- Email đã tồn tại với phương thức khác
- Các lỗi khác

---

## ⚠️ Lưu ý quan trọng

### 1. Popup bị chặn:
- Một số trình duyệt chặn popup mặc định
- Người dùng cần cho phép popup cho website của bạn

### 2. Localhost vs Production:
- **Localhost**: Google hoạt động ngay, Facebook cần cấu hình
- **Production**: Cần thêm domain vào Firebase và Facebook

### 3. Privacy Policy (cho Facebook):
- Facebook yêu cầu Privacy Policy URL khi chuyển sang Live
- Bạn có thể tạo trang privacy policy đơn giản

### 4. Email đã tồn tại:
- Nếu user đã đăng ký bằng email/password
- Sau đó đăng nhập bằng Google/Facebook với cùng email
- Firebase sẽ tự động liên kết tài khoản

---

## 🎯 Tóm tắt

### Để sử dụng Google Sign-In:
1. ✅ Bật Google trong Firebase Console (2 phút)
2. ✅ Code đã sẵn sàng
3. ✅ Test ngay!

### Để sử dụng Facebook Sign-In:
1. ⏱️ Tạo Facebook App (10 phút)
2. ⏱️ Cấu hình Firebase + Facebook (5 phút)
3. ⏱️ Chuyển App sang Live (2 phút)
4. ✅ Code đã sẵn sàng
5. ✅ Test!

---

## 🆘 Troubleshooting

### Lỗi: "Popup closed by user"
- Người dùng đóng popup trước khi đăng nhập
- Không phải lỗi, chỉ cần thử lại

### Lỗi: "Popup blocked"
- Trình duyệt chặn popup
- Cho phép popup trong settings trình duyệt

### Lỗi: "auth/unauthorized-domain"
- Domain chưa được thêm vào Firebase
- Vào Firebase Console → Authentication → Settings → Authorized domains
- Thêm domain của bạn

### Lỗi Facebook: "App Not Setup"
- App Facebook chưa được cấu hình đúng
- Kiểm tra lại OAuth Redirect URI
- Đảm bảo App đã ở chế độ Live

---

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra Console (F12) xem có lỗi gì
2. Kiểm tra Firebase Console → Authentication → Users (xem user có được tạo không)
3. Đọc lại hướng dẫn từng bước

**Chúc bạn thành công! 🎉**
