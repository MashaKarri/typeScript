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

type Product = {
  id: number;
  title: string;
  isavailable: boolean;
  isNew?: boolean;
};

const Iphone: Product = {
  id: 11,
  title: "iPhone 25 pro",
  isavailable: true,
};
