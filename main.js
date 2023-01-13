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
    if (operator === '%')
        return divide(a,b);
    else if(operator === 'X')
        return multiply(a,b);
    else if(operator === '+')
        return add(a,b);
    else if(operator === '-')
        return subtract(a,b);
    else if(operator === null)
        return 'Error';
}

function populateDisplay(displayNo)
{
    const display = document.querySelector("#display");
    display.textContent = displayNo;
}

//testing 4 function
populateDisplay(0);



let firstNumber;
const container = document.querySelector('#calcContainer')
const buttons = container.getElementsByClassName("btn");
let last = 0;
let curr;
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
    //vvvvv What's left for this function vvvvv
    //      Need to round decimal to 2 places ONLY IF its too long.
    //      Need to clear number on button press if operation already happened
    //      Need to clear the 0 appended to the start of the calculator.
    if (currNo === 'C')
    {
        last = 0;
        currentOp = 0;
        stored = 0;
        isOperating = false;
        return 0;
    }
    else if ((currNo === 'X') || (currNo ==='%') || (currNo ==='-')  || (currNo ==='+'))
    {
        if (operating === true)
        {
            stored = operate(currentOp, parseInt(stored), parseInt(lastNo));
            currentOp = currNo;
            last = 0;
            return stored;
        }
        else if (operating === false)
        {
            stored = last;
            last = 0;
            isOperating = true;
            currentOp = currNo;
            return currNo;
        }
    }
    else if (currNo === '=')
    {
        if (operating === false)
        {
            last = 0;
            stored = 0;
            currentOp = null;
            return 'Error'
        }
        last = operate(currentOp, parseFloat(stored), parseFloat(lastNo))
        isOperating = false;
        return last;
    }
    else if (currNo === '.')
    {
        if (parseFloat(last) % 1 != 0)
        {
            last = 0;
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
