'use script'
const form1 = document.querySelector('#form1');
const password1 = document.querySelector('#input-password');
const password2 = document.querySelector('#input-confirm_password');
const btnSubmit = document.querySelector('#btn1_form');


form1.addEventListener('submit', function (e) {
    if (password1 !== password2) {        
        e.preventDefault(); // Prevent form submission
        password1.classList.add('error'); // Add error class to password1 input    
        password2.classList.add('error'); // Add error class to password2 input        
        
    }

    setTimeout(function () {
      password1.classList.remove('error');
    }, 500);

      setTimeout(function () {
      password2.classList.remove('error');
    }, 500);
})
   


