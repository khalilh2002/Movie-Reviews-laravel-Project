import axios from 'axios';

const baseURL = 'http://localhost:8000/api'; // Replace with your actual backend API base URL

const Axios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default Axios;
