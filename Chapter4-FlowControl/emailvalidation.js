var email = "livia.com.br"; //clearly is not an e-mail
var arrobaposition = email.indexOf('@');
var pontinhoposition = email.indexOf('.');
//if there is not @ and ., than the index will return -1, so
if (arrobaposition == -1 || pontinhoposition == -1) {
    console.log("Oh no, invalid e-mail");
}
else {
    console.log("Ok, your e-mail is valid");
}
