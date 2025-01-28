User Management Dashboard

Objective:-
Develop a simple web application where users can view, add, edit, and delete user details from a mock backend API.

Requirements:-

User Interface:

-> Display a list of users with details such as ID, First Name, Last Name, Email, and Department.

-> Provide buttons or links to "Add", "Edit", and "Delete" users.

-> A form to input details of a new user or edit details of an existing user.

Backend Interaction:

-> Use JSONPlaceholder, a free online REST API that you can use for demonstration and test purposes.

-> Specifically, use the '/users' endpoint to fetch and manipulate user data.

Functionality:

-> View: Display all users by fetching data from the '/users' endpoint.

-> Add: Allow adding a new user by posting to the '/users' endpoint. (Note: JSONPlaceholder won't actually add the user, but will simulate a successful response.)

-> Edit: Allow editing an existing user. This should involve fetching the current data for a user, allowing for edits, and then putting the updated data back via the API.

-> Delete: Allow users to be deleted, by sending a delete request to the API.

Error Handling:

-> Handle scenarios where the API request might fail - show an error message to the user in such cases.

Bonus (Optional):

-> Implement pagination or infinite scrolling for the user list.

-> Add client-side validation for the user input form.

-> Make the interface responsive.

-------------------------------------------------------------------------------------------------------------------------------------

Set Up Instructions:-

To create this simple web application, we will break it down into the following steps:
1. Setting up the HTML structure
We will create a basic HTML structure that will display a list of users, and include buttons for adding, editing, and deleting users.

2. Styling the application
Basic styling will be done using CSS to make the interface user-friendly and responsive.

3. Fetching data from the JSONPlaceholder API
We will use JavaScript to interact with the JSONPlaceholder API to fetch, add, edit, and delete users.

4. Handling forms for adding/editing users
A simple form will allow the user to input details when adding or editing a user.

5. Handling errors and displaying them
We will show error messages if the API requests fail for any reason.



Application Works:-

Displaying Users:

The list of users is fetched from the /users endpoint of the JSONPlaceholder API and displayed on the page.

Add User: When the "Add User" button is clicked, a form is shown to input new user details. Upon submission, the form simulates a POST request to the API.

Edit User: The "Edit" button next to each user displays their details in the form. Upon form submission, the data is sent as a PUT request to update the user's details.

Delete User: The "Delete" button sends a DELETE request to the API to remove the user.

Error Handling: If any API request fails, an error message is shown.

---------------------------------------------------------------------------------------------------------------------------------------------------

 challenges faced during the development process:-

 In the creation of user management the most difficult part was writing code of JavaScript.

 First, I try on reactjs program and get the output but it was showing errors and get complicate on process. Because I have intermediate knowledge on reactJs

 In this process I have to built the HTML,CSS and JavaScript codes to give an application user management

 So, I have facing issues of connection of database and deletion process of user records.

 The User details was edit it not showing in output and it can't delete

 I will try my best to improve my skills this project acknowledge my skills so it was very useful and gain knowledge on Realtime projects
