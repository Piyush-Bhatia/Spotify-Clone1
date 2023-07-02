const email = document.querySelector("email");

email.addEventListener('click', emailvalidation);

function emailvalidation(output){
    if(email == ''){
        prompt("Email cannot be left empyt")
    }
}