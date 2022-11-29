const result = document.querySelector("#result");
let msg = "";
let id = "";
let luckyNum = Math.ceil(Math.random() * 10);
console.log(luckyNum);
let userNum = parseInt(prompt("Enter a number."));
console.log(userNum);

if (userNum !== NaN) {
    (luckyNum === userNum ? msg = "Good guess!" : msg = "Not matched")
}

(msg === "Good guess!" ? id = "good" : id = "no")

result.innerHTML =
    `<h2 id=${id}>${msg}</h2> 
<p>You entered <span id="user">${userNum}</span> and the lucky number is <span id="lucky">${luckyNum}</span>.</p>`

