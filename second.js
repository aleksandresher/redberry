const form = document.getElementById('form');
const username = document.getElementById('name');
const emailof = document.getElementById('email');
const number = document.getElementById('phone');
const date = document.getElementById('date');
const close = document.querySelector('.close');
const required = document.querySelector('.error');
const showAccordion = document.querySelector('.accordeon');


function checkInputs() {
    // get the value from inputs
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const numbervalue = number.value.trim();
    const datevalue = date.value;

    function setErrorFor(input) {
        document.querySelector('.errorMessagename').style.visibility = "visible";
        document.getElementById('name').style.backgroundColor = "#ffefef";

    }

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

showAccordion.addEventListener('click', function () {
    document.querySelector('.accordion').style.visibility = "visible";
});





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



    // });








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

    async function getResponse() {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos')
        let content = await response.json()
        content = content.splice(0, 5);

        let list = document.querySelector('.post');


        let key;

        for (key in content) {

            list.innerHTML += `    
    <li class='post'>
    <h4>${content[key].title}</h4 >
            <img src='${content[key].url}' class='imgOfgamers'></img>
</li > `

            content[key]
        }

    }
    getResponse();






