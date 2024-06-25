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

// const arr = [1, 2, 3, 445, 6];

// const a = r => {
//   return r.map(el => el + el * 0.1);
// };

// console.log(a(arr));

// let array = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < array.length - 1; i++) {
//   let subArray = array.slice(i, i + 2);
//   console.log(subArray);
// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combo = arr1.concat(arr2);
// console.log(combo);

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// for (let i = 1; i <= 1000; i++) {
//   let number = i.toString();
//   let firstDigit = parseInt(number[0]);
//   let secondDigit = parseInt(number[1] || 0);

//   if (firstDigit + secondDigit === 5) {
//     console.log(i);
//   }
// }

// Дан массив. Удалите из него элементы с заданным значением.

// let b = [1, 2, 3, 4, 5];
// const a = arr => {
//   const del = b.find(el => el === arr);
//   return b.filter(el => el !== del);
// };

// console.log(a(3));
// Дан некоторый массив, например, вот такой:Найдите сумму первой половины элементов этого массива.

// const array = [1, 2, 3, 4, 5, 6];
// const a = arr => {
//   let sum = 0;
//   for (let i of arr) {
//     sum = +i;
//     if (i === 2) {
//       return;
//     }
//   }
//   return sum;
// };

// console.log(a(array));
// const a = arr => {
//   const s = arr.slice(0, 3);
//   return s.reduce((acc, el, index) => {
//     return acc + el;
//   }, 0);
// };
// console.log(a(array));
// const a = arr => {
//   return arr.reduce((acc, el, index) => {
//     if (index < 3) {
//       return acc + el;
//     }
//     return acc;
//   }, 0);
// };

// console.log(a(array));

// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

// const array = [1, 2, 3, -4, -6, -2, -5, -2];

// const a = arr => {
//   let num = 0;
//   for (let i of arr) {
//     if (i < 0) {
//       num = num + 1;
//     }
//   }
//   return num;
// };

// console.log(a(array));

// Дана строка. Удалите предпоследний символ из этой строки.
// const string = 'Коля ло';

// const a = str => {
//   const b = str.split('');
//   const c = b.length;
//   const d = b.filter((el, index) => index !== c - 2);
//   const res = d.join('');
//   console.log(res);
// };
// a(string);
// const array = [1, 2, 3, 4, 5, 6];

// const a = arr => {
//   const b = arr.slice(0, 3).reduce((acc, el) => {
//     return acc + el;
//   }, 0);
//   const two = arr.slice(3, 6).reduce((acc, el) => {
//     return acc + el;
//   }, 0);
//   const result = b / two;
//   console.log(result);
// };

// a(array);

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

// const a = 'Helol';
// const b = 'Byl';
// const foo = (first, second) => {
//   const f = a.length;
//   const fiestSy = a.charAt(f - 1);
//   const w = b.length;
//   const sec = b.charAt(w - 1);
//   if (fiestSy === sec) {
//     return true;
//   }
//   return false;
// };
// console.log(foo(a, b));

// даны числа, разделенные запятыми:

// const str = '12,34,56';

// const foo = s => {
//   const a = s
//     .split(',')
//     .map(Number)
//     .reduce((ac, el) => {
//       return ac + el;
//     }, 0);
//   return a;
// };
// console.log(foo(str));

// Дана дата в следующем формате:
const data = '2025-12-31';

// Преобразуйте эту дату в следующий объект:
const foo = date => {
  const a = date.split('-').join(' ');
  console.log(a);
};
foo(data);
