import React from 'react';
import './navBar.css'

function NavBar({ light, handleLight }){
  // console.log(light)
  return(
    <div  className = "containerButton" id = {light}>
      {light === 'ON' ?
      <button className = "button" id={light} onClick={e => handleLight(e)}>Change to Dark Theme</button>
      : <button className = "button" id={light} onClick={e => handleLight(e)}>Change to Light Theme</button>} 
    </div>
  )
}

export default NavBar;