function isLeapYear(year) {
    const check = parseInt(year, 10);
    console.log(check);
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

// for test results
console.log(isLeapYear(2016));
console.log(isLeapYear(2000));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));
console.log(isLeapYear(100));

const testYears = [2016, 2000, 1700, 1800, 100];
const result = document.querySelector("#result");

for (year of testYears) {
    result.innerHTML += `<h2> Given Year :${year} </h2>
    <p>${isLeapYear(year)}</p>`
}


