function right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, dfg)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, dfg)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, dfg)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, dfg)
}
function back () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
        is_back = 1
        basic.showArrow(ArrowNames.South)
        while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
            mecanumRobot.Motor(LR.Upper_left, MD.Back, dfg)
            mecanumRobot.Motor(LR.Lower_left, MD.Back, dfg)
            mecanumRobot.Motor(LR.Upper_right, MD.Back, dfg)
            mecanumRobot.Motor(LR.Lower_right, MD.Back, dfg)
        }
    } else {
        if (is_back == 1) {
            mecanumRobot.state(MotorState.brake)
            basic.showIcon(IconNames.Square)
            is_back = 0
        }
    }
}
function left () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
        is_left = 1
        basic.showArrow(ArrowNames.West)
        mecanumRobot.setLed(LedCount.Left, LedState.ON)
        while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
            mecanumRobot.Motor(LR.Upper_left, MD.Back, dfg)
            mecanumRobot.Motor(LR.Upper_right, MD.Forward, dfg)
            mecanumRobot.Motor(LR.Lower_left, MD.Forward, dfg)
            mecanumRobot.Motor(LR.Lower_right, MD.Back, dfg)
        }
    } else {
        if (is_left == 1) {
            mecanumRobot.state(MotorState.brake)
            basic.showIcon(IconNames.Square)
            mecanumRobot.setLed(LedCount.Left, LedState.OFF)
            is_left = 0
        }
    }
}
function forw () {
    while (false) {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, dfg)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, dfg)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, dfg)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, dfg)
    }
}
let is_back = 0
let is_left = 0
let dfg = 0
irRemote.connectInfrared(DigitalPin.P9)
dfg = 20
is_left = 0
is_back = 0
basic.forever(function () {
    left()
    back()
})
