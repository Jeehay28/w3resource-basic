// Calculation of the example
const result = document.querySelector("#result");
let [a, b, c] = [5, 6, 7];
console.log(a, b, c);

result.innerHTML = `
<h2>Question : Find the area of a triangle where lengths of the three of its sides are 5, 6, 7.</h2>
<button onclick="triangleArea()">Show Answer</button>
<button onclick="hide()">Hide Answer</button>
`
// s : semi-parameter
// Area of triangle = √[s(s – a)(s – b)(s – c)]

function triangleArea() {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area.toFixed(2));
    let html = `<p id="answer" style="color:blue;">The area of triangle is ${area.toFixed(2)}.</p>`;
    console.log(document.querySelectorAll("#answer").length);
    if (document.querySelectorAll("#answer").length == 0) {
        return result.insertAdjacentHTML("afterend", html);
    }
}

function hide() {
    const answer = document.querySelector("#answer");
    if (answer != null) {
        answer.remove();
        console.log("The answer deleted!")
    }
}

// Calculation of user input
const userInput = document.querySelector("#user-input");

userInput.innerHTML = `
<br>
<h2>Input the three sides of a trinangle.</h2>
    <label for="one"> Side 1 : </label>
    <input type="text" id="one">
    <label for="two"> Side 2 : </label>
    <input type="text" id="two">
    <label for="three"> Side 3 : </label>
    <input type="text" id="three">
    <button onclick="calc()">Click</button>
    <button onclick="cancel()">Cancel</button>
`

function calc() {
    a = parseFloat(document.querySelector("#one").value);
    b = parseFloat(document.querySelector("#two").value);
    c = parseFloat(document.querySelector("#three").value);

    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    let html = `<p id="user" style="color:green;">The area of triangle is ${area.toFixed(2)}.</p>`;
    console.log(document.querySelectorAll("#user").length);
    if (document.querySelectorAll("#user").length == 0) {
        return userInput.insertAdjacentHTML("afterend", html);
    }
}

function cancel() {
    const user = document.querySelector("#user");
    if (user != null) {
        user.remove();
        console.log("The answer deleted!")
    }
}




