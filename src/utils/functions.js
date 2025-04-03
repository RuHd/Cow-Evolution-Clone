// - Seleção de 2 vacas para mutação

// 1- Clicar na vaca para selecionar
//   1- Clicar na vaca
//   2- Congelar o movimento da vaca
//   3- Verificar se a vaca ja foi selecionada, se True, sai da função, 
//   4- Verificar se é a segunda vaca selecionada, se True, verificar se ambas possuem a mesma foto ( mutação). Se TRUE, Fazer a fusão, senão, retorna
//   5 - Se TRUE para vacas com mesma foto, calcular distancia entre as duas e gerar uma nova 
//   6-  Apagar as duas vacas
// 2- Clicar em outra vaca
// 3- tirar as duas vacas e gerar uma nova com uma nova mutação

export const defineAxis = () => Math.floor(Math.random() * 2) // Function to decide direction of animal movements and the axis

// Merge Cows, create a new one with new mutation and rip off the two cows from the group
export const mergeCows = (cow1, cow2, setgroupAnimals, setpairSelected) => {
    debugger
    if (cow1.mutation == cow2.mutation) {
        let posX = Math.abs(cow1.x - cow2.x)
        let posY = Math.abs(cow1.y - cow2.y)

        setgroupAnimals(prev => prev.filter((value,index) => {
            if (index !== cow1.id || index !== cow2.id ) {
                return value
            }
        }))

        setgroupAnimals(prev => [...prev, {id: prev.length - 1, x: posX, y: posY, mutation: cow1.mutation + 1}])
        setpairSelected([])
    }      
}