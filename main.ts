input.onButtonPressed(Button.A, function () {
    varibale += 1
})
input.onButtonPressed(Button.AB, function () {
    varibale = 0
})
input.onButtonPressed(Button.B, function () {
    varibale += -1
})
let varibale = 0
varibale = 0
basic.forever(function () {
    basic.showNumber(varibale)
})
