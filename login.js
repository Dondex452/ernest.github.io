document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let rememberMe = document.getElementById('rememberMe').checked;

    if (username === '' || password === '') {
        displayMessage('loginMessage', 'Please fill in all fields.');
        return;
    }

    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    let user = storedUsers.find(user => user.username === username);

    if (user && user.password === password) {
        if (username === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
        if (rememberMe) {
            localStorage.setItem('rememberedUser', JSON.stringify(user));
        }
    } else {
        displayMessage('loginMessage', 'Invalid credentials');
    }
});

function displayMessage(elementId, message) {
    document.getElementById(elementId).innerText = message;
}
