const apiUrl = 'https://jsonplaceholder.typicode.com/users';
let currentEditUserId = null;

// Fetch and display users
function fetchUsers() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list-ul');
            userList.innerHTML = ''; // Clear the list before re-populating

            users.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${user.name} (${user.email}) - ${user.department}</span>
                    <button onclick="showEditForm(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                `;
                userList.appendChild(li);
            });
        })
        .catch(error => showError('Failed to fetch users.'));
}

// Show the form to add a new user
function showAddForm() {
    document.getElementById('form-title').innerText = 'Add User';
    document.getElementById('user-form').style.display = 'block';
    document.getElementById('user-form-details').reset();
    currentEditUserId = null;
}

// Show the form to edit an existing user
function showEditForm(userId) {
    fetch(`${apiUrl}/${userId}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById('form-title').innerText = 'Edit User';
            document.getElementById('user-id').value = user.id;
            document.getElementById('first-name').value = user.name.split(' ')[0];
            document.getElementById('last-name').value = user.name.split(' ')[1];
            document.getElementById('email').value = user.email;
            document.getElementById('department').value = user.department;
            document.getElementById('user-form').style.display = 'block';
            currentEditUserId = user.id;
        })
        .catch(error => showError('Failed to fetch user.'));
}

// Handle form submission for both adding and editing users
function handleFormSubmit(event) {
    event.preventDefault();
    const userId = document.getElementById('user-id').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    const userData = {
        name: `${firstName} ${lastName}`,
        email: email,
        department: department,
    };

    if (currentEditUserId) {
        // Update user
        fetch(`${apiUrl}/${currentEditUserId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: currentEditUserId,
                    ...userData
                })
            })
            .then(response => response.json())
            .then(() => {
                fetchUsers();
                cancelForm();
            })
            .catch(error => showError('Failed to update user.'));
    } else {
        // Add user
        fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(() => {
                fetchUsers();
                cancelForm();
            })
            .catch(error => showError('Failed to add user.'));
    }
}

// Delete a user
function deleteUser(userId) {
    fetch(`${apiUrl}/${userId}`, {
            method: 'DELETE'
        })
        .then(() => fetchUsers())
        .catch(error => showError('Failed to delete user.'));
}

// Cancel form and hide it
function cancelForm() {
    document.getElementById('user-form').style.display = 'none';
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

// Initial data fetch
fetchUsers();
