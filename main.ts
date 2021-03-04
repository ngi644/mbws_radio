function ledOff () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    if (MyWord == Words[0]) {
        radio.sendString("" + (NextWord))
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == MyWord) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        radio.sendString("" + (NextWord))
    } else {
        ledOff()
    }
})
let NextWord = ""
let MyWord = ""
let Words: string[] = []
ledOff()
radio.setGroup(1)
Words = ["A", "B", "C"]
MyWord = Words[0]
NextWord = Words[1]
basic.forever(function () {
	
})
