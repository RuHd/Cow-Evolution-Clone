import React, { useEffect, useState } from 'react'
import './Animal.scss'
import { defineAxis, mergeCows } from '@/utils/functions'
import Image from 'next/image'
import cow1 from '../../../public/cow1.webp'
import cow2 from '../../../public/cow2.webp'



const dist = 20
const borderLimit = 688

const Animal = ({posX, posY,id,pairSelected, setpairSelected, setgroupAnimals, groupAnimals, mutation}) => {

  const [pos, setpos] = useState({x: Math.floor(posX), y: Math.floor(posY)})
  const [isClicked, setisClicked] = useState(false)

  // Check if the clicked animal is enabled to be merged
  const addCowtoPair = () => {
    
    if ( pairSelected.length == 0 || (pairSelected.length < 2 && pairSelected.some(value => value.id !== id))) {
     
      setisClicked(true)
      
      setpairSelected(prev => [...prev,{id: id, x: pos.x, y: pos.y, mutation: mutation}])
    } 
    
    // if (pairSelected.length == 2) {

    //   mergeCows(pairSelected[0], pairSelected[1], setgroupAnimals, setpairSelected)
    //   return
    // }

    setTimeout(() => {
      setisClicked(false)
      setpairSelected([])
    }, 10000)
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
        if (newPosX < borderLimit && newPosX > 100) { // Right/Left Edges
            setpos({...pos,x: newPosX})
        } 
  
        if (newPosY  < 507 && newPosY > 100) { // Top / Bottom Edges
          setpos({...pos,y: newPosY})
        }
  
  
      }, 200)

    } else setTimeout(() => setisClicked(false), 5000)
  
    return () => {
      clearInterval(interval)
    }
  }, [pos, isClicked])
  
  return (
    <div className={`Animal ${isClicked ? "clickedAnimal" :""}`} style={{left: pos.x, top: pos.y}} onClick={() => addCowtoPair()}>
      <Image src = {mutation == 1 ? cow1 : cow2} width={100} height={70} alt='Cow'/>
    </div>
  )
}

export default Animal