let Krus = 0
let Kopp = 0
let Produkt = 0
input.onButtonPressed(Button.A, function () {
    Krus += 1
    basic.showNumber(Kopp)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Kopp * Krus)
    Produkt = Kopp * Krus
    radio.setGroup(Produkt)
})
input.onButtonPressed(Button.AB, function () {
    Krus = 0
    Kopp = 0
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Kopp += 1
    basic.showNumber(Krus)
})
