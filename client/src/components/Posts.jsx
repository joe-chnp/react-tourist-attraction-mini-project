import "./posts.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Posts() {
  const [trips, setTrips] = useState([]);

  const main = async () => {
    try {
      const response = await axios.get("http://localhost:4001/trips?keywords=");
      setTrips(response.data.data);
    } catch (error) {
      console.error("Error fetching trips data:", error);
    }
  };

  useEffect(() => {
    main ();
  }, []);
  console.log(trips)
  return (
    <div>
     
    </div>
  )
}

export default Posts