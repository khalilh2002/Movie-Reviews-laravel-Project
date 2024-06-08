/* eslint-disable react/prop-types */
import "./css/profileImage.css";

function ProfileImage({ profileImg, coverImg, userName }) {
  return (
    <div>
      <div className="profile-info">
        <div className="cover-photo">
          <img src={coverImg} alt="cover" />
        </div>
        <div className="profile-details">
          <img className="profile-pic" src={profileImg} alt="Profile" />
          <h2>{userName}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
