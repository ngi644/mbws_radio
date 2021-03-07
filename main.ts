function ledOn () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
}
function ledOff () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    MyWord = Words[0]
    NextWord = Words[1]
})
input.onGesture(Gesture.Shake, function () {
    if (MyWord == Words[0]) {
        radio.sendString("" + (NextWord))
    }
})
input.onButtonPressed(Button.AB, function () {
    MyWord = Words[2]
    NextWord = Words[0]
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == MyWord) {
        NowState = 1
    } else {
        NowState = 0
    }
})
input.onButtonPressed(Button.B, function () {
    MyWord = Words[1]
    NextWord = Words[2]
})
let NextWord = ""
let MyWord = ""
let NowState = 0
let Words: string[] = []
ledOff()
radio.setGroup(1)
Words = ["A", "B", "AB"]
NowState = 0
basic.forever(function () {
    basic.showString("" + (MyWord))
    if (NowState == 1) {
        ledOn()
        NowState = 0
        radio.sendString("" + (NextWord))
    } else {
        ledOff()
    }
})
