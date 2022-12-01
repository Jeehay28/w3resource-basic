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




