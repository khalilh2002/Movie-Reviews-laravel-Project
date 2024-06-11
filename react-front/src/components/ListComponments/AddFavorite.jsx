import axios from "../Api/Axios"
import GetToken from "../Auth/GetToken"


async function AddFavorite(userID , showID) {
  const formData = new FormData();
  formData.append('user_id',parseInt(userID))
  formData.append('show_id',parseInt(showID))

  console.warn(parseInt(userID) , parseInt(showID));
    try {
      const response = await axios.post('/add/favorite/' , formData ,  {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${GetToken()}`
        },
      })
      
      return response.data

    } catch (error) {
      console.error(error);
      return "error message from favorite"
    }
  
}



export default AddFavorite
