import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css'
import Footer from './footer'
import NavBar from './navBar'

const App = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = async (e) => {
    if(e.key === 'Enter') {
      
      if(!query){
        lang === 'es' ? alert('Ingrese una ciudad') : alert('Enter a city')
      }
      
      const data = await fetchWeather(query, {lang})      
      setWeather(data)
      setQuery('')
    }
  }

  const [light, setLight] = useState("OFF")
  function handleLight(e){
    e.preventDefault(e);
    light === "OFF" ? setLight("ON") : setLight("OFF"); 
  }

  const [lang, setLang] = useState("es")
  function handleLang(e){
    e.preventDefault(e);
    lang === "es" ? setLang("en") : setLang("es"); 
  }

  return (
    <div className="container">
      <NavBar light={light} handleLight={handleLight} lang={lang} handleLang={handleLang}/>
    <div className="main-container">
      {/* {console.log(light)} */}
      {console.log(lang)}
      <input type='text' className='search' placeholder={lang==='es' ? "Buscar..." : "Search..."} value={query} id={light} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
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
      <Footer />
    </div>
  )
}

export default App