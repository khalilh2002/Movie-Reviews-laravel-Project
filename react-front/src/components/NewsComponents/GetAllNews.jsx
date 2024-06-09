import axios from "../Api/Axios"

async function GetAllNews() {
    const response = await axios.get('/news/all')
    return response.data

}

export default GetAllNews
