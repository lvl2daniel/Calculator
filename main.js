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
    else if(operator === '*')
        return multiply(a,b);
    else if(operator === '+')
        return add(a,b);
    else if(operator === '-')
        return subtract(a,b);
}

function populateDisplay(displayNo)
{
    //broken right now
    const display = document.querySelector("#display");
    display.textContent = displayNo;
    console.log(display.textContent);
}

//testing 4 function
populateDisplay(0);



let firstNumber;

const buttons = document.getElementsByTagName('button');
let i = 0;
for (i = 0; i<buttons.length; i++)
    {
        buttons[i].addEventListener("click", (event) => {
            if (buttons[i].textContent.isInteger() !== true)
            {
                
            }

        })
    }
