//first exercise
// a.
let numbers = [];
let btn1 = document.getElementById("oneToTwenty");
function firstEx() {
  for (let a = 1; a <= 20; a++) {
    numbers.push(a);
    document.getElementById("ex1a").innerHTML = numbers.join(", ");
  }
}
btn1.addEventListener("click", firstEx, { once: true });
// b.
let oddNum = [];
let btn2 = document.getElementById("showOdd");
function oddNumbers() {
  for (let b = 1; b <= 20; b++) {
    if (b % 2 == 1) {
      oddNum.push(b);
      document.getElementById("odd").innerHTML = oddNum.join(", ");
    }
  }
}
btn2.addEventListener("click", oddNumbers, { once: true });

//second exercise
//a.
var list = [2, 3, 5, 7, 5, 3];

function listSum() {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  document.getElementById("sumOfElements").innerHTML = sum;
  return sum;
}
//b.
function maxNumber() {
  document.getElementById("maxNum").innerHTML = Math.max(...list);
}

//c.
function howManyTimes() {
  let number = document.getElementById("count").value;
  let count = 0;
  for (target of list) {
    if (target == number) {
      count++;
    }
  }
  document.getElementById("countNumber").innerHTML =
    "Number " + number + " appears " + count + " times";
}

//Third exercise - Fibonacci
function fibonacci(nth) {
  let arr = [0, 1];
  for (let i = 2; i < nth; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

function fiboNumbers() {
  let nth = document.getElementById("fiboInput").value;
  let fiboElements = fibonacci(nth);
  document.getElementById("fiboOutputText").innerHTML = fiboElements.join(", ");
}

//FizzBuzz

function fizzBuzz() {
  let array = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      array.push("FizzBuzz");
    } else if (i % 3 == 0) {
      array.push("Fizz");
    } else if (i % 5 == 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }
  document.getElementById("fzBz").innerHTML = array;
  return array;
}
