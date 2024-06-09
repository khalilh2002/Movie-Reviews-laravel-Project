import axios from "../../Api/Axios";
import GetToken from "../../Auth/GetToken";

function DeleteUser(id) {
    if (!id) {
        alert("Invalid user ID.");
        return;
    }
    console.warn('ID is', id);

    const conf = confirm('Are you sure you want to delete this user?');
    if (!conf) {
        return;
    }

    axios.post(`/delete/user/${id}`, null, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${GetToken()}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            alert('User has been deleted successfully.');
        }
    })
    .catch((error) => {
        console.error(error);
        alert('An error occurred while trying to delete the user.');
    });
}

export default DeleteUser;
