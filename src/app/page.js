'use client'

import  "./page.scss";
import Animal from "@/components/Animal/Animal";
import { mergeCows } from "@/utils/functions";
import { useEffect, useState } from "react";

export default function Home() {
  const [groupAnimals, setgroupAnimals] = useState([])
  const [pairSelected, setpairSelected] = useState([])
  const [score, setscore] = useState(0)

  useEffect(() => {
    if (pairSelected.length == 2) {
          debugger
          mergeCows(pairSelected[0], pairSelected[1], setgroupAnimals, setpairSelected)
          
    }
    
        
    const interval = setInterval(() => {
        let randX = Math.random() * 608 + 90
        let randY = Math.random() * 427 + 90

        if(groupAnimals.length < 8) {
          setgroupAnimals(prev => [...prev, {x: randX, y: randY, mutation: 1}])
        }
    }, 3000)
  
    return () => {
      clearInterval(interval)
    }
  }, [groupAnimals, pairSelected])
  
  console.log(pairSelected)
  return (
    <div className="game">
        <h1>Cow Evolution Clone</h1>
        <div className="field">
            {
              groupAnimals.map((value,index) => {
                return (
                  <Animal 
                    key={index} 
                    posX={value.x} 
                    posY={value.y} 
                    groupAnimals = {groupAnimals} 
                    setgroupAnimals = {setgroupAnimals} 
                    id = {index}
                    pairSelected = {pairSelected}
                    setpairSelected = {setpairSelected}
                    mutation={value.mutation}
                  />
                )
              })
            }
        </div>
        <footer>
          <button>Reset</button>
          <p>Score: {score}</p>
        </footer>
    </div>
  );
}
