let btn = document.querySelector(".header__button")
let body = document.querySelector("body")

btn.addEventListener("click", function() {
    body.classList.toggle("dark")
})

let boribkelish = 500;
let mehmonhona = 250;
let muzey = 120;
let dollar = 10900;
let yevro = 12272.64;
let summa = "alisher summani kiriting";
let alisher = Number(prompt(summa));

let dollir = (boribkelish + mehmonhona) * dollar;




let yevrosum = yevro * muzey;
xarajot = dollir + yevrosum;
console.log(" Jami ketadigan xarajatlar " + " " + xarajot);
console.log("alisherni bor puli " + " " + alisher);

if (alisher >= xarajot) {
    alert("Oq yul ,Alisher!");
    console.log("Oq yul ,Alisher pulingiz yetarli ekan!");


} else if (!parseInt(alisher)) {
    alert("Alisher, summani son orqali kiriting ");
    console.log("Alisher, summani son orqali kiriting ");
} else {
    alert("Alisher, ozgina sabir qilish kerak bular ekan ");
    console.log("Alisher, ozgina sabir qilish kerak bular ekan ");
}