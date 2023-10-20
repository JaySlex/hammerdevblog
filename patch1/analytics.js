const page = 4;
const url = "https://script.google.com/macros/s/AKfycbxkIWHe7BTsuyZ79RU56C_vJByZG0loOU4_wZK57eU4mWF4G3gydK0dLUNjlXj6RzQP/exec";
const view = "?function=clicked&page="+page;
const cl = "?function=button&page=";

document.addEventListener("DOMContentLoaded", init);

function init()
{
    fetch(url+view, { method: 'POST'})
    .then(res => res.text())
    .then(rep=>
    {
        console.log(rep);
    });
}
