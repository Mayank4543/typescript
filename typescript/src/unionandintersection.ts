// // type User = {
// //     name: string;
// //     age: number;
// // }

// // type Mylocation = {
// //     city: string;
// //     country: string;
// // }

// // const user: User = {
// //     name: "Mayank",
// //     age: 23
// // };

// // const mylocation: Mylocation = {
// //     city: "Gwalior",
// //     country: "India"
// // };

// // const myinfo: (user: User, location: Mylocation) => User & Mylocation = (user: User, location: Mylocation): User & Mylocation => {
// //     return { ...user, ...location };
// // };

// // const mycompleteinfo: User & Mylocation = myinfo(user, mylocation);
// // console.log(mycompleteinfo);
// // union
// const userinput: (value: string | number) => string | number = (value: string | number): string | number => {
//     if (typeof value === 'number') {
//         return value * 2;
//     } else if (typeof value === 'string') {
//         return value.toUpperCase();

//     } else {
//         throw new Error('Invalid input data')
//     }
// }
// console.log(userinput(10))
// console.log(userinput("Subcribed"))
function LoginDetails1<T>(value: T): T {
    return value;
}
const numerreslut: number = LoginDetails1<number>(42)
const booleanresult: boolean = LoginDetails1<boolean>(true)
const stringresult: string = LoginDetails1<string>("Mayank")
console.log(numerreslut)
console.log(booleanresult)