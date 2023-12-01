const number: number[] = [1, 2, 3, 4, 5];
const numberTostring = number.map((currelm) => currelm.toString());
console.log(numberTostring)
// objects
// const obj = {
//     name: "Mayank",
//     age: 20,
//     course: "BCA",
//     isStudent: true,
//     address: {
//         city: "Pune",
//         country: "INDIA"
//     }
// }
// console.log(obj.address.country)
type Product = {
    name: string;
    price: number,
    Quantity: number
    address: {
        city: string;
        country: string;
    }
}
const product: Product = {


    name: "Mayank",
    price: 2000,
    Quantity: 5,
    address: {
        city: 'Mainpuri',
        country: "India"
    }
}
const calculatetotalPrice = (product: Product) => {
    return `${product.name} buying laptop total cost is ${product.price * product.Quantity}`

}
console.log(calculatetotalPrice(product))
// aliass&&&&&&&********