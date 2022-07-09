const form = document.getElementById('form');
const username = document.getElementById('name');
const emailof = document.getElementById('email');
const number = document.getElementById('phone');
const date = document.getElementById('date');
const close = document.querySelector('.close');
const required = document.querySelector('.error');


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
        setErrorFor(emailvalue);
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


const usernamevalue = username.value.trim();
const emailvalue = email.value.trim();
const numbervalue = number.value.trim();
const birthDate = date.value.trim();




form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let number = document.getElementById('phone').value
    let dateOfbirth = document.getElementById('date').value

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            username: name,
            emailofUser: email,
            numberOfUser: Number(number),
            userbirthdate: dateOfbirth
        }),
        headers: {
            "Content-Type": "application/json; charset = UTF-8"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })



});





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


