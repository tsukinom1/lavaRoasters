let usersOfLava = JSON.parse(localStorage.getItem('UsersOfLava')) || [];

//поля регистрации
const emailSignup = document.getElementById('emailSignup')
const passwordSignup = document.getElementById('passwordSignup')

//кнопки для регистрации
// форма регистрации

const formSignup = document.getElementById("formSignup");
const buttonBack = document.getElementById("buttonBack");

buttonBack.addEventListener("click", (e) => {
    e.preventDefault();
    formSignup.style.display = "none";
    formLogin.style.display = "flex";
})
//кнопка закрытия
const closeSignup = document.getElementById('closeSignup');
closeSignup.addEventListener('click', e => {
    e.preventDefault();
    formSignup.style.display = 'none';
    document.body.classList.remove('scroll-lock');
})
//кнопка регистрации
const buttonSignup = document.getElementById("buttonSignup");
//регистрация
buttonSignup.addEventListener("click", (e) => {
    e.preventDefault();
    if (emailSignup.value.indexOf('@gmail.com') === -1) {
        emailSignup.style.borderColor = 'red';
        alert('Please enter valid email address');
    } else {
        emailSignup.style.borderColor = '';
    }
    if (passwordSignup.value.length < 8) {
        passwordSignup.style.borderColor = 'red';
        alert('The password length must be >= 8');
    } else {
        passwordSignup.style.borderColor = '';
    }

    if (emailSignup.value.indexOf('@gmail.com') !== -1 && passwordSignup.value.length >= 8) {
        let found = usersOfLava.find(item => item.email === emailSignup.value && item.password === passwordSignup.value);
        if (found) {
            alert(`A user with this address already exists`);
        } else {
            usersOfLava.push({email: emailSignup.value, password: passwordSignup.value});
            localStorage.setItem('UsersOfLava', JSON.stringify(usersOfLava));
            alert('Data saved successfully');
            formSignup.style.display = 'none';
            formLogin.style.display = 'flex';
        }
    }
})
//кнопка показать пароль в регистрации
const checkboxSignup = document.getElementById("checkboxSignup");
checkboxSignup.addEventListener("click", (e) => {
    if (checkboxSignup.checked) {
        passwordSignup.type = 'text';
    } else {
        passwordSignup.type = 'password';
    }
})