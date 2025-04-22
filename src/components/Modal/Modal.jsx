import React, { useEffect, useState } from 'react'
import './Modal.scss'
import cowDivine from '../../../public/divineCow.png'
import Image from 'next/image'
import { resetGame } from '@/utils/functions'

let posX = 0

const Modal = ({func}) => {

    const [showComet, setshowComet] = useState(false)
    useState

    useEffect(() => {
        
      const interval = setInterval(() =>{
        setshowComet(!showComet)
        if (showComet) {
            posX = Math.random()* window.innerWidth - 50
         
        }
      }, 1500)
    
      return () => {
        clearInterval(interval)
      }
    }, [showComet])

    console.log(showComet)

  return (
    <div className='Modal'>
        {showComet && <span className='comet' style={{right: posX}}></span>}
        <section>
            <Image src={cowDivine} alt='Divine Cow Image' className='divineCow'/>
        </section>
        <h2>A new meaning of existence has been created</h2>
        <button onClick={() => window.location.reload()}>Restart the Game</button>
    </div>
  )
}

export default Modal