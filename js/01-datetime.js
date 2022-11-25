let today = new Date();
const day = document.querySelector('#day');
const time = document.querySelector('#time');
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(today);
console.log(today.getDay());
console.log(days[today.getDay()]);

// Current day
day.innerHTML = `<p>Today is ${days[today.getDay()]}!</p>`;

console.log(today.getHours()); // 22
console.log(today.getMinutes()); // 06
console.log(today.getSeconds());

// Current time is : 10 PM : 30 : 38
if (today.getHours() > 12) {
    time.innerText = `Current time is : ${today.getHours() - 12} PM : ${today.getMinutes()} : ${today.getSeconds()}`;
} else {
    time.innerText = `Current time is : ${today.getHours()} AM : ${today.getMinutes()} : ${today.getSeconds()}`;
}



