


// Select all the buttons from the parent selector.
const keys = document.querySelector('.btns_container');
const display = document.querySelector('.display');

// On click get the key.
keys.addEventListener('click', event=>{
    // If it's not the button, don't do nothing.
    if (!event.target.closest('button')) return;

    const key = event.target;
    const keyValue = key.textContent;

    displayValue = display.textContent;

    if (displayValue === '0') {
        display.textContent = keyValue;
    }else{
        display.textContent = displayValue + keyValue;
    }
});
