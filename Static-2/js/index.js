$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        if (!/^[A-Z]/.test(username)) {
            alert("Username should start with a capital letter.");
            return;
        }

        if (!/^(?=.*[a-z])(?=.*\d)[a-z\d]+$/.test(password)) {
            alert(
                "Password should have only small letters and at least one number."
            );
            return;
        }

        if (username === "Admin" && password === "admin12") {
            window.location.href = "homePage.html";
        } else {
            alert("Invalid credentials.");
        }
    });
});
