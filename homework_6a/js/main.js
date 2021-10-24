//create a function for when click the image -> opens the product page with bunType variable passed in


/*  PARSE URL SECTION  */
let queryString = window.location.search;
console.log(queryString);
let urlParams = new URLSearchParams(queryString);
// save bunType as variable //
var bunType = urlParams.get('bunType');
// update heading according to bun type //
if(urlParams.has('bunType')) {
    console.log ("bun = " + bunType)
    let h2 = document.querySelector('h2');
    if (bunType == "GlutenFree") {
        h2.innerText = "Original (Gluten Free)";
        h2.style.fontSize = "32px";
    }
    else if (bunType == "PumpkinSpice") {
        h2.innerText = "Pumpkin Spice";
    }
    else if (bunType == "CaramelPecan") {
        h2.innerText = "Caramel Pecan";
    }
    else {
        h2.innerText = bunType;
    }
}

let quantToPrice = {
        '1' : 2.95,
        '3' : 8.75,
        '6' : 15.75,
        '12' : 29.95
    };

/*  UPDATE PRICE SECTION: updates price when quantity is changed  */
let updatePrice = function() {
    let price = document.getElementById('price');
    let quantity = document.getElementById('quantity').value;
    price.innerText = '$' + quantToPrice[quantity];
    /*
    if (quantity == 'one') {
        price.innerText = '$2.95'
    }
    else if (quantity == 'three') {
        price.innerText = '$8.50'
    }
    else if (quantity == 'six') {
        price.innerText = '$15.75'
    }
    else if (quantity == 'twelve') {
        price.innerText = '$29.95'
    } */
}


/*  CART DATA SECTION  */
//data object to keep track of items
function cartItem (bunType, glazing, quantity) {
    this.bunType = bunType;
    this.glazing = glazing;
    this.quantity = quantity;
    this.price = quantToPrice[quantity];
}
// array to keep track of items added to cart
let cartItems = [];
// Get the Add to Cart button
let btn = document.getElementById("addToCartButton");
// Add event listener to update the data structure containing cart items
btn.onclick = function() {
    //get the specific quantities for the new item to add to cart
    let glazing = document.getElementById('glazing').value;
    let quantity = document.getElementById('quantity').value;
    //add the new item to the data structure for cart
    /* cartItems.push(new cartItem(bunType, glazing, quantity));
    //
    console.log(cartItems)
    let names = cartItems.map(function(item) {
        return item['bunType'];
    }); */
    let newItem = new cartItem(bunType, glazing, quantity);
    //console.log(names[0]);
    store(newItem);
}

//get number of items already in cart//
let cartCount = localStorage.length;
console.log(localStorage.length)
/*  save variables  */
function store (newItem) {
    //add new item to Session storage
    let index = (cartCount + 1);
    localStorage.setItem(index.toString(), JSON.stringify(newItem));
    //increment cart count by 1
    cartCount ++;
    let cartCountText = document.getElementById('cartCountText');
    //console.log("update cart count to: " + cartCount);
    cartCountText.textContent = cartCount.toString();
    modal.style.display = "block";
}


/* CART PAGE SECTION
let cartArea = document.getElementById("cartItems");
//populate info
let names = cartItems.map(function(item) {
    return item['bunType'];
});
console.log(names[0]);
for(let i=0; i<cartItems.length; i++) {
    cartArea.append('<p>' + cartItems[i].bunType + ' ' + cartItems[i].glazing + ' '+ cartItems[i].quantity + ' </p>');
}

 */


/* MODAL SECTION */

let modal = document.getElementById("cartModal");
// When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

