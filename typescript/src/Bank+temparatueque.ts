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
    private _celsius: number = 0;
    public get celsius(): any {
        return this._celsius
    }
    public set celsius(newelsius: number) {
        this._celsius = newelsius
    }
    public get fahrenite(): number {
        return (this._celsius * 9) / 5 + 32;
    }
    public set fahrenite(newfahrenite: number) {
        this._celsius = ((newfahrenite - 32) * 5) / 9
    }
}
const temp: any = new Temperator()
temp.celsius = 25
console.log(temp.celsius)