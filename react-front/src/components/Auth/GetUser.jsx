
function GetUser() {
    return  JSON.parse(localStorage.getItem('user_info'));
  }
  
export default GetUser
  