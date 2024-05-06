// форма контакта
const formContact = document.getElementById("contactForm");

//поля формы контакта
const nameContact = document.getElementById("nameContact");
const phoneContact = document.getElementById("phoneContact");
const emailContact = document.getElementById("emailContact");
const messageContact = document.getElementById("messageContact");


let messagesOfLava = JSON.parse(localStorage.getItem('messagesOfLava')) || [];


//кнопка отправки
const buttonContact = document.getElementById("buttonContact");
buttonContact.addEventListener("click", (e) => {
    e.preventDefault();
    if (emailContact.value.indexOf('@gmail.com') !== -1 && phoneContact.value.length === 11
        && nameContact.value.length > 0 && messageContact.value.length > 0) {
        let found = usersOfLava.find(item => item.email === emailContact.value);
        if (!found) {
            alert(`Пожалуйста, для начало зарегистрируйтесь по этому email`);
        } else {
            messagesOfLava.push({name: nameContact.value, phone: phoneContact.value, email: emailContact.value, message: messageContact.value});
            localStorage.setItem('messagesOfLava', JSON.stringify(messagesOfLava));
            alert('Мы получили ваше сообщение и скоро ответим вам');
        }
    } else {
        alert('Пожалуйста, введите корректные данные')
    }
})
console.log(usersOfLava);
console.log(messagesOfLava);