// Lấy phần tử <a> và bảng
const qrButton = document.getElementById('qrButton');
const qrTable = document.getElementById('qrTable');

// Thêm sự kiện click cho phần tử <a>
qrButton.addEventListener('click', function() {
  // Kiểm tra trạng thái hiển thị của bảng
  const display = qrTable.style.display;
  if (display === 'none') {
    // Nếu bảng đang ẩn, hiển thị bảng
    qrTable.style.display = 'block';
  } else {
    // Nếu bảng đang hiển thị, ẩn bảng
    qrTable.style.display = 'none';
  }
});
