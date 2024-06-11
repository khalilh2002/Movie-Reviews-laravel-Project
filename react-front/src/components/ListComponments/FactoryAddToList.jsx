import AddFavorite from "./AddFavorite";
import AddPlanToWatch from "./AddPlanToWatch";

async function FactoryAddToList(typeNews , userId , showId) {
    if (typeNews == "favorite") {
      return await AddFavorite(userId , showId);
      
  
    }else if (typeNews == "plan_to_watch"){
      return await AddPlanToWatch(userId , showId)
    }
  
  }

export default FactoryAddToList
