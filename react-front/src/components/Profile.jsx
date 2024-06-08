import ProfileImage from "./ProfileComponments/ProfileImage";
import TopGenre from "./ProfileComponments/TopGenre";
import Header from "./Header";
import "./Css/profile.css";
import { useState } from "react";
import Activity from "./ProfileComponments/Activity";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user_info"));
  const [base] = useState("http://localhost:8000/");

  return (
    <div>
      <Header />
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ProfileImage
                profileImg={`${base}${user.profile_picture}`}
                coverImg={`${base}${user.cover_picture}`}
                userName={user.name}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Top Genres</h5>
                  <TopGenre id={user.id} />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Other Content</h5>
                  <p>Additional content goes here...</p>
                  <Activity id={user.id} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
