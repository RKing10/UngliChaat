const loginForm = document.querySelector("#login")
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        location.href = "menu-snacks.html";
        // var headerLogin = document.querySelector("#login").value;
        // console.log(headerLogin.value);
    })
})