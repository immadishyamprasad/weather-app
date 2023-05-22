
import React,{useState} from "react";
import axios from "axios";
import {FaSearch} from 'react-icons/fa'





function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');
  const [error,setError] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6f7a457908b03ede32c3c36af9f19250`;

  const searchLocation = (event)=>{
    const response= null;
    if(event.key === 'Enter' || event.key === undefined  ){
      try{
        response = fetch(url)
        .then(res=>{
          return res.json();
        }).then(data=>{
          setData(data);
          
        })
      }catch(e){
        setError(true);
        
        console.log("hi");
      }

        
    }
  }
  

  return (
    <div className={(data.main != undefined) ? (data.main.temp > 20 ? 'app warm' : 'app')  :'app' }>
      <main className={ (data.main != undefined) ? (data.main.temp > 20 ? 'container warm' : 'container')  :'container' }>
        <div className="shade">
          <div className="search-box">
            <div>
              <input type="text" value={location} 
              onChange={(event)=>setLocation(event.target.value)}
              onKeyDown={searchLocation}
              className="search-bar" placeholder="Search..." />
              <button onClick={(e)=>searchLocation(e)} className="icon">
                <FaSearch  size={20} />
              </button>
              
            </div>
          </div>
          {data.name == undefined && (<div className="intro"> { error ? "Enter Valid City Name " : "Enter City name to Know Weather"} </div>)}
          {data.name != undefined &&
            <div className="content">
                <div className="top">
                    <div className="location">
                      {data.name}
                    </div>
                    <div className="temp">
                      {data.main ? <span>{data.main.temp.toFixed()} &deg;C</span> : null}
                    </div>
                    <div className="description">
                      {data.weather ? <span>{ data.weather[0].main }</span> : null}
                    </div>
                </div>

                <div className="bottom">
                    <div className="feels">
                      {data.main ? <p className="val">{data.main.feels_like} &deg;C</p> : null}
                      <p>Feels like</p>
                    </div>
                    <div className="humidity">
                      {data.main ? <p className="val">{data.main.humidity}%</p> : null}
                      <p>Humidity</p>
                    </div>
                    <div className="winds">
                      {data.wind ? <p className="val">{data.wind.speed} ~</p> : null}
                      <p>Wind</p>
                    </div>
                </div>
            </div>
          }
        </div>

      </main>
      
    </div>
  );
}

export default App;
