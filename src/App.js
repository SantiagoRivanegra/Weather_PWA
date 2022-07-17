import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css'

const App = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query)
      
      setWeather(data)
      setQuery('')
    }
  }

  const [light, setLight] = useState("OFF")
  function handleLight(e){
    e.preventDefault(e);
    light === "OFF" ? setLight("ON") : setLight("OFF"); 
  }

  return (
    <div className="container">
      <div  className = "containerButton" id = {light}>
              <button className = "button" id={light} onClick={e => handleLight(e)}>Change Theme</button>
      </div>
    <div className="main-container">
      {console.log(light)}
      <input type='text' className='search' placeholder='Search...' value={query} id={light} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
      {weather.main && (
        <div className="city" id = {light}>
          <h2 className="city-name" id = {light}>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp"id = {light}> 
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
              <img className="city-icon" id = {light} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default App