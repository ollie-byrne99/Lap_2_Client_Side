document.getElementById("registerBtn").addEventListener("click", async () => {
    
    const usernameInput = document.getElementById('inputUsername');
    const passwordInput = document.getElementById('inputPassword');
    const confirmPasswordInput = document.getElementById('inputConfirmPassword');

    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }
    
    const response = await fetch("https://book-wiz-jdyf.onrender.com/users/register", options);

    if (!response.ok) {
        alert("Server returned an error: " + response.status);
        return;
    }

    const data = await response.json();

    if (response.status == 201) {
        window.location.assign("./login.html");
    } else {
        alert(data.error);
    }
});
