document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử HTML cần thiết
    var sizeButtons = document.querySelectorAll('.card_size span');
    var colorButtons = document.querySelectorAll('.card_color span');
    var buyButton = document.querySelector('.card_action button:nth-child(1)');
    var addToCartButton = document.querySelector('.card_action button:nth-child(2)');

    var selectedSize = null;
    var selectedColor = null;

    // Xử lý sự kiện khi chọn size
    sizeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Xóa lớp 'active' khỏi tất cả các nút size
            sizeButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Đặt lớp 'active' cho nút size được chọn
            this.classList.add('active');
            selectedSize = this.innerText;
        });
    });

    // Xử lý sự kiện khi chọn màu
    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Xóa lớp 'active' khỏi tất cả các nút màu
            colorButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Đặt lớp 'active' cho nút màu được chọn
            this.classList.add('active');
            selectedColor = this.className.split(' ')[1]; // Lấy tên lớp màu
        });
    });

    // Xử lý sự kiện khi nhấp vào nút "mua"
    buyButton.addEventListener('click', function() {
        if (selectedSize && selectedColor) {
            // Thực hiện các hành động mua sản phẩm
            alert('Bạn đã chọn size ' + selectedSize + ' và màu ' + selectedColor + ' để mua.');
        } else {
            alert('Vui lòng chọn size và màu trước khi mua.');
        }
    });

    // Xử lý sự kiện khi nhấp vào nút "gio"
    addToCartButton.addEventListener('click', function() {
        if (selectedSize && selectedColor) {
            // Thực hiện các hành động thêm vào giỏ hàng
            alert('Bạn đã chọn size ' + selectedSize + ' và màu ' + selectedColor + ' để thêm vào giỏ hàng.');
        } else {
            alert('Vui lòng chọn size và màu trước khi thêm vào giỏ hàng.');
        }
    });
});
