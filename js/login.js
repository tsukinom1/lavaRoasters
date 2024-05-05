
//форм для окна входа
const formLogin = document.getElementById('formLogin');

//поля входа
const emailLogin = document.getElementById('emailLogin')
const passwordLogin = document.getElementById('passwordLogin')

// аватарка
const profile = document.getElementById('profile');

//кнопка для открытия окна входа
const login = document.getElementById('login');
login.addEventListener('click', e => {
    e.preventDefault();
    formLogin.style.display = 'flex';
    document.body.classList.add('scroll-lock');
})
//кнопка для перехода на страницу регистрации
const createAccount = document.getElementById('createAccount');
createAccount.addEventListener('click', e => {
    e.preventDefault();
    formLogin.style.display = 'none';
    formSignup.style.display = 'flex';
})

//кнопка закрытия
const closeLogin = document.getElementById('closeLogin');
closeLogin.addEventListener('click', e => {
    e.preventDefault();
    formLogin.style.display = 'none';
    document.body.classList.remove('scroll-lock');
})
//показать пароль при входе
const checkboxLogin = document.getElementById('checkboxLogin');
checkboxLogin.addEventListener('click', e => {
    if(e.target.checked){
        passwordLogin.type = 'text';
    } else  {
        passwordLogin.type = 'password';
    }
})
// кнопка для входа в аккаунт
const buttonLogin = document.getElementById("buttonLogin");
buttonLogin.addEventListener('click', e => {
    e.preventDefault();
    if (emailLogin.value.indexOf('@gmail.com') === -1) {
        emailLogin.style.borderColor = 'red';
    } else {
        emailLogin.style.borderColor = '';
    }
    if (passwordLogin.value.length < 8) {
        passwordLogin.style.borderColor = 'red';
    } else {
        passwordLogin.style.borderColor = '';
    }

    if (emailLogin.value.indexOf('@gmail.com') !== -1 && passwordLogin.value.length >= 8) {
        let found = usersOfLava.find(item => item.email === emailLogin.value && item.password === passwordLogin.value);
        if (found) {
            profile.setAttribute('src','images/icons/user.png');
            alert(`welcome back, ${emailLogin.value}`);
            emailLogin.value = '';
            passwordLogin.value = '';
            formLogin.style.display = 'none';
            document.body.classList.remove('scroll-lock');
        }
        else {
            alert('Please enter a correct data');
        }
    }
})

AOS.init();
