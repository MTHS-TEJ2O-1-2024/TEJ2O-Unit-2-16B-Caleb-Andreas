/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Nov 2024
 * This program tells you if you are too close using sonar
 * on one microBit and sending a string to another microBit.
*/

// Variables.
let distanceToObject: number = 0

// Set group, cleanup then happy face at start
radio.setGroup(149)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// When a button pressed check distanceToObject and send string.
input.onButtonPressed(Button.A, function() {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (distanceToObject < 10) {
        radio.sendString("Too Close")
    } else {
        radio.sendString("Good")
    }
})

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})
