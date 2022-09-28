input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.LogoUp, function () {
    if (number % 1 == 1) {
        basic.showString("O")
    } else {
        basic.showString("e")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (number < 0) {
        basic.showString("woah there very low")
    } else if (number > 0) {
        basic.showString("Woah there very high")
    } else {
        basic.showString("Z")
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
number = 0
basic.showNumber(number)
basic.forever(function () {
	
})
