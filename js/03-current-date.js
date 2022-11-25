// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const result = document.querySelector('#result');
let today = new Date();

console.log(today.getFullYear(), today.getMonth(), today.getDate());
let yyyy = today.getFullYear();
let mm = today.getMonth();
let dd = today.getDate();

result.innerHTML = `<p>${mm}-${dd}-${yyyy}</p>
<p>${mm}/${dd}/${yyyy}</p>
<p>${dd}-${mm}-${yyyy}</p>
<p>${dd}/${mm}/${yyyy}</p>`


