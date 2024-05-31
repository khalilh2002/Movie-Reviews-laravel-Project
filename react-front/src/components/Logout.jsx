import axios from "./Api/Axios"
import Header from "./Header";

function Logout() {

// Assume you have the token stored in localStorage
const token = JSON.parse(localStorage.getItem('session_token'));
const auth = `Bearer ${token.token}`
console.log(auth);
axios.post('/logout', {}, {
    headers: {
        'Authorization':auth,
    }
})
.then(response => {
    if (response.data.message === 'Successfully logged out') {
        // Clear local storage and redirect to login page
        localStorage.clear();

        window.location.href = '/login';
    } else {
        console.error('Logout failed:', response.data);
    }
})
.catch(error => console.error('Error:', error));

  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default Logout
