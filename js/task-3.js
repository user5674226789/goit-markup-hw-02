function filterArray(numbers, value) {
  let filteredArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      filteredArray.push(numbers[i]);
    }
  }
  return filteredArray;
}
