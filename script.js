const fail = document.getElementById("failure");
const bad = document.getElementById("bad");
const okay = document.getElementById("okay");
const good = document.getElementById("good");
const excel = document.getElementById("excellent");

let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");

//to handle star1
star1.addEventListener("click", () => {
    star1.style.color = "#f43f5e";
    star2.style.color = "#cbd5e1";
    star3.style.color = "#cbd5e1";
    star4.style.color = "#cbd5e1";
    star5.style.color = "#cbd5e1"
    fail.classList.remove("hidden");
    bad.classList.add("hidden");
    okay.classList.add("hidden");
    good.classList.add("hidden");
    excel.classList.add("hidden");
})

//to handle star2
star2.addEventListener("click", () => {
    star1.style.color = "#f43f5e"
    star2.style.color = "#f43f5e"
    star3.style.color = "#cbd5e1"
    star4.style.color = "#cbd5e1"
    star5.style.color = "#cbd5e1"
    fail.classList.add("hidden");
    bad.classList.remove("hidden");
    okay.classList.add("hidden");
    good.classList.add("hidden");
    excel.classList.add("hidden");
})

//to handle star3
star3.addEventListener("click", () => {
    star1.style.color = "#f43f5e"
    star2.style.color = "#f43f5e"
    star3.style.color = "#f43f5e"
    star4.style.color = "#cbd5e1"
    star5.style.color = "#cbd5e1"
    fail.classList.add("hidden");
    bad.classList.add("hidden");
    okay.classList.remove("hidden");
    good.classList.add("hidden");
    excel.classList.add("hidden");
})

//to handle star4
star4.addEventListener("click", () => {
    star1.style.color = "#f43f5e"
    star2.style.color = "#f43f5e"
    star3.style.color = "#f43f5e"
    star4.style.color = "#f43f5e"
    star5.style.color = "#cbd5e1"
    fail.classList.add("hidden");
    bad.classList.add("hidden");
    okay.classList.add("hidden");
    good.classList.remove("hidden");
    excel.classList.add("hidden");
})

//to handle star5
star5.addEventListener("click", () => {
    star1.style.color = "#f43f5e"
    star2.style.color = "#f43f5e"
    star3.style.color = "#f43f5e"
    star4.style.color = "#f43f5e"
    star5.style.color = "#f43f5e"
    fail.classList.add("hidden");
    bad.classList.add("hidden");
    okay.classList.add("hidden");
    good.classList.add("hidden");
    excel.classList.remove("hidden");
})
