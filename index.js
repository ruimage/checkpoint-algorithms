// Код для первого задания напиши в этой функции
// Для правильного прохождения тестов рекурсивно вызывайте эту функцию так: functions.crawlTree
function crawlTree(el) {
  if (Array.isArray(el)) {
    let word = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < el.length; i++) {
      word += functions.crawlTree(el[i]);
    }
    return word;
  }
  return el;
}

// Код для второго задания напиши в этой функции
// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i == j) {
//         continue;
//       }
//       if (arr[i] + arr[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// }

function twoSum(arr, target) {
  const numbers = {};

  arr.forEach((v, i) => {
    if (numbers[v] === undefined) {
      numbers[v] = i;
    }
  });

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    const indSecond = numbers[target - arr[i]];
    if (indSecond !== undefined && indSecond !== i) return [i, indSecond].sort((a, b) => a - b);
  }
  return [];
}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = {
  crawlTree,
  twoSum,
};
module.exports = functions;

