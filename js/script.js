

const logInForm = document.getElementById('logInForm')
const signUpForm = document.getElementById('signUpForm')
const inputLogInEmail = document.getElementById('inputLogInEmail')
const inputLogInPassword = document.getElementById('inputLogInPassword')
const inputSignUpEmail = document.getElementById('inputSignUpEmail')
const inputSignUpPassword = document.getElementById('inputSignUpPassword')




const logInCheckbox = document.getElementById('logInCheckbox')
logInCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
        inputLogInPassword.type = 'text'
    } else inputLogInPassword.type = 'password'
})
const signUpCheckbox = document.getElementById('signUpCheckbox')
signUpCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
        inputSignUpPassword.type = 'text'
    } else inputSignUpPassword.type = 'password'
})

let loginData = JSON.parse(localStorage.getItem('loginData')) || [];



const logIn = document.getElementById('logIn')
logIn.addEventListener('click', (e) => {
    e.preventDefault();
    logInForm.style.display = 'flex';
    document.body.classList.add('scroll-lock')
})

const formSignUp = document.getElementById('formSignUp')
formSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    logInForm.style.display = 'none';
    signUpForm.style.display = 'flex';
    document.body.classList.add('scroll-lock');
})

const backForm = document.getElementById('backForm')
backForm.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.style.display = 'none';
    logInForm.style.display = 'flex';
})
const formLogIn = document.getElementById('formLogIn')
const profile = document.getElementById('profile')
formLogIn.addEventListener('click', function login(e)  {
    e.preventDefault();
    if (inputLogInEmail.value.trim() === '' || inputLogInEmail.value.indexOf('@') === -1) {
        inputLogInEmail.style.borderColor = 'red';
    } else inputLogInEmail.style.borderColor = '';
    if (inputLogInPassword.value.trim() === '' || inputLogInPassword.value.length < 8) {
        inputLogInPassword.style.borderColor = 'red';
    } else inputLogInPassword.style.borderColor = '';

    let found = loginData.find(item => item.email === inputLogInEmail.value && item.password === inputLogInPassword.value);
    if (found) {
        alert(`welcome,  ${inputLogInEmail.value}`);
        profile.setAttribute('src', 'images/icons/user.png')
        logInForm.style.display = 'none'
    }
})

function showProfileBlock(e) {
    e.preventDefault();
    let profileBlock = document.createElement('div');
    profileBlock.innerHTML = `
    <ul> 
        <li>icon</li>
        <li>settings</li>
    </ul>
`
    profile.appendChild(profileBlock);
}

const signUpProfile = document.getElementById('signUpProfile')
signUpProfile.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputSignUpEmail.value.trim() === '' || inputSignUpEmail.value.indexOf('@') === -1){
        inputSignUpEmail.style.borderColor = 'red';
    } else inputSignUpEmail.style.borderColor = '';
    if(inputSignUpPassword.value.trim() === '' || inputSignUpPassword.value.length < 8){
        inputSignUpPassword.style.borderColor = 'red';
    } else inputSignUpPassword.style.borderColor = '';

    if((inputSignUpEmail.value.indexOf('@') !== -1) && inputSignUpPassword.value.length >= 8) {
        let found = loginData.find(item => item.email === inputSignUpEmail.value && item.password === inputSignUpPassword.value);
        if (found) {
            alert(`A user with this address already exists`);

        } else {
            loginData.push({email: inputSignUpEmail.value, password: inputSignUpPassword.value});
            localStorage.setItem('loginData', JSON.stringify(loginData));
            inputSignUpEmail.value = '';
            inputSignUpPassword.value = '';
            alert('Data saved successfully');
            signUpForm.style.display = 'none';
            logInForm.style.display = 'flex';
        }
    }
})
console.log(loginData);


