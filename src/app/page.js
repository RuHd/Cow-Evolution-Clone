'use client'

import Image from "next/image";
import  "./page.scss";
import Animal from "@/components/Animal/Animal";
import { useEffect, useState } from "react";

export default function Home() {
  const [groupAnimals, setgroupAnimals] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
        let randX = Math.random() * 608 + 90
        let randY = Math.random() * 427 + 90

        if(groupAnimals.length < 8) {
          setgroupAnimals(prev => [...prev, {x: randX, y: randY}])
        }
    }, 3000)
  
    return () => {
      clearInterval(interval)
    }
  }, [groupAnimals])
  
  return (
    <div className="game">
        <h1>Cow Evolution Clone</h1>
        <div className="field">
            {
              groupAnimals.map((value,index) => {
                return (
                  <Animal key={index} posX={value.x} posY={value.y}/>
                )
              })
            }
        </div>
        <footer>
          <button>Reset</button>
          <p>Score: {}</p>
        </footer>
    </div>
  );
}
