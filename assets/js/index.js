document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('token');
        alert('Logged out successfully!');
    });
});
