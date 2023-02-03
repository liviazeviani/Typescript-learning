var password = "senha12";
if (password.length < 8 || password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) {
    console.log("The password needs at least 8 characters and the first letter must be capital");
}
else {
    console.log("Password registered");
}
