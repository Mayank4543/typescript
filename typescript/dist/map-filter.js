"use strict";
// const number: number[] = [1, 2, 3, 4, 5];
// const numberTostring = number.map((currelm) => currelm.toString());
// console.log(numberTostring)
// // objects
// // const obj = {
// //     name: "Mayank",
// //     age: 20,
// //     course: "BCA",
// //     isStudent: true,
// //     address: {
// //         city: "Pune",
// //         country: "INDIA"
// //     }
// // }
// // console.log(obj.address.country)
// type Product = {
//     name: string;
//     price: number,
//     Quantity: number
//     address: {
//         city: string;
//         country: string;
//     }
// }
// const product: Product = {
//     name: "Mayank",
//     price: 2000,
//     Quantity: 5,
//     address: {
//         city: 'Mainpuri',
//         country: "India"
//     }
// }
// const calculatetotalPrice = (product: Product) => {
//     return `${product.name} buying laptop total cost is ${product.price * product.Quantity}`
// }
// console.log(calculatetotalPrice(product))
// // aliass&&&&&&&********
// call signature 
// type Student = {
//     name: string;
//     age: number;
//     greet: (country: string) => string;
// }
// const student1: Student = {
//     name: "Mayank",
//     age: 20,
//     greet: ((country): string => ` Welcome  My name is ${student1.name}, I am ${student1.age} and i am from ${country}`)
// }
// const introduct: (student1: Student) => string = (student: Student): string => {
//     const { name, age } = student;
//     return ` Welcome  My name is ${name}, I am ${age} and i am from `
// }
// console.log(introduct(student1))
// console.log(student1.greet("India"))
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const User = {
    name: "Mayank",
    email: 'mayank@gmail.com',
    password: '12345',
    role: Roles.admin
};
const User2 = {
    name: "Mayank",
    email: 'mayank@gmail.com',
    password: '12345',
    role: Roles.user
};
const isAdmin = (user) => {
    const { name, email, password, role } = user;
    return role === 'admin' ? `${email} is allow to edit the website` : `${email} is not allow to edit the website`;
};
console.log(isAdmin(User));
console.log(isAdmin(User2));
