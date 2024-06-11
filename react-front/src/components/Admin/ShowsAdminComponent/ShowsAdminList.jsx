import { useEffect, useState } from "react";
import axios from "../../Api/Axios";
import GetBaseUrl from "../../Api/GetBaseUrl";
import { Image } from "react-bootstrap";
import DeleteShow from "./DeleteShow";
import EditShow from "./EditShow";
import ViewShow from "./ViewShow";
import AddShow from "./AddShow";


function ShowsAdminList() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('/shows')
        .then((Response)=>{
            setShows(Response.data);
        })
    }, []);

    return (
        <>
        <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center">
            <h2>Shows Information</h2>
            <AddShow></AddShow>
        </div>

            
            <table className="table table-bordered table-striped">
            <thead className="thead-dark">
                <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Poster</th>
                <th className="text-center">Title</th>
                <th className="text-center" >Release date</th>
                <th className="text-center">Rate</th>
                <th className="text-center">genre</th>

                <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {shows.map((show, index) => (
                <tr key={index}>
                    <td className="text-center" >{show.id}</td>
                    <td className="text-center" >
                        <>
                            <Image src={GetBaseUrl()+show.poster_img} width={40} ></Image>
                        </>
                    </td>
                    <td>{show.title}</td>
                    <td>{show.release_date}</td>
                    <td>{show.rate}/100</td>
                    <td>
                    {show.genre ? show.genre.name : 'Genre Not Available'}
                    </td>

                    <td>
                        <div>
                            <ViewShow id={show.id}></ViewShow>
                           <EditShow id={show.id}></EditShow>
                            <button className="btn btn-danger btn-sm" onClick={()=>DeleteShow(show.id)}>Delete</button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </>
    );
}

export default ShowsAdminList;
