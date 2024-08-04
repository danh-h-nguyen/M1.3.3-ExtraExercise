function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomIntegerArray(size, min, max) {
  const randomArray = [];
  for (let i = 0; i < size; i++) {
    randomArray.push(getRandomInteger(min, max));
  }
  console.log(randomArray);
  return randomArray;
}

function findLargestNumber(array) {
  let largestNumber = array[0];
  for (i = 0; i < array.length; i++) {
    largestNumber = array[i + 1] > largestNumber ? array[i + 1] : largestNumber;
  }
  return largestNumber;
}

function findSmallestNumber(array) {
  let smallestNumber = array[0];
  for (i = 0; i < array.length; i++) {
    smallestNumber =
      array[i + 1] < smallestNumber ? array[i + 1] : smallestNumber;
  }
  return smallestNumber;
}

let size;
let min;
let max;
let viewArray = [];
let largestNumber;
let smallestNumber;

const sizeField = document.querySelector("#sizeField");
const minField = document.querySelector("#minField");
const maxField = document.querySelector("#maxField");

sizeField.addEventListener("input", () => {
  size = parseInt(sizeField.value);
  return size;
});

minField.addEventListener("input", () => {
  min = parseInt(minField.value);
  return min;
});

maxField.addEventListener("input", () => {
  max = parseInt(maxField.value);
  return max;
});

const buttonToCreateArray = document.querySelector("#buttonToCreateArray");
buttonToCreateArray.addEventListener("click", () => {
  if (size && min && max) {
    viewArray = createRandomIntegerArray(size, min, max);
    document.querySelector(
      "#viewArray"
    ).innerHTML = `A random string of numbers: ${viewArray.join(", ")}`;

    largestNumber = findLargestNumber(viewArray);
    document.querySelector(
      "#largestNumber"
    ).innerHTML = `The largest number: ${largestNumber}`;

    smallestNumber = findSmallestNumber(viewArray);
    document.querySelector(
      "#smallestNumber"
    ).innerHTML = `The smallest number: ${smallestNumber}`;
  } else console.log("ahihi");
});
