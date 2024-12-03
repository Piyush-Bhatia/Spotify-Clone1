const loginButton = document.querySelector('.login');

loginButton.addEventListener('click', function aalert(){
    const email = document.querySelector('.for-email');
    const password = document.querySelector('.for-password');
    const emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    const labelEmail = document.querySelector('.label-email');
    const labelPassword = document.querySelector('.label-password');
    console.log(`Email: "${email.value.trim()}", Password: "${password.value.trim()}"`);
    if(email.value.trim() === '' || password.value.trim() === ''){
        alert('Fields cannot be empty');
        email.style.border = '2px solid red';
        password.style.border = '2px solid red';
    }else{
        if(email.match(emailPattern) && password.match(passwordPattern)){
            alert(`Email = ${email.value} and password = ${password.value} is valid and successfully logged in`);
        }
        else {
            if(email.match(!emailPattern)){
                alert('incorrect email');
            }
            else{
                alert("incorrect password");
            }
        }
    }

})