let cartItems = document.getElementById("cartItems");
let cartProducts = document.getElementById("cartProducts");
let summary = document.getElementById("summary");
let typeToString = {
    'Original' : 'Original',
    'Blackberry' : 'Blackberry',
    'Walnut' : 'Walnut',
    'GlutenFree' : 'Original (Gluten-Free)',
    'PumpkinSpice' : 'Pumpkin Spice',
    'CaramelPecan': 'Caramel Pecan'
};


function get () {
    // Retrieve data from session
    if (localStorage.length === 0) {
        let cartItems = document.getElementById("cartItems");
        cartItems.innerHTML = '<p style="padding-left: 100px;">Your cart is empty!</p>';
        document.getElementById("cartSummary").style.display = 'none';

    }
    else {
        console.log(localStorage);
        cartProducts.innerHTML = '';
        let runningTotal = 0;
        for(let i=0; i<localStorage.length; i++) {
            let x = JSON.parse(localStorage.getItem(localStorage.key(i)));
            let para = document.createElement("P"); //create paragraph for each item in cart
            para.innerHTML = '<div class="productDescription"><img src="img/' + x.bunType + '.jpg" alt=">' + typeToString[x.bunType]
                + ' bun " class="cart">' +
                '<span class="cart bunType">' + typeToString[x.bunType] + ' </span></div> ' +
                '<span class="cart glazing">' + x.glazing + ' </span>' +
                '<span class="cart quantity">' + x.quantity + ' </span>' +
                '<button value="' + localStorage.key(i) + '" onclick="deleteSelf(this);" class="cart remove">Remove</button>' +
                '<span class="cart price">$' + x.price + '</span>';
            //let text = document.createTextNode(x.bunType + ' ' + x.glazing + ' ' + x.quantity); //create text node to append to para
            //para.appendChild(text);  // Append the text to <p>

            cartProducts.appendChild(para);
            runningTotal += x.price;
        };
        let numnericalSub = runningTotal.toFixed(2);
        // let subTotal = document.createElement('P'); //create h3 for subtotal

        summary.innerHTML = '<p>Subtotal: $' + numnericalSub +
            '<br>Shipping: $4.00' +
            '<br>Sales Tax: $' + (0.07*runningTotal).toFixed(2) +
            '<br>Estimated Total: $' + (1.07*runningTotal + 4.00).toFixed(2) + '</p>';
        // summary.appendChild(subTotal);
    }
}


window.onload = get; //run function

function deleteSelf(event) {
    localStorage.removeItem(event.value);
    get();
    showCartCount();
    console.log("cartupdated")
}

/* Delete Element */
// let removeElements = document.getElementsByClassName("remove");
// for (let removeThis of removeElements) {
//      removeThis.onclick = function(event) {
//          console.log(event.target)
//      }
//  }