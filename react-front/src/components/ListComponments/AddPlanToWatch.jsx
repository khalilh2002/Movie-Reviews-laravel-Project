import axios from "../Api/Axios"
import GetToken from "../Auth/GetToken"


async function AddPlanToWatch(userID , showID) {
  const formData = new FormData();
  formData.append('user_id',userID)
  formData.append('show_id',showID)
  
    try {
      const response = await axios.post('/add/planToWatch/' , formData ,  {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${GetToken()}`
        },
      })
      
      return response.data

    } catch (error) {
      console.error(error);
      return "error message from plan to watch"
    }
  
}



export default AddPlanToWatch


