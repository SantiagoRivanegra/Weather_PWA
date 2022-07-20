import React from 'react';
import './navBar.css'

function NavBar({ light, handleLight, lang, handleLang }){
  // console.log(light)

  return(
    <div  className = "containerButton" id = {light}>
      {light === 'ON' ?
      <button className = "button" id={light} onClick={e => handleLight(e)}>{lang==='es' ? "Cambiar a Tema Oscuro" : "Change to Dark Theme"}</button>
      : <button className = "button" id={light} onClick={e => handleLight(e)}>{lang==='es' ? "Cambiar a Tema Claro" : "Change to Light Theme"}</button>}

<div className = "containerLang">
      {lang === 'es' ? (
          <button className='buttonEs' id = {light} disabled onClick={e => handleLang(e)}>
            ES
          </button>
        ) : (
          <button className='buttonEs' id = {light} onClick={e => handleLang(e)}>
            ES
          </button>
        )}

        {lang === 'en' ? (
          <button className='buttonEn' id = {light} disabled onClick={e => handleLang(e)}>
            EN
          </button>
        ) : (
          <button className='buttonEn' id = {light} onClick={e => handleLang(e)}>
            EN
          </button>
        )} 
        </div>
    </div>
  )
}

export default NavBar;
