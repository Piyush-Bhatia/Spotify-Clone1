const button = document.querySelector('.next-button');
button.addEventListener('click', function(){
    // const numberCode = document.querySelector('#number-codes');
    const  phoneInput = document.querySelector('.phone-input');
    const message = dcoument.querySelector('.message-space');
    if(isNaN(phoneInput.value) || phoneInput.value === ''){
        alert('Please enter a valid input.')
        phoneInput.style.border = '2px solid red';
        return;
    }else{
        if(phoneInput.value.length !== 10){
            message.addClassList('.error') = 'Number cannot be greater or lesser than 10';
            return;
        }
        else{
            alert(`${phoneInput.value} is registered successfully`);
        }
    }
})