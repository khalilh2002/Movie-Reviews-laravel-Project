import axios from "../Api/Axios";
import { useState, useEffect } from "react";
import GetToken from "../Auth/GetToken";
import GetUser from "../Auth/GetUser";

// eslint-disable-next-line no-unused-vars
function GetList(listType) {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let endpoint = "";
    if (listType === "plan_to_watch") {
      endpoint = "planToWatch";
    } else if (listType === "favorite") {
      endpoint = "favorite";
    } else {
      setError("Invalid list type");
      return;
    }

      try {
       axios.get(`${endpoint}/${GetUser().id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GetToken()}`
          },
        }).then((response)=>{
          console.log(response.data);
          setList(response.data);
        });
        
      } catch (error) {
        setError("Error fetching data");
        console.error('Error fetching data:', error);
      }
    

  }, [listType]);

  return { list, error };
}

export default GetList;
