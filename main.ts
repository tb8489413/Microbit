basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
    }
})
