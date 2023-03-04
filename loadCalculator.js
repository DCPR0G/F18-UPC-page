const sectionCalculatorPage = document.querySelector(".calculator");

sectionCalculatorPage.innerHTML += `
<section translate="no" class="section-calculator">

<div class="loading">
    <div class="radar-container">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="circle-4"></div>
        <div class="radar-line-static1"></div>
        <div class="radar-line-static2"></div>
        <div class="radar-line-static3"></div>
        <div class="radar-line-static4"></div>
        <div class="radar-line"></div>
    </div>
    <p>LOOKING FOR TARGET</p>
</div>

<div class="container-calc">

    <!-- PANEL SUPERIOR ARRIBA-->

    <div class="upper-panel--up--container">
        <div class="upper-panel--up--border1"></div>
        <div class="upper-panel--up">
            <div class="upper-panel--up--line"></div>
        </div>
        <div class="upper-panel--up--border2"></div>
    </div>

    <!-- PANEL SUPERIOR ABAJO-->

    <div class="upper-panel--down--container">

        <div class="upper-panel--down--border1"></div>

        <div class="upper-panel--down">

            <div class="upper-panel--down-inside-up"></div>
            <div class="upper-panel--down-screwed-lid">
                <div class="screw">+</div>
                <p class="DM">DM</p>
                <div class="screw">+</div>
            </div>

            <div class="upper-panel--down-button-base-basic--1 base-basic">
                <button class="upper-panel--down-button-base-basic--button1 button"></button>
            </div>

            <div class="upper-panel--down-button-base-basic--2 base-basic">
                <button class="upper-panel--down-button-base-basic--button2 button"></button>
            </div>
            
            <div class="upper-panel--down-button-base-hex base-basic">
                <button class="upper-panel--down-button-base-basic--button3 button"></button>
            </div>

        </div>

        <div class="upper-panel--down--border2"></div>

    </div>

    <!-- PANEL INFERIOR -->

<div class="lower-panel-container">

    <div class="panel-support"></div>

    <div class="lower-panel">

        <!-- PANEL INFERIOR DERECHO-->

        <div class="lower-panel--right-panel">
            
            <div class="mini-screen-container">
                <div class="screw">.</div>
                <div class="mini-screen screen">
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <div class="root-tipping-container">
                        
                    </div>
                </div>
                <div class="screw">.</div>
            </div>
            
            <p class="text-panel roots-txt">ROOT/S</p>

            <div class="rotary-button rotary-button-vol"></div>
            <p class="text-panel vol-txt">VOL</p>

            <div class="screw">+</div>
            
            <button class="AC-button button-square">AC</button>

            <div class="rotary-button rotary-button-brt"></div>
            <p class="text-panel brt-txt">BRT</p>
            
        </div>

        <!-- PANEL INFERIOR DERECHO PANTALLAS-->

        <div class="lower-panel--screens-r">

            <div class="screws">
                <div class="screw"></div>
                <div class="screw"></div>
            </div>

            <div class="screen1 screen">
                <div class="result">
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                </div>

                <div class="results result1">

                </div>

                <div class="screen-glass"></div>
            </div>

            <div class="screws">
                <div class="screw"></div>
                <div class="screw"></div>
            </div>

            <div class="screen2 screen">
                <div class="result">
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                </div>

                <div class="results result2">

                </div>

                <div class="screen-glass"></div>
            </div>

            <div class="screws">
                <div class="screw"></div>
                <div class="screw"></div>
            </div>

            <div class="screen3 screen">
                <div class="result">
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                </div>

                <div class="results result3">

                </div>

                <div class="screen-glass"></div>
            </div>

            <div class="screws">
                <div class="screw"></div>
                <div class="screw"></div>
            </div>

            <div class="screen4 screen">
                <div class="result">
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                </div>

                <div class="results result4">

                </div>

                <div class="screen-glass"></div>
            </div>

            <div class="screws">
                <div class="screw"></div>
                <div class="screw"></div>
            </div>

            <div class="screen5 screen">
                <div class="result">
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                </div>

                <div class="results result5">

                </div>

                <div class="screen-glass"></div>
            </div>

            <div class="screws">
                <div class="screw"></div>
                <div class="screw"></div>
            </div>

        </div>

        <!-- PANEL INFERIOR CENTRAL BOTONES-->

        <div class="lower-panel--center-button-panel--container">

            <div class="screw">+</div>

            <div class="lower-panel--center-button-panel">

                <div class="base-basic base-basic-buttonTK">
                    <button value="1" class="button-take1 button-take"></button>
                </div>
                <div class="base-basic base-basic-buttonTK">
                    <button value="2" class="button-take2 button-take"></button>
                </div>
                <div class="base-basic base-basic-buttonTK">
                    <button value="3" class="button-take3 button-take"></button>
                </div>
                <div class="base-basic base-basic-buttonTK">
                    <button value="4" class="button-take4 button-take"></button>
                </div>
                <div class="base-basic base-basic-buttonTK">
                    <button value="5" class="button-take5 button-take"></button>
                </div>

            </div>

            <div class="screw">+</div>

        </div>

        <!-- PANEL IZQUIERDO TECLADO Y PANTALLA-->

        <div class="lower-panel--left-container">
            
            <div class="main-screen--container">

                <div class="screws">
                    <div class="screw"></div>
                    <div class="screw"></div>
                </div>

                <div class="main-screen screen">
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>
                    <p class="tipping-off">8</p>

                    <div class="tipping">
                    </div>

                    <div class="screen-glass"></div>
                </div>

                <div class="screws">
                    <div class="screw"></div>
                    <div class="screw"></div>
                </div>

            </div>

            <div class="lower-panel--pad-container">
                <button value="1" class="button-square button-num button-calc button1">1</button>
                <button value="2" class="button-square button-num button-calc button-double button2">N<br>2</button>
                <button value="3" class="button-square button-num button-calc button3">3</button>
                <button value="4" class="button-square button-num button-calc button-double button4">W<br>4</button>
                <button value="5" class="button-square button-num button-calc button5">5</button>
                <button value="6" class="button-square button-num button-calc button-double button6">E<br>6</button>
                <button value="7" class="button-square button-num button-calc button7">7</button>
                <button value="8" class="button-square button-num button-calc button-double button8">S<br>8</button>
                <button value="9" class="button-square button-num button-calc button9">9</button>
                <button value="0" class="button-square button-num button-calc button-double button0">-<br>0</button>

                <button class="button-square button-calc button-delete">DEL</button>
                <button class="button-square button-calc button-enter">ENTER</button>
            </div>

        </div>

        <div class="screw screw-left">+</div>

        <div class="mini-screen-container mini-screen-container-left">
            <div class="screw">.</div>
            <div class="mini-screen screen">
                <p class="tipping-off">8</p>
                <p class="tipping-off">8</p>
                <div class="power-tipping-container">

                </div>
            </div>
            <div class="screw">.</div>
        </div>

        <p class="text-panel power-txt">PW</p>

    </div>

    <div class="panel-support"></div>

</div>

    <!-- PANEL INFERIOR DE BOTONES-->

    <div class="lower-button-panel-container">

        <div class="nut"></div>
        <div class="rotary-button2-container power-button">
            <div class="rotary-button2--base"></div>
            <div class="oval-back"></div>
            <div class="oval-main"></div>
            <div class="oval-center"></div>
            <div class="arrow arrow-power">
                <div class="arrow-right arrows-p arrow-right--power arrows-buttons">2</div>
                <div class="arrow-left arrows-p arrow-left--power arrows-buttons">1</div>
            </div>
        </div>

        <div class="lower-button-panel--separator"></div>

        <div class="lower-button-panel">
            <button value="^" class="button-square button-op button-op-advanced--power button-lowers button-lower1"><p>x</p><b>X</b></button>
            <button value="+" class="button-square button-op button-lowers button-lower2"><p>+</p></button>
            <button value="-" class="button-square button-op button-lowers button-lower3"><p>-</p></button>
            <button value="x" class="button-square button-op button-lowers button-lower4"><p>x</p></button>
            <button value="/" class="button-square button-op button-lowers button-lower5"><p>%</p></button>
            <button value="√" class="button-square button-op button-op-advanced--root button-lowers button-lower6"><p>x</p>√</button>
        </div>

        <div class="lower-button-panel--separator"></div>

        <div class="rotary-button2-container root-button">
            <div class="rotary-button2--base"></div>
            <div class="oval-back"></div>
            <div class="oval-main"></div>
            <div class="oval-center"></div>
            <div class="arrow arrow-root">
                <div class="arrow-right arrows-r arrow-right--root arrows-buttons">2</div>
                <div class="arrow-left arrows-r arrow-left--root arrows-buttons">1</div>
            </div>
        </div>
        <div class="nut"></div>

    </div>

</div>

</section>`

