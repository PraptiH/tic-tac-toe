let btns = document.querySelectorAll('.btn')
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
        // console.log("clicked")
        if (valueO) {
            btn.innerText = "X"
            valueO = false
        }
        else {
            btn.innerText = "O"
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
        console.log(val1, val2, val3)
       if (val1 != "" && val2 != "" && val3 != "") {
                if (val1 === val2 && val2 === val3) {
                    console.log("winner")
                }
            }

    }

}