const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

let is_caps = false;

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
        else if (keyValue === "CapsLock")
        {
            is_caps = !is_caps;
            if (is_caps)
            {
                key.style.borderColor = 'lightgreen';    
            }
            else
            {
                key.style.borderColor = '';    
            }
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
            if (!is_caps)
            {
                display.textContent += keyValue.toLocaleLowerCase();
            }
            else
            {
                display.textContent += keyValue;
            }
        }
    });
});
