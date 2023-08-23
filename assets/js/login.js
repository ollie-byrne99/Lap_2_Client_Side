document.querySelector('.lrBtn').addEventListener('click', async (e) => {
    e.preventDefault();

    
    const username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,  
            password: password
        })
    };

    try {
        const response = await fetch("http://localhost:3000/users/login", options);
        const data = await response.json();

        if (response.status == 200) {
            localStorage.setItem("token", data.token);
            window.location.assign("./library.html");
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("Failed to login. Please try again.");
    }
});
