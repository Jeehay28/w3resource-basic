window.onclick = e => {
    console.log(e.target);
    const clicked = e.target;
    clicked.classList.add("active");
}

const before = document.querySelector("#before");
const msg = {
    0: "“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” —George Lorimer",
    1: "“Go as far as you can see; when you get there, you’ll be able to see further.” —Thomas Carlyle",
    2: "“Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.” —Lou Holtz",
    3: "“The individual who says it is not possible should move out of the way of those doing it.” —Tricia Cunningham",
    4: "“I learned this, at least, by my experiment; that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.” —Henry David Thoreau",
    5: "“When someone tells me ‘no,’ it doesn’t mean I can’t do it, it simply means I can’t do it with them.” —Karen E. Quinones Miller",
    6: "“Build your own dreams or someone else will hire you to build theirs.” —Farrah Gray",
}

const today = new Date();
const num = today.getDay();
console.log(num);
console.log(msg[num]);

before.innerHTML = `<h2>${msg[num]}</h2>`
