const apiUrl = 'https://jsonplaceholder.typicode.com/users';
let currentEditUserId = null;

function fetchUsers() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list-ul');
            userList.innerHTML = ''; 

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


function showAddForm() {
    document.getElementById('form-title').innerText = 'Add User';
    document.getElementById('user-form').style.display = 'block';
    document.getElementById('user-form-details').reset();
    currentEditUserId = null;
}


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


function deleteUser(userId) {
    fetch(`${apiUrl}/${userId}`, {
            method: 'DELETE'
        })
        .then(() => fetchUsers())
        .catch(error => showError('Failed to delete user.'));
}


function cancelForm() {
    document.getElementById('user-form').style.display = 'none';
}

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

fetchUsers();
