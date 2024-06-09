import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home'
import MyList from './components/MyList'
import Favorite from './components/ListComponments/Favorite'
import PlanToWatch from './components/ListComponments/PlanToWatch'
import Profile from './components/Profile'
import Login from './components/Login'
import Logout from "./components/Logout";
import Register from "./components/Register";
import ShowPage from "./components/ShowsComponent/ShowPage";
import News from "./components/News";
import NewsPage from "./components/NewsComponents/NewsPage";
import AdminDashBoard from "./components/Admin/AdminDashBoard";
import AdminUser from "./components/Admin/AdminUser";

//import VerifiedEmail from "./components/VerifiedEmail";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />


          <Route path="/Admin" element={<AdminDashBoard />} />
          <Route path="/Admin/Users" element={<AdminUser />} />


          <Route path="/User/List" element={<MyList Cmp={Favorite} />} />
          <Route path="/User/List/Favorite" element={<MyList Cmp={Favorite}/>} />
          <Route path="/User/List/PlanToWatch" element={<MyList Cmp={PlanToWatch} />} />
          
          <Route path="/Profile" element={<Profile />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/Show/:id" element={<ShowPage/>} ></Route>


          <Route path="/All/News/" element={<News/>} ></Route>
          <Route path="/News/:id" element={<NewsPage/>} ></Route>



          {/* <Route path="/verify-email" element={<VerifiedEmail />} /> */}


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
