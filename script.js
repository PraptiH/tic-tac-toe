let btns = document.querySelectorAll('.btn')
let winnerText = document.getElementById('winnerText')
let resetBtn = document.getElementById("resetBtn")
let valueO = true
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (valueO) {
            btn.innerText = "X"
            btn.style.color="red"
            valueO = false
        }
        else {
            btn.innerText = "O"
            btn.style.color="black"
            valueO = true
        }
        btn.disabled = "true"

        checkWinner()
    })
})

const checkWinner = () => {
    for (const pattern of winPattern) {
        let val1 = btns[pattern[0]].innerText
        let val2 = btns[pattern[1]].innerText
        let val3 = btns[pattern[2]].innerText

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                winnerText.innerText = `Congrats!!! The winner is ${val1}`
                btns.forEach(btn => {
                    btn.disabled = "true"
                })
            }
        }

    }
}

const resetGame = () => {

    btns.forEach(btn => {
        btn.innerText = ""
    })
    winnerText.innerText=""
}
resetBtn.addEventListener("click",resetGame)