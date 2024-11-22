import "./App.css";
import Posts from "./components/Posts"
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  
  return (
    <div className="App">
      <header>เที่ยวไหนดี</header>
      <div className="search-box">
        <label htmlFor="search">ค้นหาที่เที่ยว</label>
        <input id="search" type="text" placeholder="หาที่เที่ยวแล้วไปกัน ..." value={search} onChange={(event) => {setSearch(event.target.value)}}/>
      </div>
      <div className="card">
      <Posts search={search} setSearch={setSearch}/>
      </div>
    </div>
  )
}

export default App;
