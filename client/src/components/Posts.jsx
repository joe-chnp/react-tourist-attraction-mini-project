import "./posts.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Posts( props ) {
  const [trips, setTrips] = useState([]);
  const { search, setSearch } = props;
  
  const main = async (keyword) => {
    try {
      const response = await axios.get(`http://localhost:4001/trips?keywords=${keyword}`);
      setTrips(response?.data?.data);
    } catch (error) {
      console.error("Error fetching trips data:", error);
    }
  };
  
  const handleCopyToClipboard = (e) => {
    e.preventDefault();
    const url = e.currentTarget.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  useEffect(() => {
    main (search);
  }, [search]);

  return (
    <div className="posts-container">
      {trips.map((trip, index) => {
        return (
          <div key={index} className="post">
            <img src={trip?.photos[0]}/>
            <div className="details">
             <a className="title" href={trip?.url}>{trip?.title}</a>
             <p>{trip?.description}</p>
             <a>อ่านต่อ</a>
             <div className="tags">
               <span>หมวด</span>
               {trip?.tags.slice(0, trip?.tags.length - 1).map((tag, index) => {
                 return <button key={index} onClick={() => {setSearch(tag)}}>{tag}</button>
               })}
               <span>และ</span>
               <button onClick={() => {setSearch(trip?.tags[trip?.tags.length - 1])}}>{trip?.tags[trip?.tags.length - 1]}</button>
             </div>
             <div className="imgs-container">
               {trip?.photos.slice(1).map((photo, index) => {
                 return <div><img key={index} src={photo}/></div>
               })}
             </div>
            </div>
            <a className="copyLink" href={trip?.url} onClick={handleCopyToClipboard}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="50px" 
                height="auto" 
                viewBox="0 0 32 32"
              >
                <path fill="#5cc3e6" d="m16.45 18.085l-2.47 2.47a3.73 3.73 0 0 1-1.078 2.847A3.755 3.755 0 0 1 7.6 23.4a3.754 3.754 0 0 1 0-5.3a3.73 3.73 0 0 1 2.846-1.08l2.47-2.468a6.75 6.75 0 0 0-7.44 1.426a6.75 6.75 0 0 0 9.546 9.545v.002a6.76 6.76 0 0 0 1.428-7.44m-1.898-5.17l2.467-2.47a3.74 3.74 0 0 1 1.077-2.847a3.756 3.756 0 0 1 5.303.002a3.75 3.75 0 0 1 0 5.3a3.72 3.72 0 0 1-2.846 1.08l-2.47 2.468a6.76 6.76 0 0 0 7.44-1.424a6.75 6.75 0 1 0-9.546-9.546a6.75 6.75 0 0 0-1.426 7.437zm3.6-2.188l-7.424 7.426a1.498 1.498 0 1 0 2.12 2.12l7.426-7.425a1.5 1.5 0 1 0-2.122-2.12z"/>
              </svg>
            </a>
          </div>
        )
      })}
    </div>
    
  )
}

export default Posts