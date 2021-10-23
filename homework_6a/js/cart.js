let cartItems = document.getElementById("cartItems");
function get () {
    // (A) GET FROM SESSION
    console.log(sessionStorage.length);
    for(let i=0; i<sessionStorage.length; i++) {
        let x = JSON.parse(sessionStorage.getItem(i+1));
        console.log(x);
        console.log(x.quantity);
        console.log(cartItems);
        //create paragraph for each item in cart
        let para = document.createElement("P");
        //create text node to append to para
        let text = document.createTextNode(x.bunType + ' ' + x.glazing + ' ' + x.quantity);      // Create a text node
        para.appendChild(text);                                          // Append the text to <p>
        cartItems.appendChild(para);
        //let textNode = document.createTextNode(x.bunType + ' ' + x.glazing + ' '+ x.quantity + ' </br>');         // Create a text node
        //cartItems.appendChild(textNode);
    }
    // (B) IT WORKS!
    // Manually opening 1b-session.html will not work though
    // Session data will perish once tab/window is closed

    // (EXTRA) TO CLEAR
    // sessionStorage.removeItem("KEY");
    // sessionStorage.clear();
}

window.onload = get;

