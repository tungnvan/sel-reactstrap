# Sellpro Webapp
Xin chào mừng bạn đến với Sellpro Webapp. Dưới đây là cách chạy mã nguồn và một số quy tắc của đội phát triển Sellpro về quản lý mã nguồn.

Trước khi bắt tay vào code, xin bạn hãy đọc kỹ file mở đầu này.

## Chạy mã nguồn

### Yêu cầu
Để chạy mã nguồn của Sellpro Webapp, bạn cần cài Nodejs v8.

### Cách chạy
Sau khi clone mã nguồn về máy, bạn mở cửa sổ terminal và gõ 2 lệnh:

```
npm install
npm start
```
Webapp chạy trên trình duyệt mặc định với địa chỉ [http://localhost:3000](#)

## Quản lý mã nguồn

### Coding style
Tham khảo file [CODING_STYLE.md](./CODING_STYLE.md)

### Tổ chức nhánh Git
Có 3 loại nhánh chính:
* `master`: Chứa mã nguồn cho môi trường production.
* `dev`: Được tách ra từ nhánh `master`, chứa mã nguồn cho môi trường development.
* `sel-mã task`: Được tách ra từ nhánh `dev`, chứa mã nguồn theo từng task được chỉ định riêng. Mã task được chỉ định và giao riêng trên Jira. ví dụ: `sel-123` là nhánh của task 123.

Sau khi hoàn thành một task được giao, bạn phải tạo pull request để yêu cầu gộp tính năng của mình vào nhánh `dev`. 
Sau khi review, nếu mã nguồn sửa đổi được chấp nhận thì người review thực hiện gộp và xóa nhánh đã xong. 
Nếu không, bạn phải thực hiện lại task đó và tạo pull request mới.

Chú ý: Không được tạo pull request từ nhánh task vào `master`.