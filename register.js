document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;

    if (newUsername === '' || newPassword === '') {
        displayMessage('registerMessage', 'Please fill in all fields.');
        return;
    }

    if (newPassword.length < 6) {
        displayMessage('registerMessage', 'Password must be at least 6 characters long.');
        return;
    }

    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = storedUsers.some(user => user.username === newUsername);

    if (userExists) {
        displayMessage('registerMessage', 'Username already exists.');
        return;
    }

    storedUsers.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(storedUsers));
    displayMessage('registerMessage', 'Registration successful. Redirecting to login page...');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
});

function displayMessage(elementId, message) {
    document.getElementById(elementId).innerText = message;
}
