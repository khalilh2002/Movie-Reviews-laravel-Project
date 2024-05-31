import ProfileImage from "./ProfileComponments/ProfileImage";
import TopGenre from "./ProfileComponments/TopGenre";
import RecentActivite from "./ProfileComponments/RecentActivite";
import Header from "./Header";
import { Col, Row } from "react-bootstrap";
import "./Css/profile.css"
import axios from "./Api/Axios";


function Profile() {
  const user = JSON.parse(localStorage.getItem("user_info"));

  return (
    <div>
      <Header></Header>
      
      <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ProfileImage
              profileImg={user.profile_picture}
              coverImg={user.cover_picture}
              userName={user.name}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Top Genres</h5>
                <TopGenre id={user.id}></TopGenre>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Other Content</h5>
                <p>Additional content goes here...</p>
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

/**
 * <ProfileCover 
        coverImg={ user.cover_picture }
      ></ProfileCover>
      <ProfileImage profileImg={user.profile_picture}></ProfileImage>
      <div className="py-3 px-5" >
        <Row className="mt-3 ">
          <Col md={3} className="p-3">
            <h2>Top Genre</h2>
            <TopGenre></TopGenre>
          </Col>

          <Col md={9}>
            <h3>Activite</h3>
            <RecentActivite></RecentActivite>
          </Col>
        </Row>
      </div>
 */
