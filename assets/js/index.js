document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        alert('Logged out successfully!');
    });
});
