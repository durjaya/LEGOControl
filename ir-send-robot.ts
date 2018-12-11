// slow down factor for demo, at about 100 or 200 times slower
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
function stop() {

    //1
    ledOn(6000);

    //2
    ledOff(600);

    //3
    ledOn(600);

    //4
    ledOff(1500);

    //5
    ledOn(1500);

    //6
    ledOff(600);

    //7
    ledOn(1500);

    //8
    ledOff(600);

    //9
    ledOn(1500);

    //10
    ledOff(600);

    //11
    ledOn(600);

    //12
    ledOff(1500);

    //13
    ledOn(1500);

    //14
    ledOff(600);

    //15
    ledOn(1500);

    //16
    ledOff(600);

    //17
    ledOn(1500);
}

// Button A sends code
input.onButtonPressed(Button.A, () => {
    stop();

})


/**
basic.forever(function () {
    serial.writeValue("x", 0)
})

**/