# Hướng dẫn Test Đăng nhập/Đăng ký

## ✅ Flow hoạt động hiện tại:

### 📝 ĐĂNG KÝ (signin.html):
1. Người dùng điền form:
   - Tên người dùng
   - Email
   - Mật khẩu (ít nhất 6 ký tự)
   - Xác nhận mật khẩu

2. Nhấn nút "Đăng Ký Tài Khoản"

3. Hệ thống:
   - ✅ Kiểm tra mật khẩu >= 6 ký tự
   - ✅ Kiểm tra mật khẩu khớp với xác nhận
   - ✅ Tạo tài khoản trên Firebase Auth (lưu email + mật khẩu mã hóa)
   - ✅ Lưu thông tin bổ sung vào Firestore:
     * username
     * email
     * role: 'user'
     * createdAt
     * lastLogin

4. Kết quả:
   - ✅ Hiển thị popup "Đăng ký thành công!"
   - ✅ Tự động chuyển đến home.html sau 2 giây

5. Xử lý lỗi:
   - ❌ Email đã tồn tại → Popup "Email đã tồn tại"
   - ❌ Email không hợp lệ → Popup "Email không hợp lệ"
   - ❌ Mật khẩu yếu → Popup "Mật khẩu quá yếu"

---

### 🔐 ĐĂNG NHẬP (index.html):
1. Người dùng điền form:
   - Email
   - Mật khẩu

2. Nhấn nút "Đăng nhập"

3. Hệ thống:
   - ✅ Gửi request đến Firebase Auth
   - ✅ Firebase kiểm tra email + password có khớp không
   - ✅ Nếu đúng:
     * Cập nhật lastLogin trong Firestore
     * Hiển thị popup "Đăng nhập thành công!"
     * Chuyển đến home.html sau 2 giây

4. Xử lý lỗi:
   - ❌ Tài khoản không tồn tại → Popup "Tài khoản không tồn tại"
   - ❌ Sai mật khẩu → Popup "Sai mật khẩu"
   - ❌ Email không hợp lệ → Popup "Email không hợp lệ"
   - ❌ Thông tin không hợp lệ → Popup "Email hoặc mật khẩu không đúng"

---

## 🧪 Cách test:

### Test 1: Đăng ký tài khoản mới
1. Mở `signin.html`
2. Điền:
   - Username: TestUser
   - Email: test@example.com
   - Password: 123456
   - Confirm: 123456
3. Nhấn "Đăng Ký Tài Khoản"
4. ✅ Kỳ vọng: Popup thành công → Chuyển đến home.html

### Test 2: Đăng ký với email đã tồn tại
1. Mở `signin.html`
2. Dùng email đã đăng ký: test@example.com
3. Nhấn "Đăng Ký Tài Khoản"
4. ✅ Kỳ vọng: Popup "Email đã tồn tại"

### Test 3: Đăng nhập với tài khoản đúng
1. Mở `index.html`
2. Điền:
   - Email: test@example.com
   - Password: 123456
3. Nhấn "Đăng nhập"
4. ✅ Kỳ vọng: Popup thành công → Chuyển đến home.html

### Test 4: Đăng nhập với mật khẩu sai
1. Mở `index.html`
2. Điền:
   - Email: test@example.com
   - Password: wrongpass
3. Nhấn "Đăng nhập"
4. ✅ Kỳ vọng: Popup "Sai mật khẩu"

### Test 5: Đăng nhập với tài khoản không tồn tại
1. Mở `index.html`
2. Điền:
   - Email: notexist@example.com
   - Password: 123456
3. Nhấn "Đăng nhập"
4. ✅ Kỳ vọng: Popup "Tài khoản không tồn tại"

---

## 📊 Dữ liệu được lưu trên Firebase:

### Firebase Authentication:
```
- Email: test@example.com
- Password: [MÃ HÓA - không thể xem]
- UID: [tự động tạo]
```

### Firestore (collection: users):
```javascript
{
  email: "test@example.com",
  username: "TestUser",
  role: "user",
  createdAt: [timestamp],
  lastLogin: [timestamp]
}
```

**LƯU Ý:** Mật khẩu KHÔNG được lưu trong Firestore vì lý do bảo mật!

---

## 🔧 Troubleshooting:

### Lỗi: "auth is not defined"
- ✅ ĐÃ SỬA: Firebase scripts đã được load đúng thứ tự

### Lỗi: "showSuccessNotification is not defined"
- Kiểm tra: notification.js đã được load trước login.js chưa?
- Kiểm tra: notification.css đã được link chưa?

### Popup không hiện
- Mở Console (F12) xem có lỗi gì không
- Kiểm tra notification.js và notification.css đã load chưa

### Không chuyển hướng
- Kiểm tra file home.html có tồn tại không
- Kiểm tra đường dẫn: 'home.html' (cùng thư mục với index.html)
