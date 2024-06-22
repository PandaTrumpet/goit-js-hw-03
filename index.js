// console.log('Hello');
// Найдите сумму всех целых чисел от 1 до 100.

// const a = num => {
//   let i;
//   let result = 0;
//   for (i = 0; i <= num; i++) {
//     result += i;
//   }
//   console.log(result);
// };

// a(100);
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

// const a = num => {
//   let result = 0;
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 1) {
//       result += i;
//     }
//   }
//   console.log(result);
// };

// a(100);

// Даны два целых числа. Найдите остаток от деления первого числа на второе.

// const a = (one, two) => {
//   const result = one % two;
//   console.log(result);
// };

// a(10, 3);

// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

// const a = str => {
//   const a = str
//     .split('')
//     .reverse()
//     .forEach(element => {
//       console.log(element);
//     });
// };

// a('Hello');

// const a = arr => {
//   let result = 0;
//   for (let i of arr) {
//     result += Math.pow(i, 2);
//   }
//   console.log(result);
// };

// a([2, 3, 4, 5, 5]);
// Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const a = arr => {
//   let result = 0;
//   for (let i of arr) {
//     if (i >= 0 && i < 10) {
//       result += i;
//     }
//   }
//   console.log(result);
// };

// a([2, 3, 4, 5, 9, -4, -2]);
//Получите массив букв этой строки.

// const a = str => {
//   const b = [];
//   for (let i of str) {
//     b.push(i);
//   }
//   console.log(b);
// };
// a(12345);
// Заполните массив четными числами из промежутка от 1 до 100.
// const a = num => {
//   let b = [];
//   for (let i = 2; i <= num; i++) {
//     if (i % 2 === 0) {
//       b.push(i);
//     }
//   }
//   return b;
// };
// console.log(a(100));

// Округлите эти дроби до одного знака в дробной части.

// const a = arr => {
//   return arr.map(el => el.toFixed(1));
// };
// console.log(a([1.456, 2.125, 3.32, 4.1, 5.34]));

// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://
// let arr = ['http://23r5', 'http://jdfsjfd', 'sdfdsf', 'sdfsdf'];
// const a = r => {
//   return r.filter(el => el.includes('http://'));
// };
// console.log(a(arr));
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

const arr = [1, 2, 3, 445, 6];

const a = r => {
  return r.map(el => el + el * 0.1);
};

console.log(a(arr));
