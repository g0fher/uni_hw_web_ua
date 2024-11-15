const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

console.log(keys);

keys.forEach(key => {
    key.addEventListener('click', () => {
        if (display.textContent == "Print here")
        {
            display.textContent = "";
        }

        const keyValue = key.textContent;

        if (keyValue === 'Enter') 
        {
            display.textContent += "\n";
        }
        else if (keyValue === "")
        {
            display.textContent += " ";
        }
        else if (keyValue === "Backspace")
        {
            display.textContent = display.textContent.slice(0, -1);
        }
        else if (keyValue === "Delete")
        {
            display.textContent = "";
        }
        else if (keyValue === "↑↓")
        {
            if (Math.round(Math.random()))
            {
                display.textContent += "↑";   
            }
            else
            {
                display.textContent += "↓";
            }
        }
        else
        {
            display.textContent += keyValue;
        }
    });
});
