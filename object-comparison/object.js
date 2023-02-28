const first = { a: 1, b: 2, c: 3 };
const second = { a: 1, b: 2, c: 3, d: 5 };

function compareObjects(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
const similarObjects = compareObjects(first, second);
console.log(similarObjects);
