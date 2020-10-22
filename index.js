function crawlTree(tree) {
  return tree.reduce((acc, x) => (acc + (Array.isArray(x) ? crawlTree(x) : x)), '');
}

function twoSum(arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (typeof map[val] !== 'undefined') {
      return [map[val], i];
    }
    const diff = target - val;
    map[diff] = i;
  }
  return false;
}

module.exports = {
  crawlTree,
  twoSum,
};
