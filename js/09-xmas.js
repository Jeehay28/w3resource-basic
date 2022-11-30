const result = document.querySelector("#result");
const today = new Date();
const xmas = new Date(`${today.getFullYear()}-12-25`);
// console.log(today);
// console.log(new Date(`${today.getFullYear()}-12-25`));
const days = Math.ceil((xmas - today) / (1000 * 60 * 60 * 24));
result.innerHTML = `<h2>${days}</h2>
                    <p>days left until Christmas!</p>`




