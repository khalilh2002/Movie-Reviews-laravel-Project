import axios from "../../Api/Axios";
import GetToken from "../../Auth/GetToken";

function DeleteNews(id) {
    if (!id) {
        alert("Invalid news ID.");
        return;
    }

    const conf = confirm('Are you sure you want to delete this news?');
    if (!conf) {
        return;
    }

    axios.post(`/delete/news/${id}`, null, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${GetToken()}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            alert('Show has been deleted successfully.');
        }
    })
    .catch((error) => {
        console.error(error);
        alert('An error occurred while trying to delete the Show.');
    });
}

export default DeleteNews;
