import DeleteFavorite from "./DeleteFavorite";
import DeletePlanToWatch from "./DeletePlanToWatch";

async function FactoryDeleteToList(typeNews , userId , showId) {
    if (typeNews == "favorite") {
      return await DeleteFavorite(userId , showId);
      
  
    }else if (typeNews == "plan_to_watch"){
      return await DeletePlanToWatch(userId , showId)
    }
  
  }

export default FactoryDeleteToList
