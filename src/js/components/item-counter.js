const decrementBtn = document.querySelectorAll('.decrement-btn')
const incrementBtn = document.querySelectorAll('.increment-btn')

/* ---- Product Counter ---- */



for (let i = 0; i < decrementBtn.length; i++) {
    decrementBtn[i].addEventListener('click', function (event) {
        event.preventDefault()
        let clickedDecrementButton = event.target
        let input = clickedDecrementButton.parentElement.children[1]
        let inputValue = input.value
        if (inputValue < 3){
            clickedDecrementButton.setAttribute('disabled', true)
        }
        let newValue = parseInt(inputValue) - 1
        input.value = newValue
    })
}

for (let i = 0; i < incrementBtn.length; i++) {
    incrementBtn[i].addEventListener('click', function (event) {
        event.preventDefault()
        let clickedIncrementButton = event.target
        let input = clickedIncrementButton.parentElement.children[1]
        let currentDecrementButton = clickedIncrementButton.parentElement.children[0]
        let inputValue = input.value
        if (inputValue >= 1){
            currentDecrementButton.removeAttribute('disabled')
        }
        let newValue = parseInt(inputValue) + 1
        input.value = newValue
    })
}




