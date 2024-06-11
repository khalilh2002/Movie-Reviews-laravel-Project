/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import "../Css/general.css";
import axios from "../Api/Axios";
import GetToken from "../Auth/GetToken";
import "./Css/Rate.css";


function Rate({ show_id, documentId }) {
  const [user, setUser] = useState(null);
  const [score, setScore] = useState();

  useEffect(() => {
    let tmp = localStorage.getItem("user_info");
    if (tmp) {
      setUser(JSON.parse(tmp));
    }
  }, []);
  const handleAdd = () => {
    document.getElementById(documentId).textContent++;
    setScore(document.getElementById(documentId).textContent);
  };
  const handleMinus = () => {
    document.getElementById(documentId).textContent--;
    setScore(document.getElementById(documentId).textContent);
  };
  const handleSubmit = () => {
    let formData = new FormData();

    formData.append("show_id", show_id);
    formData.append("user_id", user.id);
    formData.append("score", score);

    if (
      !formData.has("show_id") ||
      !formData.has("user_id") ||
      !formData.has("score")
    ) {
      console.error("Form data is empty");
      return;
    }

    axios
      .post("rate/show/", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GetToken()}`,
        },
      })
      .then(() => {
        alert('reviewed successfully '+score)
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
      });
  };

  return (
    <>
      {user ? (
        <div className="rating-system-container">
        <Badge
          bg="primary"
          className="rating-badge"
          onClick={handleAdd}
          title="Increase Rating"
        >
          +
        </Badge>
        <Badge
          bg="secondary"
          className="rating-badge"
          onClick={handleMinus}
          title="Decrease Rating"
        >
          -
        </Badge>
        <Badge
          bg="success"
          className="rating-badge"
          onClick={handleSubmit}
          title="Submit Rating"
        >
          Ok
        </Badge>
      </div>
      ) : null}
    </>
  );
}

export default Rate;
