const form = document.getElementById('form');
const username = document.getElementById('name');
const emailof = document.getElementById('email');
const number = document.getElementById('phone');
const date = document.getElementById('date');
const close = document.querySelector('.close');
const required = document.querySelector('.error');

close.addEventListener('click', function () {
    document.querySelector('.errorMessagename').style.visibility = 'hidden';
});
username.addEventListener('click', function () {
    document.getElementById('name').style.backgroundColor = '#ffffff';
    document.getElementById('error').style.visibility = 'hidden';
})



form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

// function myFunction() {
//     document.getElementById('email').placeholder = 'fdfdfdf';
// }
// emailof.addEventListener('click', myFunction());





function checkInputs() {
    // get the value from inputs
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const numbervalue = number.value.trim();
    const datevalue = date.value;

    if (usernamevalue === '') {
        //show error
        //add error class
        setErrorFor(username);
    } else if (emailvalue === '') {
        setErrorFor(email);
    } else if (numbervalue === '') {
        setErrorFor(number);
    } else if (datevalue === '') {
        setErrorFor(date);
    } else {
        setSuccessFor(username);

    }
}

function setErrorFor(input) {
    document.querySelector('.errorMessagename').style.visibility = "visible";
    document.getElementById('name').style.backgroundColor = "#ffefef";





}
