import "./posts.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Posts() {
  const [trips, setTrips] = useState([]);

  const main = async () => {
    try {
      const response = await axios.get("http://localhost:4001/trips?keywords=");
      setTrips(response?.data?.data);
    } catch (error) {
      console.error("Error fetching trips data:", error);
    }
  };
  
  useEffect(() => {
    main ();
  }, []);

  return (
    <div className="posts-container">
      {trips.map((trip, index) => {
        return (
          <div key={index} className="post">
           <img src={trip?.photos[0]}/>
           <div className="details">
            <h1>{trip?.title}</h1>
            <p>{trip?.description}</p>
            <a>อ่านต่อ</a>
            <div className="tags">
              <span>หมวด</span>
              {trip?.tags.map((tag, index) => {
                return <a key={index}>{tag}</a>
              })}
            </div>
            <div className="imgs-container">
              {trip?.photos.slice(1).map((photo, index) => {
                return <img key={index} src={photo}/>
              })}
            </div>
           </div>
          </div>
        )
      })}
    </div>
    
  )
}

export default Posts