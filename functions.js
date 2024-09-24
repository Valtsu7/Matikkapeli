let rand_num1 = 0
let rand_num2 = 0
let correctCount = 0
let incorrectCount = 0


const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}


const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 10)
    rand_num2 = getRandomIntNumberInRange(1, 10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}


document.addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
})


document.querySelector('#calculate').addEventListener('click', () => {
    const answer = Number(document.querySelector('#answer').value)
    const correctAnswer = rand_num1 + rand_num2

    if (answer === correctAnswer) {
        alert('Correct!')
        correctCount++
        document.querySelector('#correctCount').innerHTML = correctCount
    } else {
        alert('Incorrect!')
        incorrectCount++
        document.querySelector('#incorrectCount').innerHTML = incorrectCount
    }

    randomizeNumbers()
    document.querySelector('#answer').value = ''
})
