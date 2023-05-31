

var negativos = false;
function incrementar()
{
    counter = document.getElementById("count");
    counter.innerText = parseInt(counter.innerText) + 1; 
}

function decrementar()
{
    counter = document.getElementById("count");
    if(parseInt(counter.innerText) > 0 || negativos == true)
        counter.innerText = parseInt(counter.innerText) - 1; 
}

function reset()
{
    inputNumber = parseInt(document.getElementById("input-number").value);
    if(isNaN(inputNumber))
    {
        inputNumber = 0;
    }
    if(inputNumber >= 0 || negativos == true)
    {
        counter = document.getElementById("count");
        counter.innerText = inputNumber;
    } 
}

function check() 
{
    if (document.getElementById("check").checked) {
        negativos = true;
    } else {
        negativos = false;
        if(parseInt(document.getElementById("count").innerText) < 0)
        {
            document.getElementById("count").innerText = 0;
        }
    }
}