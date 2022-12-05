const btn = document.querySelector("#btn");
const filename = document.querySelector("#filename");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
    console.log(filename.value);
    result.innerHTML =
        `<p>The file name is ${filename.value.split(".")[0]}</p>
         <p>the file extension is ${filename.value.split(".")[1]}</p>
        `
})
