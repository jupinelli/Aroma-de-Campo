
function sendMail(params){
    var tempParams = {
        formName:document.getElementById("formName").value, //lo que esta con "" es el id que tiene el input en html
        phoneNumber:document.getElementById("phoneNumber").value, // el 1er phoneNumber es como esta en el template de emailjs
        message:document.getElementById("message").value,
        formEmail:document.getElementById("formEmail").value,
        fechaIn:document.getElementById("fechaIn").value,
        fechaOut:document.getElementById("fechaOut").value,

    };

    //esta funcion es para que se borre todo cuando apretan en enviar

    emailjs.send(`gmail`,`template_nuc679u`,tempParams) //en el parentesis: (service id, template id, var de arriba)
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