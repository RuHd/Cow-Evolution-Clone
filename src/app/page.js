'use client'


import InfiniteImageRoll from "@/components/InfiniteImageRoll/InfiniteImageRoll";
import  "./page.scss";
import Animal from "@/components/Animal/Animal";
import { mergeCows, resetGame } from "@/utils/functions";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";



export default function Home() {
  const [groupAnimals, setgroupAnimals] = useState([])
  const [pairSelected, setpairSelected] = useState([])
  const [score, setscore] = useState(0)

  useEffect(() => {
    if (pairSelected.length == 2) {
          debugger
          mergeCows(pairSelected[0], pairSelected[1], setgroupAnimals, setpairSelected, groupAnimals, setscore)

          setpairSelected([])
          setscore(prev => prev + 1)
          
          
    }
  
    const interval = setInterval(() => {
        let randX = Math.random() * 484 + 200
        let randY = Math.random() * 303 + 200

        if(groupAnimals.length < 8) {
          setgroupAnimals(prev => [...prev, {id: uuid(), x: randX, y: randY, mutation: 1}])
        }
        
    }, 3000)
  
    return () => {
      clearInterval(interval)
    }
  }, [groupAnimals, pairSelected])

    return (
    <>
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
                      id = {value.id}
                      pairSelected = {pairSelected}
                      setpairSelected = {setpairSelected}
                      mutation={value.mutation}
                    />
                  )
                })
              }
          </div>
          <footer>
            <button onClick={() => resetGame(setgroupAnimals,setpairSelected,setscore)}>Reset</button>
            <p>Score: {score}</p>
          </footer>
      </div>
    </>
  );
}
