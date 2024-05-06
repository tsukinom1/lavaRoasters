//объявляем элементы формы
const emailMailing = document.getElementById("emailMailing");
const buttonMailing = document.getElementById("buttonMailing");

buttonMailing.addEventListener("click", (event) => {
    event.preventDefault();
    if(emailMailing.value.indexOf('@gmail.com') !== -1){
        emailMailing.style.borderColor = '';
        let found = usersOfLava.find(item => item.email === emailMailing.value);
        if(found){
            alert('Вы успешно зарегистрировались на рассылку');
            emailMailing.value = '';
        }
        else alert(`Пользователь с email ${emailMailing.value} не зарегистрован.`);
    }
    else  {
        emailMailing.style.borderColor = 'red';
        alert('Пожалуйста, введите корректную почту');
    }
})