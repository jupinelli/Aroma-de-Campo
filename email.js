
function sendMail(params){
    var tempParams = {
        formName:document.getElementById("formName").value,
        phoneNumber:document.getElementById("phoneNumber").value,
        message:document.getElementById("message").value,
        formEmail:document.getElementById("formEmail").value,
        fechaIn:document.getElementById("fechaIn").value,
        fechaOut:document.getElementById("fechaOut").value,

    };

    emailjs.send(`gmail`,`template_nuc679u`,tempParams)
    .then(function(res){
        console.log("secces",res.status);
        formName.value = ""
        phoneNumber.value = ""
        message.value = ""
        formEmail.value = ""
        fechaIn.value = ""
        fechaOut.value = ""

    })
}