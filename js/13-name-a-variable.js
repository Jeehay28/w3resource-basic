const btn = document.querySelector("#btn");
const named = document.querySelector("#named");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
    this[named.value] = 10;
    // console.log(named.value);
    // console.log(this[named.value]);
    result.innerHTML = `<p>${named.value}</p> 
    <p>${named.value} = ${this[named.value]}</p>`;
})