function add(a, b)
{
    return (a + b);
}

function subtract(a, b)
{
    return (a - b);
}

function multiply(a, b)
{
    return (a * b);
}

function divide(a, b)
{
    return (a / b);
}


function operate(operator, a, b)
{
    if (operator === '/')
        if (divide(a,b) == divide(a,b).toFixed(4))
            return divide(a,b);
        else
            return divide(a,b).toFixed(4);
    else if (operator === 'X')
        if (multiply(a,b) == multiply(a,b).toFixed(4))
            return multiply(a,b);
        else
            return multiply(a,b).toFixed(4);
    else if (operator === '+')
        if (add(a,b) == add(a,b).toFixed(4))
            return add(a,b);
        else
            return add(a,b).toFixed(4);
    else if (operator === '-')
        if (subtract(a,b) == subtract(a,b).toFixed(4))
            return subtract(a,b);
        else
            return subtract(a,b).toFixed(4);
    else if (operator === null)
        return 'Error';
}

function populateDisplay(displayNo)
{
    const display = document.querySelector("#display");
    if (displayNo.length <= 16 || displayNo <= 10000000000000000)
        display.textContent = displayNo;
    else
    {
        display.textContent = 'ERROR';
        last = '';
        currentOp = null;
        stored = 0;
        isOperating = false;
    }
}

populateDisplay(0);



let firstNumber;
const container = document.querySelector('#calcContainer')
const buttons = container.getElementsByClassName("btn");
let last = '';
let justEvaluated = false;
let currentOp;
let stored;
let isOperating = false;
let input;
for (let i = 0; i<buttons.length; i++)
    {
        buttons[i].addEventListener("click", (event) => {
            if (parseInt(event.target.textContent))
            {
                input = parseInt(event.target.textContent);
            }
            else
            {
                input = event.target.textContent;
            }
            populateDisplay(calculate(input, last, isOperating));

        })
    }


function calculate(currNo, lastNo, operating)
{
    if (currNo === 'C')
    {
        last = '';
        currentOp = 0;
        stored = 0;
        isOperating = false;
        return 0;
    }
    else if ((currNo === 'X') || (currNo ==='/') || (currNo ==='-')  || (currNo ==='+'))
    {
        justEvaluated = false;
        if (operating === true)
        {
            stored = operate(currentOp, parseFloat(stored), parseFloat(lastNo));
            currentOp = currNo;
            last = '';
            return stored;
        }
        else if (operating === false)
        {
            stored = last;
            last = '';
            isOperating = true;
            currentOp = currNo;
            return currNo;
        }
    }
    else if (currNo === '=')
    {
        if (operating === false)
        {
            last = '';
            stored = 0;
            currentOp = null;
            return 'Error'
        }
        last = operate(currentOp, parseFloat(stored), parseFloat(lastNo))
        isOperating = false;
        justEvaluated = true;
        return last;
    }
    else if (currNo === '.' && justEvaluated === false)
    {
        if (parseFloat(last + 10) % 1 != 0)
        {
            last = '';
            stored = 0;
            currentOp = null;
            return 'Error'
        }
        else
        {
            last = concat(lastNo, currNo)
            return last;
        }
    }
    else if (justEvaluated === true)
    {
        last = '';
        currentOp = 0;
        stored = 0;
        isOperating = false;
        lastNo = '';
        justEvaluated = false;
        last = currNo;
        return last;
    }
    else
    {
        last = concat(lastNo, currNo)
        return last;
    }
}

function concat(a, b)
{
    return ("" + a + b)
}
