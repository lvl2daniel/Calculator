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
let i = 0;
let last = 0;
let curr;
let currentOp;
let stored;
let isOperating = false;
let input;
for (i = 0; i<buttons.length; i++)
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


}

function concat(a, b)
{
    return ("" + a + b);
}