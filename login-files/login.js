const loginButton = document.querySelector('.login');

loginButton.addEventListener('click', function(){

    const email = document.querySelector('.for-email');
    const password = document.querySelector('.for-password');
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const dummyUser = {
        emailId : 'piyushbhatia601@gmail.com',
        password : 'Pbhatia@14'
    };
    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    console.log(`Email is ${emailValue} and Password is ${passwordValue}`);
    
    email.style.border = '';
    password.style.border = '';
    
    if(emailValue === '' || passwordValue === ''){
        alert('Fields cannot be empty.')
        if(emailValue === '') email.style.border = '2px solid red';
        if(passwordValue === '') password.style.border = '2px solid red';
        return;
    }
    
    if(!emailPattern.test(emailValue) && emailValue < 8){
        alert('please enter a valid emial address.');
        email.style.border = '2px solid red';
        return;
    }
    if(!passwordPattern.test(passwordValue)){
        alert('please enter a valid password.');
        password.style.border = '2px solid red';
        return;
    }
    
    if(emailValue === dummyUser.emailId && passwordValue === dummyUser.password){
        alert(`Welcome, ${emailValue}!`);
        email.style.border = '2px solid green';
        password.style.border = '2px solid green';
         
    }else{
        alert(`Invalid email or password`);
        email.style.border = '2px solid red';
        password.style.border = '2px solid red';
    }
})

