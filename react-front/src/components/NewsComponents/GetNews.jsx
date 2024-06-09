import axios from "../Api/Axios";

async function GetNews(id) {
    try {
        const response = await axios.get(`/news/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching single news item:", error);
        return null;
    }
}

export default GetNews;
