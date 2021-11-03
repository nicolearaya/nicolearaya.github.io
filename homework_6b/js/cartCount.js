

var showCartCount = function () {
    let cartIconCount = localStorage.length;
    console.log(cartIconCount);
    let cartCountText = document.getElementById('cartCountText');
    if (cartIconCount === 0) {
        cartCountText.textContent = '';
        console.log("empty card")
    }
    else {
        cartCountText.textContent = cartIconCount.toString();
    }
};

showCartCount();
