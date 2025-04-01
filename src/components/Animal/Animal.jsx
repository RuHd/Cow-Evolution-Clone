import React, { useEffect, useState } from 'react'
import './Animal.scss'

const dist = 20
const offset = 90

const Animal = ({posX, posY}) => {

  const [pos, setpos] = useState({x: Math.floor(posX), y: Math.floor(posY)})

  useEffect(() => {
    const interval = setInterval(() => {

        if (pos.x + dist < 788 - offset - 10) {
            let newPosX = pos.x + dist
            setpos({...pos,x: newPosX})
        }

        console.log(pos)

    }, 1000)
  
    return () => {
      clearInterval(interval)
    }
  }, [pos])
  
  return (
    <div className='Animal' style={{left: pos.x, top: pos.y}}></div>
  )
}

export default Animal