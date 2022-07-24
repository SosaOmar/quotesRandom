import React from 'react'
import { useState } from 'react'
import quotes from "../json/quotes.json"
import Boton from './Boton'


const QuoteBox = () => {

  const generateRandomColor = () => {
    return "hsl(" +
      Math.floor(Math.random() * 400) + "," +
      Math.floor(Math.random() * 100) + "%," +
      Math.floor(Math.random() * 100) + "%)";
  }

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length)
  }


  const [color, useColor] = useState(generateRandomColor())
  const [randomNumber, useRandomNumber] = useState(generateRandomNumber())

  const RandomNumber = () => {
    useRandomNumber(generateRandomNumber())
  }

  const randomColor = () => {
    useColor(
      generateRandomColor()

    )
  }

  const todas = () => {
    RandomNumber();
    randomColor();
  }


  return (
    <div className="box" style={{ backgroundColor: `${color}` }}>
      <div className="cajaFrase">
        <i style={{ color: `${color}` }} className="fa-solid fa-pen-clip"></i>
        <div className="authors">
          < p style={{ color: `${color}` }}> {quotes[`${randomNumber}`].quote}</p >
          <p style={{ color: `${color}` }}> {quotes[`${randomNumber}`].author}</p>
        </div>
      </div>
      <Boton todas={todas} color={color} />
    </div>
  )
}

export default QuoteBox