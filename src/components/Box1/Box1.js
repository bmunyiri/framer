import React from 'react'
import { motion } from "framer-motion"

function Box1() {

    return (
      <motion.div
          className='box-container'
    
      animate={{
          x: 700,
          rotate:[0,5,0,5,0]
         
      }}

            whileHover={{
                scale: 0.25
            }}
          
         initial={{
              opacity:0.75
          }}
          
          transition={{
    
              type: 'tween',
              duration:3
                           
          }}
          
      >
          <div className='box'>
            
          </div>
        </motion.div>
  )
}

export default Box1