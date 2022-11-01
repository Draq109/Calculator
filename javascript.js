function add(val1, val2) { return val1 + val2 };
function sub(val1, val2) { return val1 - val2 };
function multi(val1, val2) { return val1 * val2 };
function div(val1, val2) { return val1 / val2 };

function operator(op, val1, val2) {
    val1 = Number(val1);
    val2 = Number(val2);
    switch (op) {
        case '+': return val1 + val2;
        case '-': return val1 - val2;
        case 'x': return val1 * val2;
        case '÷':{ 
        if (val2 == 0)
            return "Error";
        else 
            return val1 / val2};
        default: return 'Error';
    }
}

const numberBtns = document.querySelectorAll('.num');
const opBtns = document.querySelectorAll('.op');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.dot');
const display = document.querySelector('.display');
let firstNum = null, secondNum = null, op = null, flag = false;

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', () => {
        if (flag) {
            display.textContent = numberBtns[i].textContent;
            flag = false;
        }
        else
            display.textContent = `${display.textContent}${numberBtns[i].textContent}`;
    });
}

for (let i = 0; i < opBtns.length; i++) {
    opBtns[i].addEventListener('click', () => {
        flag = true;
        op = opBtns[i].textContent;
        firstNum = display.textContent;
        for (let j = 0; j < opBtns.length; j++)
            opBtns[j].disabled = true;
    });
}

equalsBtn.addEventListener('click', btn => {
    secondNum = display.textContent;
    display.textContent = operator(op,firstNum,secondNum);
    flag = true;
    for (let j = 0; j < opBtns.length; j++)
            opBtns[j].disabled = false;

})

decimalBtn.addEventListener('click', () => {
    if (!display.textContent.includes('.') && !flag)
        display.textContent = `${display.textContent}.`;
})
