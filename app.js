const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('a');

function onLoginsubmit(event) {
    const uservalue = loginInput.value
    event.preventDefault();
    console.log(uservalue);
}

function handle(event) {
    console.dir(event)
    event.preventDefault()
}

loginForm.addEventListener('submit', onLoginsubmit)
link.addEventListener('click', handle)