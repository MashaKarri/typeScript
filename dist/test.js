// let name: string = "User";
// let age: number = 18;
// let productName: string = "Laptop";
// let productPrice: number = 35000;
// let isAvailable: boolean = true;
// let productCategory: any = "Electronics";
// function calculatePrice(a: number, b: number): number {
//   return a + b;
// }
// console.log(calculatePrice(100, 3));
// :void додаємо якщо функція нічого не повертає
// function calculatePrice(a: number, b: number): void {
//   console.log(a + b);
// }
// :never ставимо якщо функція завершується нетипово
// function messageError(message: string): never {
//   throw new Error(message);
// }
// type Operation = (a: number, b: number) => number;
// function calculate(n1: number, n2: number, callback: Operation): number {
//   return n1 + n2;
// }
// const calc = calculate(1, 2, (a, b) => a + b);
// console.log(calc);
// let arr: number[] = [1, 2, 22];
// let products: {
//   name: string;
//   price: number;
// }[] = [
//   { name: "phone", price: 1000 },
//   { name: "laptop", price: 10000 },
// ];
// let user: {
//   name: string;
//   age: number;
// } = {
//   name: "Oleh",
//   age: 15,
// };
// let id: number | string;
// id = "i-11";
// id = 1;
// function getId(id: number | string): void {
//   console.log(id);
// }
// let status: "pro" | "start" | "";
// status = "pro";
// let tuple: [number, string];
// tuple = [1, "jdhw"];
// enum User {
//   Admin,
//   Moderator,
//   user,
// }
// let user: {
//   name: string;
//   age: number;
//   role: User;
// } = {
//   name: "Oleh",
//   age: 15,
//   role: User.Moderator,
// };
// if (user.role === User.Admin) {
//   console.log("Доступ дозволено");
// }
// type Product = {
//   id: number;
//   title: string;
//   isavailable: boolean;
//   isNew?: boolean;
// };
// const Iphone: Product = {
//   id: 11,
//   title: "iPhone 25 pro",
//   isavailable: true,
// };
class Character {
    constructor(name, health, level, experience) {
        this.name = name;
        this._health = health;
        this.level = level;
        this.experience = experience;
    }
    get health() {
        return this._health;
    }
    set health(value) {
        if (value < 0) {
            this._health = 0;
        }
        else if (value > 100) {
            this._health = 100;
        }
        else {
            this._health = value;
        }
    }
    attack() {
        console.log(`${this.name} атакує`);
    }
    takeDamage(damage) {
        this._health = Math.max(0, this._health - damage);
        console.log(`${this.name} отримав ${damage} шкоди`);
    }
    showStats() {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Здоров'я: ${this.health}`);
        console.log(`Рівень: ${this.level}`);
        console.log(`Досвід: ${this.experience}`);
    }
}
const c1 = new Character("Pavlo", 100, 1, 0);
c1.attack();
c1.takeDamage(20);
c1.showStats();
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    get getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Сума поповнення має бути більшою за 0");
            return;
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Сума зняття має бути більшою за 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку");
            return;
        }
        this.balance -= amount;
    }
}
const account = new BankAccount("Mariya", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance);
class Warrior extends Character {
    useSword() {
        console.log("Ми використали меч");
    }
}
class Wizard extends Character {
    constructor(name, health, level, experience) {
        super(name, health, level, experience);
    }
    tellSpell() {
        console.log("Ми промовили закляття");
    }
}
class Archaeologist extends Character {
    constructor(name, health, level, experience) {
        super(name, health, level, experience);
    }
    attack() {
        console.log(`${this.name} атакує лопатою`);
    }
    dig() {
        console.log(`${this.name} проводить розкопки`);
    }
}
const a1 = new Archaeologist("Mariya", 100, 1, 0);
a1.attack();
a1.dig();
a1.showStats();
export {};
//# sourceMappingURL=test.js.map