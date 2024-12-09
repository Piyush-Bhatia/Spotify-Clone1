const button = document.querySelector('.next-button');
button.addEventListener('click', function(){
    // const numberCode = document.querySelector('#number-codes');
    const  phoneInput = document.querySelector('.phone-input');
    if(isNaN(phoneInput.value) || phoneInput.value === ''){
        alert('Please enter a valid input.')
        phoneInput.style.border = '2px solid red';
        return;
    }else{
        if(phoneInput.value.length !== 10){
            alert('Number cannot be greater or lesser than 10');
            phoneInput.style.border = '2px solid red';
            return;
        }
        else{
            alert(`${phoneInput.value} is registered successfully`);
        }
    }
})