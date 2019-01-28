# Selpro Webapp coding style
Dưới đây là những quy ước về viết mã nguồn trong Sellpro Webapp.

## Đặt tên tệp & thư mục
Tệp và thư mục được đặt tên bằng chữ thường, nối với nhau bằng dấu gạch ngang. VD: `home-page/`, `home-page.jsx`, `home-page.scss`,...

## Chuẩn JSX
Sử dụng [chuẩn JSX style guide của Airbnb](https://github.com/airbnb/javascript/tree/master/react).

## Cấu trúc thư mục
Mã nguồn chính được chứa trong thư mục `src/`, bao gồm các thành phần:
* `index.js`: file khởi chạy ứng dụng.
* `apis/`: chứa các khai báo API giao tiếp với bên dịch vụ khác. 
Nếu là giao tiếp với RESTful service thì phải khai báo theo chuẩn: Get, Create, Update, Delete.
* `assets/`: chứa những thư viện hỗ trợ tạo giao diện như theme, animation, chart,... và các hình ảnh trang trí.
* `commons/`: chứa những component sử dụng lại nhiều trong project. Tìm hiểu presentational component hoặc stateless component.
* `containers/`: chứa những component chính của ứng dụng. Tìm hiểu container component để hiểu rõ hơn.
* `scss/`: chứa scss custom styles.
* `services/`: chứa những services của ứng dụng. 
Service đơn giản là những chức năng mà nhiều thành phần của ứng dụng sử dụng lại được. VD: storage, authentication, ...
* `utils/`: Chứa những hàm thuần (pure function) hỗ trợ cho app. VD: Hàm tính toán, hàm xử lí dữ liệu,...

## Phân chia Component
Tất cả component chính được đặt trong `src/containers/`. Component được phân chia theo route. VD:

 | Route | Đường dẫn Component|
 | --- | --- |
 |`/login`|`containers/login-route/login-route.jsx`|
 |`/dashboard`|`containers/dashboard-route/dashboard-route.jsx`|
 |`/dashboard/page-one`|`containers/dashboard-route/page-one/page-one.jsx`|
 

## Custom Style
Custom style sử dụng scss, không viết css trực tiếp. 

Tất cả file scss phải được đặt trong thư mục `src/scss/` và sẽ được import tự động.

Mỗi file JSX cần có một file scss của riêng nó, đặt cùng tên và có đường dẫn tương tự trong thư mục `src/scss/`. VD: File:

`src/containers/dashboard-route/containers/page-one.jsx`

Sẽ có file scss tương ứng là:

`src/scss/dashboard-route/containers/page-one.scss`