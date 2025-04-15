import React, { useEffect } from 'react'

const AlertMsg = ({setmessageOn}) => {

    useEffect(() => {
      setTimeout(() => setmessageOn(false), 3000)
    
      return () => {
        
      }
    }, [])
    
  return (
    <span style={{backgroundColor: "red", fontWeight: "bold", fontSize: "2em", color: "white", padding: "5px", position: "fixed", top: "0", left: "50%", transform: "translateX(-50%)"}}>The pair is not compatible for a merge!</span>
  )
}

export default AlertMsg