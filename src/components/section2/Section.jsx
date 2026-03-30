import React from 'react'
import Lefttext from './Lefttext'
import Rightphotos from './Rightphotos'
const Section = () => {
  return (
    <div className='w-[90vw] m-auto flex gap-15 '>
        <Lefttext />
        <Rightphotos/>
    </div>
  )
}

export default Section