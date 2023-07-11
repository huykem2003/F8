var bangLink = document.getElementById("bang");
var backLink = document.querySelector(".back-link");
var registrationInfo = document.getElementById("registration-info");
src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"

bangLink.addEventListener("click", function(event) {
  event.preventDefault();
  registrationInfo.style.display = "block";
});

backLink.addEventListener("click", function(event) {
  event.preventDefault();
  registrationInfo.style.display = "none";
});
// bảng số điện thoai
$(document).ready(function() {
  $('.country-code').select2({
    width: '100%',
    placeholder: 'Chọn mã quốc gia',
    allowClear: true,
    dropdownParent: $('.form-row')
  });
});


