const loginButton = document.querySelector('.login');

loginButton.addEventListener('click', function aalert(){
    const email = document.querySelector('.for-email');
    const password = document.querySelector('.for-password');
    const labelEmail = document.querySelector('.label-email');
    const labelPassword = document.querySelector('.label-password');
    console.log(`Email: "${email.value.trim()}", Password: "${password.value.trim()}"`);
    if(email.value.trim() === ' ' || password.value.trim() === ' '){
        alert('Fields cannot be empty');
    }else{
        alert(`Email = ${email.value} and password = ${password.value} is valid and successfully logged in`);
    }

    })