// Random Number 
function getPinNum() {
    const randomNum = Math.random() * 100000;
    const pin = (randomNum + '').split('.')[0];

    if (pin.length === 5) {
        return pin
    }
    else {
        return getPinNum();
    }
}
// Display Random Num 

function generatePin() {
    const InputNum = document.getElementById("Pin-Num");
    InputNum.value = getPinNum();
}

// handle Calculator Button Handler 

const btnContainer = document.getElementById("Number-container");
btnContainer.addEventListener("click", (e) => {
    const Num = e.target.innerText;

    if (isNaN(Num)) {
        if (Num === "C") {
            const typedInput = document.getElementById("display-pin");
            typedInput.value = "";
        }
    }

    else {
        const typedInput = document.getElementById("display-pin");
        typedInput.value = typedInput.value + Num;
    }

})

function matchPin() {
    const generatePin = document.getElementById("Pin-Num").value;
    const typedPin = document.getElementById("display-pin").value;

    if (generatePin === typedPin) {
        pinMatchResult("block", "none");
    }

    else {
        pinMatchResult("none", "block")
    }

}

function pinMatchResult(match, NonMacth) {
    const matchPin = document.getElementById("Match");
    matchPin.style.display = match;
    const NonmatchPin = document.getElementById("Non-Match");
    NonmatchPin.style.display = NonMacth;

}