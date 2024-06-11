import axios from "../../Api/Axios";
import { useEffect, useState } from "react";
import GetToken from "../../Auth/GetToken";
import { Link } from "react-router-dom"; // Import for navigation
import { Badge } from "react-bootstrap";
import EditNews from "./EditNews";
import AddNews from "./AddNews";
import DeleteNews from "./DeleteNews";

function NewsAdminList() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store error message (if any)

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear previous errors
      try {
        const response = await axios.get("/news/all", {
          headers: {
            Authorization: `Bearer ${GetToken()}`, // Include authorization if needed
          },
        });
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(
          "An error occurred while fetching news. Please try again later."
        ); // User-friendly error message
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>News Administration</h2>
        <AddNews></AddNews>
      </div>

      {isLoading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Title</th>
              <th className="text-center">Release Date</th>
              <th className="text-center">Tag</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.length > 0 ? (
              news.map((newsItem, index) => (
                <tr key={index}>
                  <td>{newsItem.id}</td> {/* Assuming "id" field exists */}
                  <td>{newsItem.title}</td>
                  <td>{Date(newsItem.updated_at)}</td>{" "}
                  {/* Assuming "updated_at" represents release date */}
                  <td className="text-center">
                    {newsItem.show ? (
                      <Link to={"/show/" + newsItem.show.id}>
                        <Badge>{newsItem.show.title}</Badge>
                      </Link>
                    ) : (
                      <p>None</p>
                    )}
                  </td>
                  <td className="text-center">
                    <EditNews id={newsItem.id}></EditNews>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => DeleteNews(newsItem.id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No news available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default NewsAdminList;
