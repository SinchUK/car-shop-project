const validateEmail = (e) => {
    console.log(e.target);
    const email = document.querySelector('#email');
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log(email.value);
        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus();
            return false;
        }
        else {
            alert("Thanks for your interest in us, Now you will be able to receive monthly updates from us.");
            document.getElementById('txtEmailId').value = "";
        }
};


export default validateEmail;



//    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//    const input = document.querySelector(inputText);
//    if(inputText.value.match(mailformat)) {
//        console.log("Valid email address!");
//        document.form1.text1.focus();
//        return true;
//    } else {
//        console.log("You have entered an invalid email address!");
//        document.form1.text1.focus();
//        return false;
//    }