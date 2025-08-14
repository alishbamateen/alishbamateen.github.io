function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("portfolio", "template_towqcsd", parms).then(alert("Email Sent!"))
}