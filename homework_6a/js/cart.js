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
        para.innerHTML = '<img src="img/' + x.bunType + '.jpg" alt=">' + typeToString[x.bunType] + ' bun " class="cart cartProduct"' +
                         '<span class="cart bunType">' + typeToString[x.bunType] + ' </span> ' +
                         '<span class="cart glazing">' + x.glazing + ' </span>' +
                         '<span class="cart quantity">' + x.quantity + ' </span>' +
                         '<span class="cart price">$' + x.price + '</span>';
        //let text = document.createTextNode(x.bunType + ' ' + x.glazing + ' ' + x.quantity); //create text node to append to para
        //para.appendChild(text);  // Append the text to <p>

        cartItems.appendChild(para);
        runningTotal += x.price;
        console.log (runningTotal);
    };
    let numnericalSub = runningTotal.toFixed(2);
    let subTotal = document.createElement('H3'); //create h3 for subtotal
    subTotal.innerHTML = 'Subtotal: $' + numnericalSub;
    summary.appendChild(subTotal);
}


window.onload = get; //run function
