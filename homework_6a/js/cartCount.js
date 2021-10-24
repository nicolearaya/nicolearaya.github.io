let cartIconCount = localStorage.length;

var showCartCount = function () {
    let cartCountText = document.getElementById('cartCountText');
    if (cartIconCount !== 0) {
        cartCountText.textContent = cartIconCount;
    }
};

showCartCount();
