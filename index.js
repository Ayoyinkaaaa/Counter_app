const subscribe = document.getElementById('subcribe');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const paypal = document.getElementById('paypal');
const subresult = document.getElementById('subresult');
const paymentresult = document.getElementById('paymentresult');
const mySubmit = document.getElementById('mySubmit');


subscribe.addEventListener('change', () => {
    subresult.innerHTML = subscribe.checked ? 1 : 0;
});


/* counter */
let counter = 0;
const counterlabel = document.getElementById('counterlabel');
const increasebtn = document.getElementById('increasebtn');
const reset = document.getElementById('reset');
const decreasebtn = document.getElementById('decreasebtn');

increasebtn.addEventListener('click', () => {
    counter++;
    counterlabel.innerHTML = counter;
});

reset.addEventListener('click', () => {
    counter = 0;
    counterlabel.innerHTML = counter;
});

decreasebtn.addEventListener('click', () => {
    counter--;
    counterlabel.innerHTML = counter;
});