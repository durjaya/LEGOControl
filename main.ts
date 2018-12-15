
//% weight=99 color=#0fbc11 icon="\uf0e4" block="Power Functions"
namespace powerfunctions {

    let FACTOR = 1

    function ledOn(d: number) {
        let r = d * FACTOR;
        while (r > 26) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            control.waitMicros(2);
            pins.digitalWritePin(DigitalPin.P1, 0)
            r = r - 26;
        }
    }
    
    function ledOff(d: number) {
          control.waitMicros(d * FACTOR);
    }

    function waitToNext(){
        control.waitMicros(200000);
    }

   

    //% blockId=stop
    //% block="stop"
    //% weight=60
    export function stop() {

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
        waitToNext();
    }

    //% blockId=dance
    //% block="dance"
    //% weight=60
    export function dance(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        waitToNext();
    }

    //% blockId=volumePlus
    //% block="volumePlus"
    //% weight=60
    export function volumePlus(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500); 
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500); 
        ledOn(600);
        ledOff(1500); 
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        waitToNext();
    }

    //% blockId=volumeSub
    //% block="volumeSub"
    //% weight=60
    export function volumeSub(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500); 
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500); 
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500); 
        ledOn(600);
        waitToNext();
    }

    //% blockId=moveForward
    //% block="moveForward"
    //% weight=60
    export function moveForward(){
        ledOn(6000);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        waitToNext();
    }

    //% blockId=moveBack
    //% block="moveBack"
    //% weight=60
    export function moveBack(){
        ledOn(6000);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        waitToNext();
    }

    //% blockId=lookLeft
    //% block="lookLeft"
    //% weight=60
    export function lookLeft(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        waitToNext();
    }

    //% blockId=lookRight
    //% block="lookRight"
    //% weight=60
    export function lookRight(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        waitToNext();
    }

    //% blockId=slipForward
    //% block="slipForward"
    //% weight=60
    export function slipForward(){
        ledOn(6000);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        waitToNext();
    }

    //% blockId=slipBack
    //% block="slipBack"
    //% weight=60
    export function slipBack(){
        ledOn(6000);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        waitToNext();
    }

    //% blockId=turnLeft
    //% block="turnLeft"
    //% weight=60
    export function turnLeft(){
        ledOn(6000);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        waitToNext();
    }

    //% blockId=turnRight
    //% block="turnRight"
    //% weight=60
    export function turnRight(){
        ledOn(5950);
        ledOff(500);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        waitToNext();
    }

    //% blockId=math
    //% block="math"
    //% weight=60
    export function math(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        waitToNext();
    }

    //% blockId=science
    //% block="science"
    //% weight=60
    export function science(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        waitToNext();
    }

    //% blockId=english
    //% block="english"
    //% weight=60
    export function english(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        waitToNext();
    }

    //% blockId=voiceControl
    //% block="voiceControl"
    //% weight=60
    export function voiceControl(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        waitToNext();
    }

    //% blockId=programming
    //% block="programming"
    //% weight=60
    export function programming(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        waitToNext();
    }

    //% blockId=energeTransform
    //% block="energeTransform"
    //% weight=60
    export function energeTransform(){
        ledOn(6000);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        waitToNext();
    }

    //% blockId=musicradio
    //% block="musicradio"
    //% weight=60
    export function musicradio(){
        ledOn(5950);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        ledOff(600);
        ledOn(1500);
        ledOff(600);
        ledOn(600);
        ledOff(1500);
        ledOn(600);
        ledOff(1500);
        ledOn(1500);
        waitToNext();
    }

    //% blockId=musicradio2
    //% block="musicradio2"
    //% weight=60
    export function musicradio2(markMicroSeconds: number){

    }




    //% blockId=pf_adjust_ir_timing
    //% block="adjust timing | of IR mark %markMicroSeconds | and pause %pauseMicroSeconds"
    //% weight=10
    //% markMicroSeconds.min=-157 markMicroSeconds.max=0
    //% pauseMicroSeconds.min=-263 pauseMicroSeconds.max=0
    //% advanced=true
    export function adjustIrTiming(
        markMicroSeconds: number = 2,
        pauseMicroSeconds: number = 2)
    {
        let markTimingCorrectionMicroSeconds = markMicroSeconds;
        let pauseTimingCorrectionMicroSeconds = pauseMicroSeconds;
    }



}