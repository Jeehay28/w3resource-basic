const url = "https://dummyjson.com/carts"
const result = document.querySelector("#result");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

const obj =
    fetch(url)
        .then(res => res.json())
        .then(data => {
            display(data)
        })

const display = (obj) => {

    console.log(obj.carts.sort((a, b) => a - b));
    obj.carts.sort((a, b) => a - b);

    function basic() {
        result.innerHTML = `
        <table>
        <thead>
            <tr>
                <th class="col-1">Cart ID</th>
                <th class="col-1">Product-ID</th>
                <th class="col-2">Title</th>
                <th class="col-1">Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>discountPercentage</th>
                <th>discountedPrice</th>
            </tr>
        </thead>
    </table>`
    }

    let cnt = 0;
    basic();
    describe(cnt);

    function describe(num) {
        for (let i = num * 5; i < 5 * (num + 1); i++) {
            for (let j = 0; j < 5; j++) {
                result.innerHTML += `
                    <table>
                    <tbody>
                    <tr>
                        <td class="col-1">${obj.carts[i].id}</td>
                        <td class="col-1">${obj.carts[i].products[j].id}</td>
                        <td class="col-2">${obj.carts[i].products[j].title}</td>
                        <td class="col-1">${obj.carts[i].products[j].price}</td>
                        <td>${obj.carts[i].products[j].quantity}</td>
                        <td>${obj.carts[i].products[j].total}</td>
                        <td>${obj.carts[i].products[j].discountPercentage}</td>
                        <td>${obj.carts[i].products[j].discountedPrice}</td>
                    </tr>
                </tbody>
                </table>
            `
            }
        }
        result.innerHTML += `<h2>${num + 1}</h2>`
    }

    zero.addEventListener("click", (event) => {
        cnt = parseInt(event.target.innerText);
        result.innerHTML = ""
        basic()
        describe(cnt - 1);
        one.classList.remove("active");
        two.classList.remove("active");
        three.classList.remove("active");
        zero.classList.add("active");
        return cnt;
    })

    one.addEventListener("click", (event) => {
        cnt = parseInt(event.target.innerText);
        result.innerHTML = ""
        basic()
        describe(cnt - 1);
        zero.classList.remove("active");
        two.classList.remove("active");
        three.classList.remove("active");
        one.classList.add("active");
        return cnt;
    })

    two.addEventListener("click", (event) => {
        cnt = parseInt(event.target.innerText);
        result.innerHTML = ""
        basic()
        describe(cnt - 1);
        zero.classList.remove("active");
        one.classList.remove("active");
        three.classList.remove("active");
        two.classList.add("active");
        return cnt;
    })

    three.addEventListener("click", (event) => {
        cnt = parseInt(event.target.innerText);
        result.innerHTML = ""
        basic()
        describe(cnt - 1);
        zero.classList.remove("active");
        one.classList.remove("active");
        two.classList.remove("active");
        three.classList.add("active");
        return cnt;
    })

    left.addEventListener("click", (event) => {
        basic()
        cnt -= 1;
        cnt = cnt < 1 ? 1 : cnt;
        describe(cnt - 1);
        zero.classList.remove("active");
        one.classList.remove("active");
        two.classList.remove("active");
        three.classList.remove("active");
        return cnt;
    })

    right.addEventListener("click", (event) => {
        basic()
        cnt += 1;
        cnt = cnt > 4 ? 4 : cnt;
        describe(cnt - 1);
        zero.classList.remove("active");
        one.classList.remove("active");
        two.classList.remove("active");
        three.classList.remove("active");
        return cnt;
    })
}






