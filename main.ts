let _0 = 0
input.onGesture(Gesture.Shake, function () {
    _0 += randint(80, 100)
    basic.showNumber(_0)
    if (_0 >= 80 && _0 <= 84) {
        basic.showString("A-")
    } else if (_0 >= 85 && _0 <= 89) {
        basic.showString("A")
    } else if (_0 >= 90 && _0 <= 100) {
        basic.showString("A+")
    }
})
