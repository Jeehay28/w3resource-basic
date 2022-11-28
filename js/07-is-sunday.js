const result = document.querySelector("#result");
for (let i = 2014; i < 2051; i++) {
    let newYear = new Date(`${i}-1-1`);
    if (newYear.getDay() === 0) {
        result.innerHTML +=
            `<h2>Given year : ${i}</h2>
             <p style="color:blue;">The 1st of January is Sunday.</p>`
    }
}