const button = document.getElementById("btn")! as HTMLBodyElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// Задайте правильні ts типи для класичних js;
let age: number;
age = 50;
let firstName: string;
firstName = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;

let callback: (num: number) => void;

callback = (num) => {
  console.log(num);
};

// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything: any = -20;
anything = "Text";
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з цифрою.

let some: unknown;
some = 10;

let num: number;

if (typeof some === "number") {
  num = some;
}

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.

let person: [string, number];
person = ["Max", 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

enum LoadStatus {
  "LOADING",
  "READY",
}

// Зробіть змінну, яка може приймати або рядок, або число.

let union: string | number;

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

let literal: "enable" | "disable";

// Вкажіть типи для наступних функцій

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Створіть свій тип даних на основі наявних даних.\

type DataResponse = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: DataResponse = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: DataResponse = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