const loading = document.querySelector(".loading");

// CARGAR CALCULADORA //

// OBSERVER //

const grabButtonSec2 = document.querySelector(".calculator-grab-button-container");

const verifyVisibility = (entries) => {
    const entry = entries[0];
    console.log(entry.isIntersecting)
}

const observer = new IntersectionObserver(verifyVisibility);

observer.observe(grabButtonSec2)

















const calculator = document.querySelector(".container-calc");

addEventListener("load",()=>{
    setTimeout(() => {
        loading.style.transition = `250ms`
        loading.style.opacity = 0
    }, 2000);

    setTimeout(() => {
        loading.style.display = `none`
        calculator.style.transition = `opacity 1s, scale 1s`
        calculator.style.opacity = 1
        calculator.style.scale = 1.2
    }, 2500);
});

// ERRORES DEL SISTEMA //

let err500 = "ERR 500"
let err510 = "ERR 510"
let err520 = "ERR 520"
let err530 = "ERR 530"
let err540 = "ERR 540"
let err550 = "ERR 550"
let NAN = "NaN"

// PANTALLA //

const mainScreen = document.querySelector(".tipping");

// VALOR ACTUAL //

let actualValue = [``,``,``];

//- - - - - - - - - - - - BOTONES NÚMEROS - - - - - - - - - - - -//

const botonesNumeros = document.querySelectorAll(".button-num");

