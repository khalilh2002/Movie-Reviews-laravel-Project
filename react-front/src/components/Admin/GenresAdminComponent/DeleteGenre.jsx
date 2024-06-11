import axios from "../../Api/Axios";
import GetToken from "../../Auth/GetToken";

function DeleteGenre(id) {
    if (!id) {
        alert("Invalid genre ID.");
        return;
    }

    const conf = confirm('Are you sure you want to delete this genre , all shows that are related to it will be removed?');
    if (!conf) {
        return;
    }

    axios.post(`/delete/genre/${id}`, null, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${GetToken()}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            alert('genre has been deleted successfully.');
        }
    })
    .catch((error) => {
        console.error(error);
        alert('An error occurred while trying to delete the genre.');
    });
}

export default DeleteGenre;
