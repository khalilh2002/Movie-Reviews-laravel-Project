import { useEffect } from "react";
import { useLocation } from "react-router";
//import axios from "./Api/Axios";


function VerifiedEmail() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const verificationUrl = queryParams.get('verification_url');
    console.log(verificationUrl);
    // if (verificationUrl) {
    //   axios.get(verificationUrl)
    //     .then(response => {
    //       console.log('Email verified:', response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error verifying email:', error);
    //     });
    // }
  }, [location]);
  return (
    <div>
      
    </div>
  )
}

export default VerifiedEmail
