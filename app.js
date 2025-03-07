const form = document.querySelector('#form');
const btnSubmit = document.querySelector('button');

const email = document.querySelector('#inputEmail4');
const password = document.querySelector('#inputPassword4');
const address1 = document.querySelector('#inputAddress');
const address2 = document.querySelector('#inputAddress2');
const city = document.querySelector('#inputCity');
const state = document.querySelector('#inputState');
const zip = document.querySelector('#inputZip');
const checkBox = document.querySelector('#gridCheck');
const miniCheck = document.querySelector('#check');
const pop = document.querySelector('#registered');

//Form Validation & Submission

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();


    document.querySelectorAll('span.text-danger').forEach(span => span.remove());
    // miniCheck.innerHTML = "";
    let checkError = false;

    if (email.value.trim() === "") {
        const span = document.createElement('span');
        span.classList.add('text-danger');
        span.innerText = "Email required*";
        email.parentElement.appendChild(span);
        checkError = true;
    }

    if (password.value.trim() === "") {
        const span2 = document.createElement('span');
        span2.classList.add('text-danger');
        span2.innerText = "Password required*";
        password.parentElement.appendChild(span2);
        checkError = true;
    }

    if (address1.value.trim() === "") {
        const span3 = document.createElement('span');
        span3.classList.add('text-danger');
        span3.innerText = "Address required*";
        address1.parentElement.appendChild(span3);
        checkError = true;
    }

    if (address2.value.trim() === "") {
        const span4 = document.createElement('span');
        span4.classList.add('text-danger');
        span4.innerText = "Address 2 required*";
        address2.parentElement.appendChild(span4);
        checkError = true;
    }
    if (city.value.trim() === "") {
        const span5 = document.createElement('span');
        span5.classList.add('text-danger');
        span5.innerText = "City required*";
        city.parentElement.appendChild(span5);
        checkError = true;
    }
    if (state.value.trim() === "State...") {
        const span6 = document.createElement('span');
        span6.classList.add('text-danger');
        span6.innerText = "State required*";
        state.parentElement.appendChild(span6);
        checkError = true;
    }
    if (zip.value.trim() === "") {
        const span7 = document.createElement('span');
        span7.classList.add('text-danger');
        span7.innerText = "Zip*";
        zip.parentElement.appendChild(span7);
        checkError = true;
    }
    if (!checkBox.checked) {
        miniCheck.classList.add('text-danger');
        miniCheck.innerText = '*';
        checkError = true;
    }
    if (!checkError) {
        form.classList.add('d-none');
        pop.classList.remove('d-none');
    }
});
