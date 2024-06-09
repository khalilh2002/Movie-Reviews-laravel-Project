import GetNews from "./GetNews"
import GetAllNews from "./GetAllNews"


async function FactoryNews(typeNews , id=null) {
  if (typeNews == "news_all") {
    return await GetAllNews();
    

  }else if (typeNews == "news_one"){
    return await GetNews(id)

  }

}

export default FactoryNews
