let cartIconCount = sessionStorage.length;

var showCartCount = function () {
    console.log(cartIconCount)
    let cartCountText = document.getElementById('cartCountText');
    console.log(cartCountText)
    if (cartIconCount !== 0) {
        cartCountText.textContent = cartIconCount;
    }
};

showCartCount();
