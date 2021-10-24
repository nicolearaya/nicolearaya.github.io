let cartItems = document.getElementById("cartItems");
let summary = document.getElementById("summary");
let runningTotal = 0;
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
    for(let i=0; i<localStorage.length; i++) {
        let x = JSON.parse(localStorage.getItem(i+1));

        let para = document.createElement("P"); //create paragraph for each item in cart
        para.innerHTML = '<div class="productDescription"><img src="img/' + x.bunType + '.jpg" alt=">' + typeToString[x.bunType]
                            + ' bun " class="cart cartProduct">' +
                         '<span class="cart bunType">' + typeToString[x.bunType] + ' </span></div> ' +
                         '<span class="cart glazing">' + x.glazing + ' </span>' +
                         '<span class="cart quantity">' + x.quantity + ' </span>' +
                         '<span class="cart remove" style="text-decoration: underline;">Remove</span>' +
                         '<span class="cart price">$' + x.price + '</span>';
        //let text = document.createTextNode(x.bunType + ' ' + x.glazing + ' ' + x.quantity); //create text node to append to para
        //para.appendChild(text);  // Append the text to <p>

        cartItems.appendChild(para);
        runningTotal += x.price;
    };
    let numnericalSub = runningTotal.toFixed(2);
    let subTotal = document.createElement('P'); //create h3 for subtotal

    subTotal.innerHTML = 'Subtotal: $' + numnericalSub +
                        '<br>Shipping: $4.00' +
                        '<br>Sales Tax: $' + (0.07*runningTotal).toFixed(2) +
                        '<br>Estimated Total: $' + (1.07*runningTotal + 4.00).toFixed(2);
    summary.appendChild(subTotal);
}


window.onload = get; //run function
