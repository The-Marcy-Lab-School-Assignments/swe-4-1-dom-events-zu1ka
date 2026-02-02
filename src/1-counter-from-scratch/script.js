
const counterViewed = document.querySelector("h1")
const incrementBtn = document.querySelector(".increment")
const resetBtn = document.querySelector(".reset")
const highScore = document.querySelector(".high-score")


let number = 0
let newHighScore = 0




setInterval(() => {


    if (number > newHighScore) {
        newHighScore = number
        highScore.textContent = `High score = ${newHighScore}`
    }




    number = 0
    counterViewed.textContent = number
}, 10000)


incrementBtn.addEventListener("click", () => {
    number++
    counterViewed.textContent = number
})


resetBtn.addEventListener("click", () => {
    number = 0
    counterViewed.textContent = number
})


