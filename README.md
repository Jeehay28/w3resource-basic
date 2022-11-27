# JavaScript basic excercises from [w3resource](https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php)

### This is going to be my daily log for JavaScript coding practice.
 


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


📅 25/11/2022
- datetime
- printpage
- current-date
- the area of triangle
