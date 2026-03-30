import React from 'react'
import Navleft from "./Navleft";
import Navright from "./Navright";
const Nav = () => {
  return (
    <div className='flex w-[90vw] m-auto justify-between mt-5'>
        <Navleft/>
        <Navright/>
    </div>
  )
}

export default Nav