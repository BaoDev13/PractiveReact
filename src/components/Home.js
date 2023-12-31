const Home = () => {
  return (
    <>
      <div className="home-container">
        Yêu cầu:
        <br />
        Sử dụng API từ trang web https://reqres.in/ để tạo website. Sử dụng thư
        viện React để tạp một màn hình website cơ bản bao gồm các chức năng:
        <ul>
          <li>1. Đăng nhập</li>
          <li>2. Thêm User</li>
          <li>3. Sửa User</li>
          <li>4. Xóa User</li>
          <li>5. Hiển thị tất cả User</li>
          <li>6. Tìm kiếm User theo email</li>
          <li>7. Sắp xếp theo FirstName</li>
          <li>8. Import User từ file .csv</li>
          <li>9. Export User ra file .csv</li>
        </ul>
        Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học và đẹp.
        <br />
        Commit và đẩy source code lên github public.
        <br />
        Triển khai website lên Heroku để demo.
      </div>
    </>
  );
};
export default Home;
