const result = document.querySelector(".result");
const msg = document.querySelector(".msg");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const str1 = "w3resource ";
const str2 = ' Wow, I spent a lot of time figuring this out! Finally, I did it. I needed my solution. The original text was "w3resource" but I added some more, haha. ';
const arr1 = str1.split(""); // string to array
const arr2 = str2.split("");


btn1.addEventListener("click", () => {
    setInterval(Display, 200);
    result.classList.toggle("active");
})

btn2.addEventListener("click", () => {
    setInterval(Message, 100);
    msg.classList.toggle("active");
})

function Display() {
    let first = arr1.shift(); // string
    // console.log(first);
    // console.log(arr);
    arr1.push(first); // array
    // console.log(arr);
    return result.innerText = arr1.join(""); // string
}

function Message() {
    let first = arr2.shift(); // string
    // console.log(first);
    // console.log(arr);
    arr2.push(first); // array
    // console.log(arr);
    return msg.innerText = arr2.join(""); // string
}

