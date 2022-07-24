import React from 'react'

const Boton = ({todas, color}) => {
  return (
    <button className='boton' onClick={todas} ><i style={{ color: `${color}` }} className="fa-solid fa-angle-right"></i></button>
  )
}

export default Boton