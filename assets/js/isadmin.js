const isAdmin = true; // Modify to check if admin is logged in

// This hides the link to the admin page if the user is not an admin
if (isAdmin) {
    document.getElementById('adminLink').style.display = 'block';
} else {
    document.getElementById('adminLink').style.display = 'none';
}