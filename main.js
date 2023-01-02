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
let isOperating;
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
    if (currNo === '=' && !operating)
        return lastNo;
    else if (Number.isInteger(currNo))
    {

        let ret = ("" + lastNo + currNo); // Makes string to create new number
        last = parseInt(ret); //Sets last number equal to the string
        console.log("lastNo = " + lastNo);
        console.log("currNo = " + currNo);
        return ret; //Returns the new string

    }
    else if (!Number.isInteger(currNo) && !currentOp)
    {
        stored = parseInt(lastNo);
        last = 0;
        currentOp = currNo.toString();
        isOperating = true;
        console.log("Stored Number : " + stored);
        console.log("Current is " + currentOp)
        console.log("");
        console.log("First input of X ^^")
        console.log("");
        return 'X';
    }
    else if (!Number.isInteger(currNo) && currentOp && isOperating)
    {
        last = operate(currentOp, lastNo, stored);
        console.log("Stored number is " + stored);
        stored = 0;
        currentOp = currNo;
        if(currNo === '=')
        {
            isOperating = false;
            return last;
        }
        (console.log(currentOp));
        console.log("Is it operating? " + isOperating);
        console.log("")
        console.log("")
        console.log("Operating Function Ran ^");
        console.log("");
        console.log("");
        return currentOp;
    }


}
