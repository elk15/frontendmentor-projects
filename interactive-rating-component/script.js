const submitBtn = document.querySelector(".submit");
const start = document.querySelector(".start");
const thank = document.querySelector(".thank");
const rating = document.querySelector(".rating");
const nums = document.querySelectorAll(".num");


nums.forEach(function (num) {
    num.addEventListener('focus', () => {

        submitBtn.addEventListener("click", () => {
            rating.textContent = num.textContent;
            start.classList.add("hidden");
            thank.classList.remove("hidden");
        })
    })
})



