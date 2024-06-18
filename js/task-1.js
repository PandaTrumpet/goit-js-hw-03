// 'use strict'
// function slugify(title) {
//     title = title.toLowerCase();
//    const newTitle = title.split(" ");
//    const result = newTitle.join("-");
//    return result;
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const divisibleBy = (numbers, divisor) => {
//   return numbers.filter(num => num % divisor === 0);
// };

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

// const twiceAsOld = (dadYearsOld, sonYearsOld) => {
//   return Math.abs(sonYearsOld * 2 - dadYearsOld);
// };
// console.log(twiceAsOld(36, 7));
// const oddCount = n => {
//   const a = [];
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       a.push(i);
//     }
//   }
//   return a.length;
// };
// console.log(oddCount(13));

// const stringToNumber = str => {
//   return Number(str);
// };

// console.log(stringToNumber('2222'));

// function findMin(arr) {
//   return Math.min(...arr);
// }

// console.log(findMin([3, 5, 1, 8, 2])); // 1
// console.log(findMin([10, -2, 8, 3])); // -2

// function repeatString(str, num) {
//   let a = '';
//   for (let i = 0; i <= num; i++) {
//     a += str;
//   }
//   return a;
// }

// console.log(repeatString('abc', 3)); // 'abcabcabc'
// console.log(repeatString('hello', 2)); // 'hellohello'
// function shuffleArray(arr) {
//   const random = () => Math.random() - 0.5;
//   return random;
// }
// console.log(shuffleArray([1, 2, 3, 4, 5])); // Пример вывода: [3, 1, 5, 2, 4]
// console.log(shuffleArray(['a', 'b', 'c', 'd'])); // Пример вывода: ['c', 'a', 'd', 'b']

function countVowels(str) {
  str = str.toLowerCase();
  const a = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let b of str) {
    if (a.includes(b)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('hello')); // 2
console.log(countVowels('javascript')); // 3
