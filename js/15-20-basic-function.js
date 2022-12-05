// Q15
const btn15 = document.querySelector("#btn15");
const given15 = document.querySelector("#given15");
const a15 = document.querySelector("#a15");
const cln15 = document.querySelector("#cln15");

btn15.addEventListener("click", () => {
    console.log(given15.value);
    a15.innerHTML = `<p>${question15(given15.value)}</p>`
})
cln15.addEventListener("click", () => {
    a15.innerHTML = '';
    given15.value = '';
})

function question15(num) {
    let n = parseInt(num);
    let answer = 0;
    n > 13 ? answer = Math.abs(n - 13) * 2 : answer = 13 - n;
    return answer;
}

// Q16
const btn16 = document.querySelector("#btn16");
const given16 = document.querySelector("#given16");
const a16 = document.querySelector("#a16");
const cln16 = document.querySelector("#cln16");

btn16.addEventListener("click", () => {
    console.log(given16.value);
    a16.innerHTML = `<p>${question16(given16.value)}</p>`
})
cln16.addEventListener("click", () => {
    a16.innerHTML = '';
    given16.value = '';
})

function question16(str) {
    let answer = 0;
    let arr = str.trim().split(",").map(x => parseInt(x));
    arr[0] === arr[1] ? answer = (arr[0] + arr[1]) * 3 : answer = arr[0] + arr[1];
    return answer;
}

// Q17
const btn17 = document.querySelector("#btn17");
const given17 = document.querySelector("#given17");
const a17 = document.querySelector("#a17");
const cln17 = document.querySelector("#cln17");

btn17.addEventListener("click", () => {
    console.log(given17.value);
    a17.innerHTML = `<p>${question17(given17.value)}</p>`
})

cln17.addEventListener("click", () => {
    a17.innerHTML = '';
    given17.value = '';
})

function question17(num) {
    let n = parseInt(num);
    let answer = 0;
    n > 19 ? answer = Math.abs(n - 19) * 3 : answer = Math.abs(n - 19);
    return answer;
}

// Q18
const btn18 = document.querySelector("#btn18");
const given18 = document.querySelector("#given18");
const a18 = document.querySelector("#a18");
const cln18 = document.querySelector("#cln18");

btn18.addEventListener("click", () => {
    console.log(given18.value);
    a18.innerHTML = `<p>${question18(given18.value)}</p>`
})

cln18.addEventListener("click", () => {
    a18.innerHTML = '';
    given18.value = '';
})
// check two given numbers and return true if one of the number is 50 or if their sum is 50
function question18(str) {
    let arr = str.split(",").map(x => parseInt(x));
    let answer = 0;
    arr[0] === 50 || arr[1] === 50 || arr[0] + arr[1] === 50 ? answer = true : answer = false;
    return answer;
}

// Q19
const btn19 = document.querySelector("#btn19");
const given19 = document.querySelector("#given19");
const a19 = document.querySelector("#a19");
const cln19 = document.querySelector("#cln19");

btn19.addEventListener("click", () => {
    console.log(given19.value);
    a19.innerHTML = `<p>${question19(given19.value)}</p>`
})

cln19.addEventListener("click", () => {
    a19.innerHTML = '';
    given19.value = '';
})
// check whether a given integer is within 20 of 100 or 400
function question19(num) {
    let n = parseInt(num);
    let answer = 0;
    Math.abs(n - 100) <= 20 || Math.abs(n - 400) <= 20 ? answer = true : answer = false;
    return answer;
}

// Q20
const btn20 = document.querySelector("#btn20");
const given20 = document.querySelector("#given20");
const a20 = document.querySelector("#a20");
const cln20 = document.querySelector("#cln20");

btn20.addEventListener("click", () => {
    console.log(given20.value);
    a20.innerHTML = `<p>${question20(given20.value)}</p>`
})

cln20.addEventListener("click", () => {
    a20.innerHTML = '';
    given20.value = '';
})
// check from two given integers, whether one is positive and another one is negative.
function question20(str) {
    let arr = str.split(",").map(x => parseInt(x));
    let answer = "";
    if (arr[0] * arr[1] === 0) {
        answer = "False : One of the two numbers is 0";
    } else if (arr[0] * arr[1] < 0) {
        answer = "True : one is positive and the other is negative";
    } else {
        answer = "False : both numbers are positive or negative";
    }
    return answer;
}


