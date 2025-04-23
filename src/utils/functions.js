import { v4 as uuid } from "uuid"

export const defineAxis = () => Math.floor(Math.random() * 2) // Function to decide direction of animal movements and the axis

export const mergeCows = (cow1, cow2, setgroupAnimals, setmessageOn, setnumMinotaurs) => {
    debugger
    if (cow1.mutation == cow2.mutation && cow1.mutation < 4) {
        let posX = (cow2.x + cow1.x) / 2
        let posY =  (cow2.y + cow1.y) / 2

        
        setgroupAnimals(prev => [...prev, {id: uuid(), x: posX, y: posY, mutation: cow1.mutation + 1}])
        setgroupAnimals(prev => prev.filter(value => (value.id !== cow1.id && value.id !== cow2.id) ? value : null))

        if (cow1.mutation + 1 == 4) setnumMinotaurs(prev => prev + 1)
        
    } else {
        console.log("Not a compatible pair!")
        setmessageOn(true)
    }
}

export const resetGame = (setgroupAnimals, setpairSelected, setnumMinotaurs) => {
    setgroupAnimals([])
    setpairSelected([])
    setnumMinotaurs(0)
}