const concat = document.querySelector("#concat");
const constructor = document.querySelector("#constructor");
const example = document.querySelector(".example");
const clear = document.querySelector("#clear");
// const active = document.querySelectorAll(".active");

// concat()
concat.addEventListener("click", () => {
    example.innerHTML =
        `
        <p>const arr1 = ["Cecilie", "Lone"];</p>
<p>const arr2 = ["Emil", "Tobias", "Linus"];</p>
<p>const children = arr1.concat(arr2);</p>
<p>// ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus'] </p>
`
    concat.classList.toggle("active");
})

// constructor
constructor.addEventListener("click", () => {
    example.innerHTML =
        `
<p>const fruits = ["Banana", "Orange", "Apple", "Mango"];</p>
<p>let text = fruits.constructor;</p>
<p>// ƒ Array() { [native code] } </p>
`
    constructor.classList.toggle("active");
})


clear.addEventListener("click", () => {
    let active = document.querySelector(".active");
    // console.log(active);
    active.classList.remove("active");
    example.innerHTML = "";
})