botonesNumeros.forEach(boton => {
    boton.addEventListener("click",()=>{

        if (VOLon == 1){
            squareClick = new Audio ("audio/square.mp3");
            squareClick.play();
        };

        countPowRoot = 1
        setTimeout(() => {
            boton.blur(actualValue);
        }, 1);

        if(mainScreen.innerHTML[22] == `E` || mainScreen.innerHTML[49] == `E` || mainScreen.innerHTML[73] == `E`){
            mainScreen.innerHTML= ``
            actualValue = [``,``,``];
        }
    

        else if (actualValue[1] == ``){

            actualValue[0] += boton.value
                            
            if(boton.value == 1){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
            }
            else if(boton.value == 7){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
            }
            else {
                mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
            }
        }

        else if((actualValue[1] == `^` && actualValue[0] != ``)||(actualValue[1] == `√` && actualValue[0] != ``)){
            
            actualValue = [``,``,``];
            mainScreen.innerHTML = ``;

            arrowsButtons.forEach(arrow => {
                arrow.style.display = `none`
            })
            screenRoot.innerHTML = ``;
            screenPower.innerHTML = ``;

            countPowRoot = 1;

            for (let i = 0; i < err550.length; i++){
                if (err550[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-ERR510">${err550[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${err550[i]}</p>`
                }
            }
            beepbeepFunction();
        }

        else if(actualValue[1] == `^` && actualValue[0] == ``){

            actualValue[2] += boton.value

            mainScreen.innerHTML = ``

            let actualValue0String = `${actualValue[2]}`

            for(let i = 0; i < actualValue0String.length; i++){
                if( actualValue0String[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                }
                else if( actualValue0String[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                }
                else {
                    mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                }
            }
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
        }

        else {

            actualValue[2] += boton.value

            if(boton.value == 1){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
            }
            else if(boton.value == 7){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
            }
            else {
                mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
            }

        }
        verifyTippingOnOff();
        verifyLength();
    })
});

//- - - - - - - - - - - - BOTONES OPERADORES - - - - - - - - - - - -//

let OPcount = ``;

const botonesOperadores = document.querySelectorAll(".button-op");

botonesOperadores.forEach(botonOP => {
    botonOP.addEventListener("click",()=>{

        if (VOLon == 1){
            squareClick = new Audio ("audio/square.mp3");
            squareClick.play();
        };

        actualValue[1] += botonOP.value

        verifyOP();

        if(OPcount.length < 1){
            return
        }
        
        else if(mainScreen.innerHTML[22] == `E` || mainScreen.innerHTML[49] == `E` || mainScreen.innerHTML[73] == `E`){
            mainScreen.innerHTML= ``
            actualValue = [``,``,``];
        }

        else if(botonOP.value == `+`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--plus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `-`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--minus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `/`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--division-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `x`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--multiplication-sign">${botonOP.value}</p>`
        }


        else if(botonOP.value == `^`){
            if (actualValue[2] == `` && actualValue[1] == `^`){

                mainScreen.innerHTML = ``

                actualValue[2] = actualValue[0]
                actualValue[0] = ``

                let actualValue0String = `${actualValue[2]}`
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">${botonOP.value}</p>`
            }
        }


        else if(botonOP.value == `√`){
            if (actualValue[2] == ``){
                mainScreen.innerHTML = ``
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--root-sign">${botonOP.value}</p>`

                actualValue[2] = actualValue[0]
                actualValue[0] = ``

                let actualValue0String = `${actualValue[2]}`
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
            }
        }
        verifyTippingOnOff();
        verifyLength();
    })
});

//- - - - - - - - - - - - - - - BOTON AC - - - - - - - - - - - - - - -//

const buttonAC = document.querySelector(".AC-button");

buttonAC.addEventListener("click",()=>{

    if (VOLon == 1){
        squareClick = new Audio ("audio/square.mp3");
        squareClick.play();
    };

    actualValue = [``,``,``];
    screensInUse = [false,false,false,false,false];
    resultScreen5.innerHTML = ``;
    resultScreen4.innerHTML = ``;
    resultScreen3.innerHTML = ``;
    resultScreen2.innerHTML = ``;
    resultScreen1.innerHTML = ``;
    mainScreen.innerHTML = ``;
    saveResults = [false,false,false,false,false];
    OPcount = ``;
    arrowsButtons.forEach(arrow => {
        arrow.style.display = `none`
    });
    screenRoot.innerHTML = ``;
    screenPower.innerHTML = ``;
    countPowRoot = 1
})

//- - - - - - - - - - - - - - - BOTON ENTER - - - - - - - - - - - - - - -//

const buttonENTER = document.querySelector(".button-enter");

addEventListener("keypress",()=>{

    if(VOLon == 1){
        ENTClick.play();
    }

    calculate(actualValue[0],actualValue[1],actualValue[2]);
    mainScreen.innerHTML = ``;
    actualValue = [``,``,``];
    OPcount = ``;
    arrowsButtons.forEach(arrow => {
        arrow.style.display = `none`
    });
    screenRoot.innerHTML = ``;
    screenPower.innerHTML = ``;
    countPowRoot = 1
})

buttonENTER.addEventListener("click",()=>{

    if(VOLon == 1){
        ENTClick.play();
    }

    calculate(actualValue[0],actualValue[1],actualValue[2]);
    mainScreen.innerHTML = ``;
    actualValue = [``,``,``];
    OPcount = ``;
    arrowsButtons.forEach(arrow => {
        arrow.style.display = `none`
    });
    screenRoot.innerHTML = ``;
    screenPower.innerHTML = ``;
    countPowRoot = 1
})

//- - - - - - - - - - - - - - - CALCULAR - - - - - - - - - - - - - - -//

let result

const calculate = (num1,op,num2) => {

    if (num1 == ``){
        num1 = 0;
    }

    else if(op == ``){
        op = `+`
        num2 = 0;
    }

    else if(num2 == ``){
        num2 = 0;
    }

    if (op == `+`){
        result = parseFloat(num1) + parseFloat(num2);
        putInScreen(Math.round(result)); 
        saveResult(Math.round(result));
    }
    else if (op == `-`){
        result = parseFloat(num1) - parseFloat(num2);
        let resultString = result.toString()
        if (resultString.includes("-")){
            putInScreen("N"); 
            saveResult("N");
        }
        else{
            putInScreen(result); 
            saveResult(result);
        }
    }
    else if (op == `x`){
        result = parseFloat(num1) * parseFloat(num2);
        putInScreen(Math.round(result)); 
        saveResult(Math.round(result));
    }
    else if (op == `/`){
        result = parseFloat(num1) / parseFloat(num2);
        let resultString = result.toString()
        if (resultString.includes(".")){
            putInScreen("^"+Math.round(result)); 
            saveResult(Math.round(result));
        }
        else{
            putInScreen(result); 
            saveResult(result);
        }
    }
    else if (op == `^`){
        result = Math.pow(parseFloat(num2),parseFloat(num1));
        putInScreen(Math.round(result)); 
        saveResult(Math.round(result));
    }
    else if (op == `√`){
        result = Math.pow(parseFloat(num2), 1/parseFloat(num1));
        let resultString = result.toString();
        if (resultString.includes(".")){
            putInScreen("^"+Math.round(result)); 
            saveResult(Math.round(result));
        }
        else{
            putInScreen(result); 
            saveResult(result);
        }
    }
}

//- - - - - - - - - - - - - - - PUT IN SCREENS - - - - - - - - - - - - - - -//

const resultScreen1 = document.querySelector(".result1");
const resultScreen2 = document.querySelector(".result2");
const resultScreen3 = document.querySelector(".result3");
const resultScreen4 = document.querySelector(".result4");
const resultScreen5 = document.querySelector(".result5");

let screensInUse = [false,false,false,false,false];

const putInScreen = (res) =>{

    beepFunction();

    let resString = res.toString()

    if(resString == "Infinity"){
        pullDownScreens();
        for (let i = 0; i < err510.length; i++){
            if (err510[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-ERR510">${err510[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${err510[i]}</p>`
            }
        }
        beepbeepFunction();
    }

    else if (resString == "N"){
        pullDownScreens();
        for (let i = 0; i < err520.length; i++){
            if (err520[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-ERR520">${err520[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${err520[i]}</p>`
            }
        }
        beepbeepFunction();
    }

    else if(resString.length > 8){
        pullDownScreens();
        for (let i = 0; i < err540.length; i++){
            if (err540[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-ERR510">${err540[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${err540[i]}</p>`
            }
        }
        beepbeepFunction();
    }

    else if (screensInUse[0] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[0] = true;
        screensInUse[4] = false;
    }
    else if (screensInUse[1] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[1] = true;
    }
    else if (screensInUse[2] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[2] = true;
    }
    else if (screensInUse[3] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[3] = true;
    }
    else if (screensInUse[4] == false){
        pullDownScreens();
        for (let i = 0; i < resString.length; i++){
            if (resString[i] == 1){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-1">${resString[i]}</p>`
            }
            else if (resString[i] == 7){
                resultScreen1.innerHTML += `<p class="tipping-on tipping-on-7">${resString[i]}</p>`
            }
            else{
                resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            }
        }
        screensInUse[4] = true;
        screensInUse[0] = false;
        screensInUse[1] = false;
        screensInUse[2] = false;
        screensInUse[3] = false;
    }
    verifyTippingOnOff();
}

const pullDownScreens = ()=>{
    resultScreen5.innerHTML = resultScreen4.innerHTML;
    resultScreen4.innerHTML = ``;
    resultScreen4.innerHTML = resultScreen3.innerHTML;
    resultScreen3.innerHTML = ``;
    resultScreen3.innerHTML = resultScreen2.innerHTML;
    resultScreen2.innerHTML = ``;
    resultScreen2.innerHTML = resultScreen1.innerHTML;
    resultScreen1.innerHTML = ``;
}

//- - - - - - - - - - - - - - - SAVE RESULTS - - - - - - - - - - - - - - -//

let saveResults = [false,false,false,false,false];

const saveResult = (res)=>{
    pullDownResults();
    if (saveResults[0] == false){
        saveResults[0] = res;
    }
    else if (saveResults[1] == false){
    pullDownResults();
        saveResults[1] = saveResults[0];
        saveResults[1] = res;
    }
    else if (saveResults[2] == false){
    pullDownResults();
        saveResults[2] = saveResults[1];
        saveResults[2] = res;
    }
    else if (saveResults[3] == false){
    pullDownResults();
        saveResults[3] = saveResults[2];
        saveResults[3] = res;
    }
    else if (saveResults[4] == false){
    pullDownResults();
        saveResults[4] = saveResults[3];
        saveResults[4] = res;
    }
}

const pullDownResults = () =>{
    saveResults[4] = false;
    saveResults[4] = saveResults[3];
    saveResults[3] = false;
    saveResults[3] = saveResults[2];
    saveResults[2] = false;
    saveResults[2] = saveResults[1];
    saveResults[1] = false;
    saveResults[1] = saveResults[0];
    saveResults[0] = false;
}

//- - - - - - - - - - - - - - - BOTÓN DEL - - - - - - - - - - - - - - -//

const buttonDEL = document.querySelector(".button-delete");

buttonDEL.addEventListener("click",()=>{

    if (VOLon == 1){
        squareClick = new Audio ("audio/square.mp3");
        squareClick.play();
    };

    mainScreen.innerHTML = ``
    actualValue = [``,``,``];
    OPcount = ``
    arrowsButtons.forEach(arrow => {
        arrow.style.display = `none`
    })
    countPowRoot = 1;
    screenRoot.innerHTML = ``;
    screenPower.innerHTML = ``;

    verifyTippingOnOff();
})

//- - - - - - - - - - - - - - - BOTÓNES TAKE - - - - - - - - - - - - - - -//

const takeButtons = document.querySelectorAll(".button-take");

takeButtons.forEach(buttonTK => {
    buttonTK.addEventListener("click",()=>{

        if (VOLon == 1){
            TKClick = new Audio ("audio/TK.mp3");
            TKClick.play();
        };

        if(mainScreen.innerHTML[22] == `E` || mainScreen.innerHTML[49] == `E` || mainScreen.innerHTML[73] == `E`){
            mainScreen.innerHTML= ``
            actualValue = [``,``,``];
        }

        else if (buttonTK.value == 1){
            let saveResultsString = saveResults[0].toString()

            if (saveResults[0] == false){
                return
            }
            else if (saveResults[0] == Infinity || saveResults[0] == "N" || isNaN(saveResults[0])){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[0];
                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[0]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if(actualValue[0] == `` && actualValue[1] == `√`){
                actualValue[2] += saveResults[0]
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[0]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[0]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[0]
            }
            for (let i = 0; saveResultsString.length > i ; i++){
                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }



        else if (buttonTK.value == 2){
            let saveResultsString = saveResults[1].toString()
            if (saveResults[1] == false){
                return 
            }
            else if (saveResults[1] == Infinity || saveResults[1] == "N"){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[1]

                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[1]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[1]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[1]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[1]
            }
            for (let i = 0; saveResultsString.length > i ; i++){

                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }



        else if (buttonTK.value == 3){
            let saveResultsString = saveResults[2].toString()
            if (saveResults[2] == false){
                return 
            }
            else if (saveResults[2] == Infinity || saveResults[2] == "N"){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[2]

                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[2]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[2]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[2]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[2]
            }
            for (let i = 0; saveResultsString.length > i ; i++){
                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }



        else if (buttonTK.value == 4){
            let saveResultsString = saveResults[3].toString()
            if (saveResults[3] == false){
                return 
            }
            else if (saveResults[3] == Infinity || saveResults[3] == "N"){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[3]

                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[3]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[3]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[3]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[3]
            }
            for (let i = 0; saveResultsString.length > i ; i++){
                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }



        else if (buttonTK.value == 5){
            let saveResultsString = saveResults[4].toString()
            if (saveResults[4] == false){
                return 
            }
            else if (saveResults[4] == Infinity || saveResults[4] == "N"){
                return 
            }
            else if(actualValue[0] != `` && actualValue[1] == `^`  && actualValue[2] != `` || actualValue[1] == `^`  && actualValue[2] == ``){
                actualValue[2] += saveResults[4]

                mainScreen.innerHTML = ``
    
                let actualValue0String = `${actualValue[2]}`
    
                for(let i = 0; i < actualValue0String.length; i++){
                    if( actualValue0String[i] == 1){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                    }
                    else if( actualValue0String[i] == 7){
                        mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                    }
                    else {
                        mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                    }
                }
                mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                verifyLength();
                verifyTippingOnOff();
                return
            }
            else if (actualValue[0] == `` && actualValue[1] == `^`){

                actualValue[2] += saveResults[4]

                    mainScreen.innerHTML = ``
        
                    let actualValue0String = `${actualValue[2]}`
        
                    for(let i = 0; i < actualValue0String.length; i++){
                        if( actualValue0String[i] == 1){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${actualValue0String[i]}</p>`
                        }
                        else if( actualValue0String[i] == 7){
                            mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${actualValue0String[i]}</p>`
                        }
                        else {
                            mainScreen.innerHTML += `<p class="tipping-on">${actualValue0String[i]}</p>`
                        }
                    }
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on--power-sign">^</p>`
                    verifyLength();
                    verifyTippingOnOff();
                    return
            }
            else if (actualValue[0] == `` && actualValue[1] != ``){
                actualValue[2] += saveResults[4]
            }
            else if (actualValue[0] == `` || actualValue[1] == ``){
                actualValue[0] += saveResults[4]
            }
            else if (actualValue[0] != ``){
                actualValue[2] += saveResults[4]
            }
            for (let i = 0; saveResultsString.length > i ; i++){
                if (saveResultsString[i] == 1){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${saveResultsString[i]}</p>`
                }
                else if (saveResultsString[i] == 7){
                    mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${saveResultsString[i]}</p>`
                }
                else{
                    mainScreen.innerHTML += `<p class="tipping-on">${saveResultsString[i]}</p>`
                }
            }
        }
        verifyLength();
        verifyTippingOnOff();
    })
})

//- - - - - - - - - - - - - COMPROBAR LARGO PANTALLA MAIN - - - - - - - - - - - - -//

const verifyLength = ()=>{
    let actualValueString = `${actualValue[0]}${actualValue[1]}${actualValue[2]}`

    if (actualValueString.length >= 11){
        mainScreen.innerHTML = ``
        actualValue = [``,``,``];
        for(let i = 0; i < err500.length; i++){
            mainScreen.innerHTML += `<p class="tipping-on">${err500[i]}</p>`
        }
        arrowsButtons.forEach(arrow => {
            arrow.style.display = `none`
        })
        screenRoot.innerHTML = ``;
        screenPower.innerHTML = ``;

        countPowRoot = 1;
        verifyTippingOnOff();

        beepbeepFunction();
    }
}

//- - - - - - - - - - - COMPROBAR NUM OPERADORES - - - - - - - - - - -//

const verifyOP = () => {

    OPcount = actualValue[1]

    if (OPcount.length > 1){
        mainScreen.innerHTML = ``;
        actualValue = [``,``,``];
        OPcount = ``;
        for(let i = 0; i < err530.length; i++){
            mainScreen.innerHTML += `<p class="tipping-on">${err530[i]}</p>`
        };
        arrowsButtons.forEach(arrow => {
            arrow.style.display = `none`
        });
        screenRoot.innerHTML = ``;
        screenPower.innerHTML = ``;
        countPowRoot = 1
        verifyTippingOnOff();

        beepbeepFunction();
    }
}

//- - - - - - - - - - AMBOS BOTONES DE ABAJO (LOS ROTATORIOS) - - - - - - - - -//

const arrowsButtons = document.querySelectorAll(".arrows-buttons");

//- - - - - - - - - - AMBOS BOTONES ROTATORIOS ABAJO (CONTENEDORES) - - - - - - - - -//

const containersRotaryLower = document.querySelectorAll(".rotary-button2-container");
containersRotaryLower.forEach(containerRotaryLower=>{
    containerRotaryLower.addEventListener("click",()=>{
        if (VOLon == 1 && screenPower.innerHTML == `` && screenRoot.innerHTML == ``){
            rotaryLowerClick = new Audio("audio/rotaryLower.mp3");
            rotaryLowerClick.play()
        }
    })
})

//- - - - - - - - - - BOTÓN POTÉNCIA - - - - - - - - -//

const powerButton = document.querySelector(".button-op-advanced--power");
const screenPower = document.querySelector(".power-tipping-container");
screenPower.innerHTML = ``

const arrowsPower = document.querySelectorAll(".arrows-p");

let countPowRoot = 1

powerButton.addEventListener("click",()=>{


    if(mainScreen.innerHTML[49] == `E` || mainScreen.innerHTML[73] == `E`){
        mainScreen.innerHTML= ``
        actualValue = [``,``,``];
    }

    else if (actualValue[1] == `^`){

        actualValue[0] = countPowRoot

        arrowsPower.forEach(arrowP => {
            arrowP.style.display = "block"
        })
        if (countPowRoot < 10 && countPowRoot > 0){
            let countPowRootString = countPowRoot.toString();
            screenPower.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString}</p>`
        }
        else if(countPowRoot >= 10 && countPowRoot < 100){
            let countPowRootString = countPowRoot.toString();
            screenPower.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
        }
        else{
            screenPower.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
        }
    }
    verifyTippingOnOff();
})

arrowsPower.forEach(arrowP => {
    arrowP.addEventListener("click",()=>{

        if (VOLon == 1){
            rotaryLowerClick = new Audio ("audio/rotaryLower.mp3");
            rotaryLowerClick.play();
        };

        if (arrowP.innerHTML == 1){

            if(countPowRoot > 1){
                countPowRoot --;
                actualValue[0] = countPowRoot;
                let countPowRootString = countPowRoot.toString();
                if(countPowRoot < 10){
                    screenPower.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString[0]}</p>`
                }
                else{
                    screenPower.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
                }
            }
            else{
                screenPower.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
            }
        }

        else if (arrowP.innerHTML == 2){

            if(countPowRoot < 99){
                countPowRoot ++
                actualValue[0] = countPowRoot
                let countPowRootString = countPowRoot.toString()
                if(countPowRoot < 10){
                    screenPower.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString[0]}</p>`
                }
                else{
                    screenPower.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
                }
            }
            else{
                screenPower.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
            }
        }
        verifyTippingOnOff();
    })
})

//- - - - - - - - - - BOTÓN RAÍZ - - - - - - - - -//

const rootButton = document.querySelector(".button-op-advanced--root");
const screenRoot = document.querySelector(".root-tipping-container");
screenRoot.innerHTML = ``

const arrowsRoot = document.querySelectorAll(".arrows-r");

rootButton.addEventListener("click",()=>{

    if(mainScreen.innerHTML[49] == `E` || mainScreen.innerHTML[73] == `E`){
        mainScreen.innerHTML= ``
        actualValue = [``,``,``];
    }

    else if (actualValue[1] == `√`){

        actualValue[0] = countPowRoot

        arrowsRoot.forEach(arrowR => {
            arrowR.style.display = "block"
        })
        if (countPowRoot < 10){
            let countPowRootString = countPowRoot.toString();
            screenRoot.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString}</p>`
        }
        else if(countPowRoot >= 10 && countPowRoot < 100){
            let countPowRootString = countPowRoot.toString();
            screenRoot.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
        }
        else{
            screenRoot.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
        }
    }
    verifyTippingOnOff();
})

arrowsRoot.forEach(arrowR => {
    arrowR.addEventListener("click",()=>{

        if (VOLon == 1){
            rotaryLowerClick = new Audio ("audio/rotaryLower.mp3");
            rotaryLowerClick.play();
        };

        if (arrowR.innerHTML == 1){

            if(countPowRoot > 1){
                countPowRoot --;
                actualValue[0] = countPowRoot;
                let countPowRootString = countPowRoot.toString();
                if(countPowRoot < 10){
                    screenRoot.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString[0]}</p>`
                }
                else{
                    screenRoot.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
                }
            }
            else{
                screenRoot.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
            }
        }

        else if (arrowR.innerHTML == 2){

            if(countPowRoot < 99){
                countPowRoot ++;
                actualValue[0] = countPowRoot;
                let countPowRootString = countPowRoot.toString();
                if(countPowRoot < 10){
                    screenRoot.innerHTML = `<p class="tipping-on">0</p> <p class="tipping-on">${countPowRootString[0]}</p>`
                }
                else{
                    screenRoot.innerHTML = `<p class="tipping-on">${countPowRootString[0]}</p> <p class="tipping-on">${countPowRootString[1]}</p>`
                }
            }
            else{
                screenRoot.innerHTML = `<p class="tipping-on">X</p> <p class="tipping-on">X</p>`
            }
        }
        verifyTippingOnOff();
    })
})



//- - - - - - - - - - ELEMENTOS A CAMBIAR A MODO OSCURO - - - - - - - - -//

//- - - - - - - - - - BOTONES, TEXTOS Y BASES - - - - - - - - -//

const basesBasic = document.querySelectorAll(".base-basic");
const basesBasicTK = document.querySelectorAll(".base-basic-buttonTK");

const rotaryButtons2Base = document.querySelectorAll(".rotary-button2--base");
const rotaryButtons2OvalBack = document.querySelectorAll(".oval-back");
const rotaryButtons2OvalMain = document.querySelectorAll(".oval-main");
const rotaryButtons2OvalCenter = document.querySelectorAll(".oval-center");

const rotaryButtons1 = document.querySelectorAll(".rotary-button");

const buttonUpperPanel1 = document.querySelector(".upper-panel--down-button-base-basic--button1");
const buttonUpperPanel2 = document.querySelector(".upper-panel--down-button-base-basic--button2");
const buttonUpperPanelHEX = document.querySelector(".upper-panel--down-button-base-basic--button3");

const textsPanel = document.querySelectorAll(".text-panel");
const upperTextsPanel = document.querySelectorAll(".upper-panel-text");

//- - - - - - - - - - PANTALLAS - - - - - - - - -//

const screensNight = document.querySelectorAll(".screen");

//- - - - - - - - - - PANELES - - - - - - - - -//

const screensMiniContainer = document.querySelectorAll(".mini-screen-container");

const upperPanelUpBorder1 = document.querySelector(".upper-panel--up--border1");
const upperPanelUpBorder2 = document.querySelector(".upper-panel--up--border2");
const upperPanelUp = document.querySelector(".upper-panel--up");
const upperPanelUpLine = document.querySelector(".upper-panel--up--line");
const upperPanelDownBorder1 = document.querySelector(".upper-panel--down--border1");
const upperPanelDownBorder2 = document.querySelector(".upper-panel--down--border2");
const upperPanelDown = document.querySelector(".upper-panel--down");
const upperPanelDownInside = document.querySelector(".upper-panel--down-inside-up");
const upperPanelDownScrewedLid = document.querySelector(".upper-panel--down-screwed-lid");

const lowerPanel = document.querySelector(".lower-panel");
const lowerPanelRight = document.querySelector(".lower-panel--right-panel");
const lowerButtonPanelContainer = document.querySelector(".lower-button-panel-container");
const lowerButtonPanel = document.querySelector(".lower-button-panel");
const mainScreenContainer = document.querySelector(".main-screen--container");
const lowerPanelScreensR = document.querySelector(".lower-panel--screens-r");

const panelSupports = document.querySelectorAll(".panel-support");

//- - - - - - - - - - DETALLES - - - - - - - - -//

const screws = document.querySelectorAll(".screw");




//- - - - - - - - - - BOTÓN BRT - - - - - - - - -//

const BRTbutton = document.querySelector(".rotary-button-brt");

let BRTon = 0
let calculatorBackground = document.querySelector(".section-calculator");

BRTbutton.addEventListener("click",()=>{

    if (VOLon == 1){
        TKClick = new Audio ("audio/TK.mp3");
        TKClick.play();
    }

    if (BRTon == 0){
        
        BRTbutton.style.transform = "rotate(-120deg)";

        //- - - - - - - - - - BOTONES UPPER PANEL - - - - - - - - -//

        buttonUpperPanel1.setAttribute("ID","upper-panel--down-button-base-basic--button1-night");
        buttonUpperPanel2.setAttribute("ID","upper-panel--down-button-base-basic--button2-night");
        buttonUpperPanelHEX.setAttribute("ID","upper-panel--down-button-base-basic--button3-night");

        //- - - - - - - - - - TEXTOS - - - - - - - - -//

        textsPanel.forEach(textPanel => {
            textPanel.classList.add("text-panel-night")
        });

        //- - - - - - - - - - BOTONES CUADRADOS y ENTER - - - - - - - - -//

        botonesNumeros.forEach(boton => {
            boton.classList.add("button-square-night")
        });
        botonesOperadores.forEach(botonOP => {
            botonOP.classList.add("button-square-night")
        });
        buttonDEL.classList.add("button-square-night");
        buttonENTER.classList.add("button-square-night");
        buttonAC.classList.add("button-square-night");

        //- - - - - - - - - - BOTONES TAKE - - - - - - - - -//

        takeButtons.forEach(buttonTK => {
            buttonTK.classList.add("button-take-night")
        });

        //- - - - - - - - - - BASE BOTONES - - - - - - - - -//

        basesBasic.forEach(baseBasic => {
            baseBasic.classList.add("base-basic-night")
        });

        basesBasicTK.forEach(baseBasicTK => {
            baseBasicTK.setAttribute("ID","base-basic-buttonTK-night")
        });

        //- - - - - - - - - - BOTONES ROTATORIOS DERECHA - - - - - - - - -//

        rotaryButtons1.forEach(rotaryButton1 => {
            rotaryButton1.classList.add("rotary-button-night")
        });

        //- - - - - - - - - - BOTONES ROTATORIOS ABAJO - - - - - - - - -//

        rotaryButtons2Base.forEach(rotaryButton2Base => {
            rotaryButton2Base.classList.add("rotary-button2--base-night")
        });

        rotaryButtons2OvalBack.forEach(rotaryButton2OvalBack => {
            rotaryButton2OvalBack.classList.add("oval-back-night")
        });

        rotaryButtons2OvalMain.forEach(rotaryButton2OvalMain => {
            rotaryButton2OvalMain.classList.add("oval-main-night")
        });

        rotaryButtons2OvalCenter.forEach(rotaryButton2OvalCenter => {
            rotaryButton2OvalCenter.classList.add("oval-center-night")
        });

        //- - - - - - - - - - PANTALLAS - - - - - - - - -//

        screensNight.forEach(screenNight => {
            screenNight.classList.add("screen-night")
        });

        //- - - - - - - - - - TODOS LOS PANELES - - - - - - - - -//

        screensMiniContainer.forEach(screenMiniContainer => {
            screenMiniContainer.classList.add("mini-screen-container-night")
        });

        upperPanelUpBorder1.classList.add("upper-panel--up--border1-night");
        upperPanelUpBorder2.classList.add("upper-panel--up--border2-night");
        upperPanelUp.classList.add("upper-panel--up-night");
        upperPanelUpLine.classList.add("upper-panel--up--line-night");
        upperPanelDownBorder1.classList.add("upper-panel--down--border1-night");
        upperPanelDownBorder2.classList.add("upper-panel--down--border2-night");
        upperPanelDown.classList.add("upper-panel--down-night");
        upperPanelDownInside.classList.add("upper-panel--down-inside-up-night");
        upperPanelDownScrewedLid.classList.add("upper-panel--down-screwed-lid-night");

        lowerPanel.classList.add("lower-panel-night");
        lowerPanelRight.classList.add("lower-panel--right-panel-night");
        lowerButtonPanelContainer.classList.add("lower-button-panel-container-night");
        lowerButtonPanel.classList.add("lower-button-panel-night");
        mainScreenContainer.classList.add("main-screen--container-night");
        lowerPanelScreensR.classList.add("lower-panel--screens-r-night");

        panelSupports.forEach(panelSupport => {
            panelSupport.classList.add("panel-support-night")
        });

        //- - - - - - - - - - DETALLES - - - - - - - - -//

        screws.forEach(screw => {
            screw.classList.add("screw-night")
        });

        BRTon = 1
    }
    else{

        BRTbutton.style.transform = "rotate(-45deg)";

        //- - - - - - - - - - BOTONES UPPER PANEL - - - - - - - - -//

        buttonUpperPanel1.removeAttribute("ID","upper-panel--down-button-base-basic--button1-night");
        buttonUpperPanel2.removeAttribute("ID","upper-panel--down-button-base-basic--button2-night");
        buttonUpperPanelHEX.removeAttribute("ID","upper-panel--down-button-base-basic--button3-night");

        //- - - - - - - - - - TEXTOS - - - - - - - - -//

        textsPanel.forEach(textPanel => {
            textPanel.classList.remove("text-panel-night")
        });

        //- - - - - - - - - - BOTONES CUADRADOS y ENTER - - - - - - - - -//

        botonesNumeros.forEach(boton => {
            boton.classList.remove("button-square-night")
        });
        botonesOperadores.forEach(botonOP => {
            botonOP.classList.remove("button-square-night")
        });
        buttonDEL.classList.remove("button-square-night");
        buttonENTER.classList.remove("button-square-night");
        buttonAC.classList.remove("button-square-night");

        //- - - - - - - - - - BOTONES TAKE - - - - - - - - -//

        takeButtons.forEach(buttonTK => {
            buttonTK.classList.remove("button-take-night")
        });

        //- - - - - - - - - - BASE BOTONES - - - - - - - - -//

        basesBasic.forEach(baseBasic => {
            baseBasic.classList.remove("base-basic-night")
        });

        //- - - - - - - - - - BOTONES ROTATORIOS DERECHA - - - - - - - - -//

        rotaryButtons1.forEach(rotaryButton1 => {
            rotaryButton1.classList.remove("rotary-button-night")
        });

        basesBasicTK.forEach(baseBasicTK => {
            baseBasicTK.removeAttribute("ID","base-basic-buttonTK-night")
        });

        //- - - - - - - - - - BOTONES ROTATORIOS ABAJO - - - - - - - - -//

        rotaryButtons2Base.forEach(rotaryButton2Base => {
            rotaryButton2Base.classList.remove("rotary-button2--base-night")
        });

        rotaryButtons2OvalBack.forEach(rotaryButton2OvalBack => {
            rotaryButton2OvalBack.classList.remove("oval-back-night")
        });

        rotaryButtons2OvalMain.forEach(rotaryButton2OvalMain => {
            rotaryButton2OvalMain.classList.remove("oval-main-night")
        });

        rotaryButtons2OvalCenter.forEach(rotaryButton2OvalCenter => {
            rotaryButton2OvalCenter.classList.remove("oval-center-night")
        });

        //- - - - - - - - - - PANTALLAS - - - - - - - - -//

        screensNight.forEach(screenNight => {
            screenNight.classList.remove("screen-night")
        });

        //- - - - - - - - - - TODOS LOS PANELES - - - - - - - - -//

        screensMiniContainer.forEach(screenMiniContainer => {
            screenMiniContainer.classList.remove("mini-screen-container-night")
        });      
        
        upperPanelUpBorder1.classList.remove("upper-panel--up--border1-night");
        upperPanelUpBorder2.classList.remove("upper-panel--up--border2-night");
        upperPanelUp.classList.remove("upper-panel--up-night");
        upperPanelUpLine.classList.remove("upper-panel--up--line-night");
        upperPanelDownBorder1.classList.remove("upper-panel--down--border1-night");
        upperPanelDownBorder2.classList.remove("upper-panel--down--border2-night");
        upperPanelDown.classList.remove("upper-panel--down-night");
        upperPanelDownInside.classList.remove("upper-panel--down-inside-up-night");
        upperPanelDownScrewedLid.classList.remove("upper-panel--down-screwed-lid-night");

        lowerPanel.classList.remove("lower-panel-night");
        lowerPanelRight.classList.remove("lower-panel--right-panel-night");
        lowerButtonPanelContainer.classList.remove("lower-button-panel-container-night");
        lowerButtonPanel.classList.remove("lower-button-panel-night");
        mainScreenContainer.classList.remove("main-screen--container-night");
        lowerPanelScreensR.classList.remove("lower-panel--screens-r-night");

        panelSupports.forEach(panelSupport => {
            panelSupport.classList.remove("panel-support-night")
        })

        //- - - - - - - - - - DETALLES - - - - - - - - -//

        screws.forEach(screw => {
            screw.classList.remove("screw-night")
        });

        BRTon = 0
    }
    verifyTippingOnOff();
})

const verifyTippingOnOff = () => {

    if (BRTon == 1){
        let tippingsOn = document.querySelectorAll(".tipping-on")
        tippingsOn.forEach(t => {
            t.style.textShadow =  `0 0 3px rgb(47, 255, 75)`
        })
    }
    else{
        let tippingsOn = document.querySelectorAll(".tipping-on")
        tippingsOn.forEach(t => {
            t.style.textShadow =  `none`
        })
    }
}

//- - - - - - - - - - BOTÓN VOL - - - - - - - - -//

const VOLbutton = document.querySelector(".rotary-button-vol");

let VOLon = 0;

VOLbutton.addEventListener("click",()=>{

    TKClick = new Audio ("audio/TK.mp3");
    TKClick.play();

    if (VOLon == 0){
        VOLbutton.style.transform = "rotate(-120deg)";
        VOLon = 1
        comm.play()
    }
    else{
        VOLbutton.style.transform = "rotate(-45deg)";
        VOLon = 0
        comm.pause()
    }
});

// AUDIOS //

let comm = new Audio("audio/comm.mp3");
let beep = new Audio("audio/beep.mp3");
let beepbeep = new Audio("audio/beepbeep.mp3");

let ENTClick = new Audio("audio/ENT.mp3");
let squareClick = new Audio("audio/square.mp3")
let TKClick = new Audio ("audio/TK.mp3");
let rotaryLowerClick = new Audio ("audio/rotaryLower.mp3");

let beepIsOn = false

const beepFunction = ()=> {
    if (VOLon == 0){
        buttonUpperPanel2.classList.add("beep-on");
        setTimeout(() => {
            buttonUpperPanel2.classList.remove("beep-on");
        }, 200);
    }
    else{
        beep.play()
        buttonUpperPanel2.classList.add("beep-on");
        setTimeout(() => {
            buttonUpperPanel2.classList.remove("beep-on");
        }, 200);
    }

}

const beepbeepFunction = ()=> {
    if (VOLon == 0){
        buttonUpperPanel1.classList.add("beepbeep-on");
        setTimeout(() => {
            buttonUpperPanel1.classList.remove("beepbeep-on");
        }, 1500);
    }
    else{
        beepbeep.play()
        buttonUpperPanel1.classList.add("beepbeep-on");
        setTimeout(() => {
            buttonUpperPanel1.classList.remove("beepbeep-on");
        }, 1500);
    }
}

addEventListener("visibilitychange",(e)=>{
    VOLbutton.style.transform = "rotate(-45deg)";
    VOLon = 0
    comm.pause();
})