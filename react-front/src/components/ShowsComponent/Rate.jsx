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
    const element = document.getElementById(documentId);
    element.textContent++;
    setScore(element.textContent);
  };

  const handleMinus = () => {
    const element = document.getElementById(documentId);
    element.textContent--;
    setScore(element.textContent);
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("show_id", show_id);
    formData.append("user_id", user.id);
    formData.append("score", score);

    if (!formData.has("show_id") || !formData.has("user_id") || !formData.has("score")) {
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
        alert('Reviewed successfully: ' + score);
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
            className="rating-badge rating-increase"
            onClick={handleAdd}
            title="Increase Rating"
          >
            +
          </Badge>
          <Badge
            bg="secondary"
            className="rating-badge rating-decrease"
            onClick={handleMinus}
            title="Decrease Rating"
          >
            -
          </Badge>
          <Badge
            bg="success"
            className="rating-badge rating-submit"
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
