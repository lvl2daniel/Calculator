function add(a, b)
{
    return (a + b);
}

function subtract(a, b)
{
    retrun (a - b);
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
    const container = document.getElementById('calcContainer');
    console.log(container);
    const display = container.getElementById('display');
    console.log(display);
}

//testing 4 function
let i = 0;
for (i = 0; i < 3; i++)
{
    populateDisplay(3);
}