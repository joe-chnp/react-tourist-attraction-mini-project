import "./App.css";
import Posts from "./components/Posts"

function App() {
  
  return (
    <div className="App">
      <header>เที่ยวไหนดี</header>
      <div className="search-box">
        <label htmlFor="search">ค้นหาที่เที่ยว</label>
        <input id="search" type="text" placeholder="หาที่เที่ยวแล้วไปกัน ..."/>
      </div>
      <div className="card">
      <Posts/>
      </div>
    </div>
  )
}

export default App;
