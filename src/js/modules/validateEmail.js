const validateEmail = (selector) => {

    const email = document.querySelector(selector),
          icon1 = document.querySelector('.input-error'),
          icon2 = document.querySelector('.input-success'),
          errorText = document.querySelector('.error-text'),
          btn = document.querySelector('#subscribe-btn');

    email.onkeydown = function() {
        const regEx = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
        if (regEx.test(email.value)) {
            email.style.borderColor = '#507a36';
            icon1.style.display = 'none';
            icon2.style.display = 'block';
            btn.removeAttribute('disabled');
            errorText.style.display = 'none';
        } else {
            email.style.borderColor = '#df4e3c';
            btn.setAttribute('disabled', true);
            icon1.style.display = 'block';
            icon2.style.display = 'none';
            errorText.style.display = 'block';
        }
    };
};


export default validateEmail;
