/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Badge } from "react-bootstrap";
import "../Css/general.css"
import axios from "../Api/Axios";
function Rate({show_id , documentId}){
    
    const [user, setUser] = useState(null);
    const [score, setScore] = useState();


    useEffect(()=>{
        let tmp = localStorage.getItem('user_info');
        if (tmp) {
            setUser(JSON.parse(tmp))
            
        }
    },[])
    const handleAdd = ()=>{
       document.getElementById(documentId).textContent++
       setScore(document.getElementById(documentId).textContent)

    }
    const handleMinus = ()=>{
        document.getElementById(documentId).textContent--
        setScore(document.getElementById(documentId).textContent)

    }
    const handleSubmit = () => {
      let formData = new FormData();
  
      formData.append("show_id", show_id);
      formData.append("user_id", user.id);
      formData.append("score", score);
  
      if (!formData.has("show_id") || !formData.has("user_id") || !formData.has("score")) {
          console.error("Form data is empty");
          return; 
      }
  
      axios.post('rate/show/', formData ,)
          .then((response) => {
              console.log(response.data);
          })
          .catch((error) => {
              console.error('Error submitting rating:', error);
          });
  }
  
  
  

    
    
  return (
    <>
    {user ? (
        <>
            <Badge bg="primary" className="mx-2 objectHover" onClick={handleAdd}>+</Badge>
            <Badge bg="secondary" className="mx-2 objectHover" onClick={handleMinus}>-</Badge>
            <Badge bg="secondary" className="mx-2 objectHover" onClick={handleSubmit}>sub</Badge>
        </>
      ) : null}
    </>

  )
}

export default Rate
