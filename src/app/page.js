'use client'

import  "./page.scss";
import Animal from "@/components/Animal/Animal";
import { mergeCows, resetGame } from "@/utils/functions";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import useSound from "use-sound";
import AlertMsg from "@/components/Popups/AlertMsg";
import Modal from "@/components/Modal/Modal";
// import song from "../../public/song.mp3"



export default function Home() {
  const [play] = useSound()
  const [groupAnimals, setgroupAnimals] = useState([])
  const [pairSelected, setpairSelected] = useState([])
  const [messageOn, setmessageOn] = useState(false)
  const [numMinotaurs, setnumMinotaurs] = useState(0)

  useEffect(() => {
    if (pairSelected.length == 2) {
          debugger
          mergeCows(pairSelected[0], pairSelected[1], setgroupAnimals, setmessageOn, setnumMinotaurs )

          setpairSelected([])  
    }
  
    const interval = setInterval(() => {
        let randX = Math.random() * 484 + 151
        let randY = Math.random() * 303 + 151

        if(groupAnimals.length < 13) {
          setgroupAnimals(prev => [...prev, {id: uuid(), x: randX, y: randY, mutation: 1}])
        }
        
    }, 500)
  
    return () => {
      clearInterval(interval)
    }
  }, [groupAnimals, pairSelected, messageOn])
  console.log(numMinotaurs)
    return (
    <>
      { numMinotaurs == 5 && <Modal func = {{setgroupAnimals,setpairSelected,setnumMinotaurs}}/>}
      
      <div className="game">
      
      { messageOn && <AlertMsg setmessageOn = {setmessageOn}/>}

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
          <button onClick={() => resetGame(setgroupAnimals,setpairSelected,setnumMinotaurs)}>Reset</button>
          <h2>Get 10 Minotaurs to ascend</h2>
      </div>
    </>
  );
}
