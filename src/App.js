
import React from "react";


const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=6f7a457908b03ede32c3c36af9f19250`;


function App() {
  return (
    <div className="app ">
      <main className="container warm">
        <div className="shade">
          <div className="search-box">
              <input type="text" className="search-bar" placeholder="Search..." />
          </div>
          <div className="content">
              <div className="top">
                  <div className="location">
                    Dallas
                  </div>
                  <div className="temp">
                    65 F
                  </div>
                  <div className="description">
                    clouds
                  </div>
              </div>
              <div className="bottom">
                  <div className="feels">
                    <p className="val">70 F</p>
                    <p>Feels like</p>
                  </div>
                  <div className="humidity">
                    <p  className="val">20%</p>
                    <p>Humidity</p>
                  </div>
                  <div className="winds">
                    <p  className="val">12 MPH</p>
                    <p>Wind</p>
                  </div>
              </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
