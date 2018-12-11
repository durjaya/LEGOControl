

// slow down factor for demo, at about 100 or 200 times slower
// you can see what is going on
let FACTOR = 1000

//function ledOn(d: number) {
//    let r = d * FACTOR;
//    while (r > 26) {
//        pins.digitalWritePin(DigitalPin.P1, 1)
//        control.waitMicros(2);
//        pins.digitalWritePin(DigitalPin.P1, 0)
//        r = r - 26;
//    }
//}

function ledOn(d: number) {
    let r = d * FACTOR;
    while (r > 26) {
        basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
        control.waitMicros(2);
        basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
        r = r - 26;
    }
}

function ledOff(d: number) {
    control.waitMicros(d * FACTOR);
}

//send 8 bit
function send(code: number) {
    for (let i = 15; i > -1; i--) {
        if (1 << i & code) {
            ledOn(1);
        } else {
            ledOff(1);
        }
    }
}

// send 32 bit with appropriate start and end
function command(ir1: number, ir2: number) {
    let factorx = 1
    //1
    ledOn(6000 * factorx);

    //2
    ledOff(600 * factorx);

    //3
    ledOn(600 * factorx);

    //4
    ledOff(1500 * factorx);

    //5
    ledOn(1500 * factorx);

    //6
    ledOff(600 * factorx);

    //7
    ledOn(1500 * factorx);

    //8
    ledOff(600 * factorx);

    //9
    ledOn(1500 * factorx);

    //10
    ledOff(600 * factorx);

    //11
    ledOn(600 * factorx);

    //12
    ledOff(1500 * factorx);

    //13
    ledOn(1500 * factorx);

    //14
    ledOff(600 * factorx);

    //15
    ledOn(1500 * factorx);

    //16
    ledOff(600 * factorx);

    //17
    ledOn(1500 * factorx);

}

// Button A sends code
input.onButtonPressed(Button.A, () => {
    command(0x35, 0x35);
    //send(0x35)


    
})


/**
basic.forever(function () {
    serial.writeValue("x", 0)
})

**/