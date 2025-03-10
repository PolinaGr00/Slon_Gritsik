function SetNumber() {
    let number = Math.floor(Math.random() * 100) + 1
    return number
} 

function GuessNumber() {
    let number = SetNumber()
    let n = 50
    let min = 1
    let max = 100
    for (let i = 1; i < 101; i++) {
        console.log("Попытка №"+i)
        console.log("Пробую число " + n)
        if (n == number) {
            console.log("Угадал!")
            break
        }
        if (n > number) {
            console.log("Меньше")
            max = n - 1
        }
        if (n < number) {
            console.log("Больше")
            min = n + 1
        }
        n = Math.round((max+min)/2)
    }
}

SetNumber()
GuessNumber()