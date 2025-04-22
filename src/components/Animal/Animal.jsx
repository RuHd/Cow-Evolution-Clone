import React, { useEffect, useState } from 'react'
import './Animal.scss'
import { defineAxis } from '@/utils/functions'
import Image from 'next/image'
import cow1 from '../../../public/cow1.webp'
import cow2 from '../../../public/cow2.webp'
import cow3 from '../../../public/cow3.png'
import cow4 from '../../../public/cow4.webp'
import { IoMdArrowDropdown } from "react-icons/io";

const dist = 20
const borderLimit = 636

const Animal = ({posX, posY,id,pairSelected, setpairSelected, setgroupAnimals, groupAnimals, mutation}) => {

  const [pos, setpos] = useState({x: Math.floor(posX), y: Math.floor(posY)})
  const [isClicked, setisClicked] = useState(false)

  
  const addCowtoPair = () => {
    // Check if the clicked animal is enabled to be merged
    if ( pairSelected.length == 0 || (pairSelected.length < 2 && pairSelected.some(value => value.id !== id))) {
      setisClicked(true)
      setpairSelected(prev => [...prev,{id: id, x: pos.x, y: pos.y, mutation: mutation}])

      if (pairSelected.length == 2) setisClicked(false)
    } 
  }

  useEffect(() => {

    let interval = null

    if(!isClicked) {
      interval = setInterval(() => {
  
        let newPosX = pos.x
        let newPosY = pos.y
  
        if (defineAxis() >= 1) { // Generates or not horizontal move
          newPosX = defineAxis() == 1 ? (pos.x + dist) : pos.x - dist
        }
        
        if (defineAxis() >= 1) { // Generates or not vertical move
          newPosY = defineAxis() == 1 ? (pos.y + dist) : pos.y - dist
        }
        
        // Check border collisions
        if (newPosX < 636 && newPosX > 152) { // Right/Left Edges
            setpos({...pos,x: newPosX})
        } 
  
        if (newPosY  < 507 && newPosY > 152) { // Top / Bottom Edges
          setpos({...pos,y: newPosY})
        }
  
  
      }, 200)

    } else setTimeout(() => setisClicked(false), 2000)
  
    return () => {
      clearInterval(interval)
    }
  }, [pos, isClicked])
  
  return (
    <div className={`Animal ${mutation == 4 && "minotaur"} ${(isClicked) && "clicked"}`} style={{left: pos.x, top: pos.y}} onClick={() => addCowtoPair()}>
      <IoMdArrowDropdown className='arrow' size={40}/>
      <Image src = {mutation == 1 ? cow1 : (mutation == 2 ? cow2 : (mutation == 3 ? cow3 : cow4))} width={130} height={70} alt='Cow'/>
    </div>
  )
}

export default Animal