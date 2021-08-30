function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        console.log('shortest value', pin);
        return getPin();
    }
}

function generatePin() {
    const generateBtn = document.getElementById('Displaypin');
    generateBtn.value = getPin();
}

//calculate Button
const typedValue = document.getElementById('calculateEvent');
typedValue.addEventListener('click', function(event) {
        const digit = event.target.innerText;
        if (isNaN(digit)) {
            if (digit == 'C') {
                const typedDigit = document.getElementById('inputTyped');
                typedDigit.value = '';
            }


        } else {
            const typedDigit = document.getElementById('inputTyped');
            typedDigit.value = typedDigit.value + digit;

        }

    })
    //verify pin

function matchPin() {
    const generatePin = document.getElementById('Displaypin').value;
    const typedDigitPin = document.getElementById('inputTyped').value;

    if (generatePin == typedDigitPin) {
        const showRightsPin = document.getElementById('correct');
        showRightsPin.style.display = 'block';
        const showwrongPin = document.getElementById('incorrect');
        showwrongPin.style.display = 'none';
    } else {
        const showwrongPin = document.getElementById('incorrect');
        showwrongPin.style.display = 'block';
        const showRightsPin = document.getElementById('correct');
        showRightsPin.style.display = 'none';
    }
}