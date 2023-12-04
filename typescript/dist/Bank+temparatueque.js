"use strict";
// class BankAccount {
//     private _balance: number = 0;
//     public get balance(): number {
//         return this._balance;
//     }
//     public set balance(newBalance: number) {
//         if (newBalance < 0) {
//             throw new Error(`Invalid balance`);
//         }
//         this._balance = newBalance;
//     }
// }
// const bank: BankAccount = new BankAccount();
// bank.balance = -10
// console.log(bank.balance)
class Temperator {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newelsius) {
        this._celsius = newelsius;
    }
    get fahrenite() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenite(newfahrenite) {
        this._celsius = ((newfahrenite - 32) * 5) / 9;
    }
}
const temp = new Temperator();
temp.celsius = 25;
console.log(temp.celsius);
