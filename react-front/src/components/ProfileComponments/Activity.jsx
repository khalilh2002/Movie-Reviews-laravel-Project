import { Card } from "react-bootstrap";
import axios from "../Api/Axios";
import { useEffect, useState } from "react";
import GetRandomColor from "./GetRandomColor"
import GetToken from "../Auth/GetToken";


// eslint-disable-next-line react/prop-types
function Activity({ id }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`profile/activity/${id}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GetToken()}`,
      },
    }).then((Response) => {
      console.log(Response.data);
      setActivities(Response.data.activities);
    });
  }, [id]);

  const getActivity = ( index, text )=>{
    const badgeStyle = {
      backgroundColor: GetRandomColor(),
      padding: '10px',
      fontFamily: 'sans-serif'
    };
    return(
      <>
          <Card className="my-2" style={badgeStyle}>
              <Card.Body className="p-2" key={index} >
                {text}
              </Card.Body>
            </Card>
      </>
      
    )
  }
  

  

  return (
    <div className="">
        {activities.map((activity, index) => (
          <>
            {getActivity(index , activity.action )}
          </>
        ))}
      
    </div>
  );
}

export default Activity;
