// Chuyển đổi giữa chế độ thập phân và nhị phân
input.onButtonPressed(Button.A, function () {
    if (mode == "thapphan") {
        mode = "nhiphan"
        basic.showString("nhiphan")
    } else if (mode == "nhiphan") {
        mode = "thapphan"
        basic.showString("thapphan")
    }
})
// Hiển thị kết quả phép toán dựa trên Mode và phép toán đã nhập
input.onButtonPressed(Button.AB, function () {
    if (number_B == 0) {
        number_B = parseFloat(temp_B)
    }
    if (mode == "thapphan") {
        if (math == "+") {
            basic.showNumber(number_A + number_B)
        } else if (math == "-") {
            basic.showNumber(number_A - number_B)
        } else if (math == "x") {
            basic.showNumber(number_A * number_B)
        } else if (math == "/") {
            basic.showNumber(number_A / number_B)
        }
    } else if (mode == "nhiphan") {
        let b9 = 0
        let b8 = 0
        let b7 = 0
        let b6 = 0
        let b5 = 0
        let b4 = 0
        let b3 = 0
        let b2 = 0
        let b1 = 0
        let b0 = 0
        basic.showNumber(b0 * 1 + b1 * 2 + b2 * 4 + b3 * 8 + (b4 * 16 + (b5 * 32 + (b6 * 64 + b7 * 128))) + b8 * 256 + b9 * 512)
    }
    is_num_A_set = false
})
// Nhập phép toán + - * / trong hệ thập phân
input.onButtonPressed(Button.B, function () {
    is_num_A_set = true
    if (math == "+") {
        math = "-"
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (math == "-") {
        math = "x"
        basic.showIcon(IconNames.No)
    } else if (math == "x") {
        math = "/"
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (math == "/") {
        math = "+"
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        math = "+"
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (number_A == 0) {
        number_A = parseFloat(temp_A)
    }
})
let temp_A = ""
let number_A = 0
let temp_B = ""
let number_B = 0
let is_num_A_set = false
let math = ""
let mode = ""
mode = "thapphan"
basic.showString("thapphan")
math = ""
is_num_A_set = false
music.setVolume(255)
// Bàn phím số cho máy tính
basic.forever(function () {
    if (is_num_A_set == false) {
        if (pins.digitalReadPin(DigitalPin.P16) == 1) {
            temp_A = "" + temp_A + "0"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
            temp_A = "" + temp_A + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            temp_A = "" + temp_A + "2"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
            temp_A = "" + temp_A + "3"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            temp_A = "" + temp_A + "4"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            temp_A = "" + temp_A + "5"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P7) == 1) {
            temp_A = "" + temp_A + "9"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            temp_A = "" + temp_A + "6"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            temp_A = "" + temp_A + "7"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            temp_A = "" + temp_A + "8"
        }
        if (!(temp_A.isEmpty())) {
            basic.showString("" + temp_A + "...")
        }
    } else if (is_num_A_set == true) {
        if (pins.digitalReadPin(DigitalPin.P16) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P7) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            temp_B = "" + temp_B + "1"
            music.playTone(988, music.beat(BeatFraction.Half))
        }
        if (!(temp_B.isEmpty())) {
            basic.showString("" + temp_B + "...")
        }
    } else {
    	
    }
})
