var number = [1, 2, 3, 4, 5];
var numberTostring = number.map(function (currelm) { return currelm.toString(); });
console.log(numberTostring);
var product = {
    name: "Mayank",
    price: 2000,
    Quantity: 5,
    address: {
        city: 'Mainpuri',
        country: "India"
    }
};
var calculatetotalPrice = function (product) {
    return "".concat(product.name, " buying laptop total cost is ").concat(product.price * product.Quantity);
};
console.log(calculatetotalPrice(product));
// aliass&&&&&&&********
