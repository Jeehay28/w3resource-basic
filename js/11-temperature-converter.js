const t1 = document.querySelector("#t1");
const calc1 = document.querySelector("#calc1");
const btnC = document.querySelector("#btnC");
const t2 = document.querySelector("#t2");
const calc2 = document.querySelector("#calc2");
const btnF = document.querySelector("#btnF");


btnC.addEventListener("click", () => {
    let c = t1.value;
    calc1.innerHTML = `<p>${9 * c / 5 + 32} &#8457;</p>`
})


btnF.addEventListener("click", () => {
    let f = t2.value;
    calc2.innerHTML = `<p>${(f - 32) * 5 / 9} &#8451;</p>`
})
