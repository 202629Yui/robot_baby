music.playMelody("C D E F G A B C5 ", 120)
control.waitMicros(4)
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    control.waitMicros(10)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
}
