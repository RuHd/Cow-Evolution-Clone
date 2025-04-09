import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import cowIcon from '../../../public/cowIcon.png'
import './InfiniteImageRoll.scss'




const InfiniteImageRoll = () => {

    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)

    const [imgGroup, setimgGroup] = useState([image1, image2, image3])

    useEffect(() => {
      const interval = setInterval(() => {
        if (imgGroup[2].current.getBoundingClientRect().x > 2501) {
            setimgGroup(prev => [prev[2], prev[0], prev[1]])
            console.log(imgGroup)
        }
        
      },500)
    
      return () => {
        clearTimeout(interval)
      }
    }, [imgGroup])
    
  return (
    <section className='animatedBackground'>
        {imgGroup.map((value, id) => {
            return (
                <Image src={cowIcon} alt='cow icon' ref={value} key={id}/>
            ) 
        })}
        
    </section>
  )
}

export default InfiniteImageRoll