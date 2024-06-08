
function GetToken() {
  return  JSON.parse(localStorage.getItem('session_token')).token;
  
}

export default GetToken
