const form = document.getElementById('form');
const username = document.getElementById('name');
const emailof = document.getElementById('email');
const number = document.getElementById('phone');
const date = document.getElementById('date');
const close = document.querySelector('.close');
const required = document.querySelector('.error');
const showAccordion = document.querySelector('.accordeon');
const showSecondAccordion = document.querySelector('.accordeon2')
const showGamers = document.querySelector('.gamers');




const btnacc2 = document.querySelector('.accordeon');
const level = document.querySelector('.accordion');

btnacc2.addEventListener('click', function () {
    level.classList.toggle('hidden');
})




const btnacc = document.querySelector('.accordeon2');
const gamerso = document.querySelector('.gamers');

btnacc.addEventListener('click', function () {
    gamerso.classList.toggle('hidden');
    getResponse();
});


// function checkInputs() {
//     // get the value from inputs
//     const usernamevalue = username.value.trim();
//     const emailvalue = email.value.trim();
//     const numbervalue = Number(number.value.trim());
//     const datevalue = date.value;

//     function setErrorFor(input) {
//         document.querySelector('.errorMessagename').style.visibility = "visible";
//         document.getElementById('name').style.backgroundColor = "#ffefef";

//     }


//     if (usernamevalue === '') {
//         //show error
//         //add error class
//         setErrorFor(username);
//     } else if (emailvalue === '') {
//         setErrorFor(emailvalue);
//     } else if ((numbervalue === '') || (typeof.numbervalue !=== number)) {
//         setErrorFor(number);
//     } else if (datevalue === '') {
//         setErrorFor(date);
//     } else {
//         setSuccessFor(username);

//     }
// }










// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     let name = document.getElementById('name').value
//     let email = document.getElementById('email').value
//     let number = document.getElementById('phone').value
//     let dateOfbirth = document.getElementById('date').value

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//             username: name,
//             emailofUser: email,
//             numberOfUser: Number(number),
//             userbirthdate: dateOfbirth
//         }),
//         headers: {
//             "Content-Type": "application/json; charset = UTF-8"
//         }
//     })
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (data) {
//             console.log(data)
//         })

// })











// function myfunc(event) {
//     event.preventDefault();

//     let usernamevalue = username.value.trim();
//     let emailvalue = email.value.trim();
//     let numbervalue = number.value.trim();
//     let datevalue = date.value;

//     localStorage.setItem('name', usernamevalue);
//     localStorage.setItem('number', numbervalue);
//     localStorage.setItem('email', emailvalue);
// }
// if () {
//     document.getElementById('name').value = localStorage.getItem('name');
// }



// window.onload = function () {
//     if (typeof (Storage) != 'undefined') {
//         document.getElementById('name').value = localStorage.getItem('name');
//         document.getElementById('email').value = localStorage.getItem('email');
//         document.getElementById('phone').value = localStorage.getItem('number');
//     }
// }


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




// window.onbeforeunload = function () {
//     localStorage.setItem(savedusername, username.value());
//     localStorage.setItem(savedemail, emailof.value());
//     localStorage.setItem(savednumber, number.value());
// }

// window.onload = function () {
//     let username = localStorage.getItem(savedusername);
//     let email = localStorage.getItem(savedemail);
//     let number = localStorage.getItem(savednumber);
// }




/* 
check if email match redberry.com

const str = document.getElementById('email').value;
const newstr =str.slice(-12);
if(newstr ==='redberry.com){

*/