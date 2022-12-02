# JavaScript basic excercises from [w3resource](https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php)
## This is going to be my daily log for JavaScript coding practice.

📅 02/12/2022
- temperature converter

<img src="images/11-tempeature-converter.jpg" width="300">

💡
```
// IIFE(Immediately invoked function expression)
(() => console.log("Wow this works!"))()
// Wow this works!
```
<hr>


📅 01/12/2022
- calculator
```
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");

multiply.addEventListener("click", () => {
    let num1 = document.querySelector("#first").value;
    let num2 = document.querySelector("#second").value;
    result.innerHTML = `${num1 * num2}`;
})

divide.addEventListener("click", () => {
    let num1 = document.querySelector("#first").value;
    let num2 = document.querySelector("#second").value;
    result.innerHTML = `${num1 / num2}`;
})

reset.addEventListener("click", () => {
    document.querySelector("#first").value = "";
    document.querySelector("#second").value = "";
    result.innerHTML = "";
})
```
<hr>

📅 30/11/2022
- calculate the days left until Christmas
```
const result = document.querySelector("#result");
const today = new Date();
const xmas = new Date(`${today.getFullYear()}-12-25`);
const days = Math.ceil((xmas - today) / (1000 * 60 * 60 * 24));
result.innerHTML = `<h2>${days}</h2>
                    <p>days left until Christmas!</p>`
```
<hr>

📅 29/11/2022
- guess a number
```
const result = document.querySelector("#result");
let msg = "";
let id = "";
let luckyNum = Math.ceil(Math.random() * 10);
let userNum = parseInt(prompt("Enter a number."));
if (userNum !== NaN) {
    (luckyNum === userNum ? msg = "Good guess!" : msg = "Not matched")
}
(msg === "Good guess!" ? id = "good" : id = "no")
result.innerHTML =
    `<h2 id=${id}>${msg}</h2> 
<p>You entered <span id="user">${userNum}</span> and the lucky number is <span id="lucky">${luckyNum}</span>.</p>`
```
<hr />

📅 28/11/2022
- years between 2014 and 2050 that the 1st of January is Sunday 
```
const result = document.querySelector("#result");
for (let i = 2014; i < 2051; i++) {
    let newYear = new Date(`${i}-1-1`);
    if (newYear.getDay() === 0) {
        result.innerHTML +=
            `<h2>Given year : ${i}</h2>
             <p style="color:blue;">The 1st of January is Sunday.</p>`
    }
}
```
<hr>

📅 27/11/2022
- leap year test
```
function isLeapYear(year) {
    const check = parseInt(year, 10);
    let msg = "";
    if (check % 4 === 0 && check % 100 !== 0) {
        msg = "Yes, it's a leap year!";
    } else if (check % 4 === 0 && check % 100 === 0 && check % 400 === 0) {
        msg = "Yes, it's a leap year!";
    } else {
        msg = "No, it's not a leap year."
    }
    return msg;
}
```
- JavaScript Array Methods (in progress)

<hr>

📅 26/11/2022
- basic animation

```
setInterval(Display, 200); // call the Display function every 200 milliseconds

function Display() {
    let first = arr1.shift(); // get the first element of the array, which is a string
    arr1.push(first); // put the element in the last position of the array: still an array  
    return result.innerText = arr1.join(""); // string
}
```

<hr>

📅 25/11/2022
- datetime
- printpage
- current-date
- the area of triangle
