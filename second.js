const form = document.getElementById('form');
const username = document.getElementById('name');
const emailof = document.getElementById('email');
const number = document.getElementById('phone');
const date = document.getElementById('date');
const close = document.querySelector('.close');
const required = document.querySelector('.error');

// close.addEventListener('click', function () {
//     document.querySelector('.errorMessagename').style.visibility = 'hidden';
// });
// username.addEventListener('click', function () {
//     document.getElementById('name').style.backgroundColor = '#ffffff';
//     document.getElementById('error').style.visibility = 'hidden';
// })



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkInputs();
// });

// // function myFunction() {
// //     document.getElementById('email').placeholder = 'fdfdfdf';
// // }
// // emailof.addEventListener('click', myFunction());





// function checkInputs() {
//     // get the value from inputs
//     const usernamevalue = username.value.trim();
//     const emailvalue = email.value.trim();
//     const numbervalue = number.value.trim();
//     const datevalue = date.value;

//     if (usernamevalue === '') {
//         //show error
//         //add error class
//         setErrorFor(username);
//     } else if (emailvalue === '') {
//         setErrorFor(emailvalue);
//     } else if (numbervalue === '') {
//         setErrorFor(number);
//     } else if (datevalue === '') {
//         setErrorFor(date);
//     } else {
//         setSuccessFor(username);

//     }
// }

// function setErrorFor(input) {
//     document.querySelector('.errorMessagename').style.visibility = "visible";
//     document.getElementById('name').style.backgroundColor = "#ffefef";


// }

// function myfunc(event) {
//     event.preventDefault();

//     const usernamevalue = username.value.trim();
//     const emailvalue = email.value.trim();
//     const numbervalue = number.value.trim();
//     const datevalue = date.value;

//     localStorage.setItem('name', usernamevalue);
//     localStorage.setItem('number', numbervalue);
//     localStorage.setItem('email', emailvalue);



// }

// const forma = document.getElementById('form');

// forma.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const payload = new FormData(forma);

//     console.log([...payload]);

//     fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: payload,

//         headers: "accept: application/json"

//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// })
const usernamevalue = username.value.trim();
const emailvalue = email.value.trim();
const numbervalue = number.value.trim();

// const data = { usernamevalue, emailvalue, numbervalue };
// const api = 'https://httpbin.org/post'

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// };

// const response = await fetch('api', options);
// const json = await response.json();
const api = 'https://httpbin.org/post';


const data = { username: usernamevalue };

fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(usernamevalue),
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
