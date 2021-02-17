// Дан массив с числами.
//Сделайте из него массив, состоящий из квадратов этих чисел.
let arr = [2, 2, 8, 4, 4, 6, 6, 6, 5, -10, 0];

(function sqrt() {
  let arr = [2, 2, 8, 4, 4, 6, 6, 6, 5, -10, 0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(`sqrt: ${arr}`);
})();

// 2 вариант
(function sqrt() {
  let arr = [2, 2, 8, 4, 4, 6, 6, 6, 5, -10, 0];
  arr = arr.map(function (num) {
    return num * num;
  });
  console.log(`sqrt: ${arr}`);
})();

// Верните массив, состоящий только из уникальных значений.
(function unic() {
  let arr = [2, 2, 8, 4, 4, 6, 6, 6, 5, -10, 0];
  arr = arr.filter(function (item, pos) {
    return arr.indexOf(item) == pos;
  });
  console.log(`unic: ${arr}`);
})();

// Проверьте то, что все элементы в массиве больше нуля.
(function moreNull() {
  let arr = [2, 2, 8, 4, 4, 6, 6, 6, 5, -10, 0];
  arr = arr.filter((e) => e > 0);
  console.log(`more null: ${arr}`);
})();

// Верните true, если сумма хотя бы одной пары соседних чисел в последовательности больше 10
(function sumMore10() {
  let arr = [2, 2, 8, 4, 4, 6, 6, 6, 5, -10, 0];
  for (let i = 0; i < arr.length; i++) {
    let d = ++i;
    let sum = arr[i] + arr[d];
    if (sum > 10) {
      console.log(`true, sum: ${sum}`);
      break;
    }
  }
})();

// Оставьте в нем только отрицательные числа.
(function lessNull() {
  let arr = [2, 2, 8, 4, 4, 6, 6, 6, 5, -10, 0, -4, -6];
  arr = arr.filter((e) => e < 0);
  console.log(`less null: ${arr}`);
})();

// Найдите сумму этих отрицательных чисел.
(function sumLessNull() {
  let arr = [2, 2, 8, 4, 4, 6, 6, 6, 5, -10, 0, -4, -6];
  arr = arr.filter((e) => e < 0);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`sum les null: ${sum}`);
})();

// Дан массив, в нем могут быть обычные элементы и подмассивы, оставьте в нем только подмассивы.
(function getSubArr() {
  let arr = [
    1,
    2,
    [3, 4],
    5,
    [6, 7],
    'string',
    ['some', 'thing'],
    { a: 'something' },
  ];
  arr = arr.filter((item) => Array.isArray(item));
  console.log(`arr with subarr: ${arr}`);
})();

//Дана строка Верните количество слов в строке, длина которых больше 4 символов.
(function getString4() {
  let str = '   ipsum sapsum   dolor emit   lol ';
  str = str.trim().replace(/[ ]{1,}/g, ' ');
  str = str.split(' ');
  let words = 0;
  str.forEach((e) => {
    if (e.length > 4) {
      words++;
    }
  });
  console.log(`count: ${words}`);
})();

// Если в строке имеется шестизначный номер - верните его, как результат функции
(function getNum6() {
  let str = '   ipsum sapsum    dolor emit 123456 12345 123456789';
  str = str.trim().replace(/[]{1,}/g, ' ');
  str = split(' ');
  let counter = null;

})();
