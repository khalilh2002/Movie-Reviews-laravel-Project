


import "./css/profileImage.css"

function ProfileImage(varItem) {
    let srcImg = varItem.profileImg;
    let srcImgCover = varItem.coverImg;
    let name = varItem.userName;

    return (
    <div>
      <div className="profile-info">
        <div className="cover-photo">
          <img className="cover-photo" src={srcImgCover} alt="cover" />
        </div>
        <div className="profile-details">
          <img className="profile-pic" src={srcImg} alt="Profile" />
          <h2>{name}</h2>
        </div>
      </div>
      </div>
  )
}

export default ProfileImage


