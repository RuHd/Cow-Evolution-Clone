
export const defineAxis = () => Math.floor(Math.random() * 2) // Function to decide direction of animal movements and the axis

// Merge Cows, create a new one with new mutation and rip off the two cows from the group
export const mergeCows = (cow1, cow2, setgroupAnimals, setpairSelected, groupAnimals) => {
    
    if (cow1.mutation == cow2.mutation) {
        let posX = Math.abs(cow1.x + cow2.x) / 2
        let posY = Math.abs(cow1.y + cow2.y) / 2

        setgroupAnimals(prev => prev.filter(value => value.id !== cow1.id))
        setgroupAnimals(prev => prev.filter(value => value.id !== cow2.id))


        setgroupAnimals(prev => [...prev, {id: prev.length - 1, x: posX, y: posY, mutation: cow1.mutation + 1}])
        
    }      
}

// Function to reset score and animal group

export const resetGame = (setgroupAnimals, setpairSelected, setscore) => {
    setgroupAnimals([])
    setpairSelected([])
    setscore(0)
}