import React from 'react'
import Card from './Card'

const rightphotos = () => {
  const data = [{
    image:"https://images.unsplash.com/photo-1760351561005-718d0e766dac?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag:"Satisfied",
    color:"blue"
  },
  {
    image:"https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag:"Ambitious",
    color:"pink"
  },
  {
    image:"https://images.unsplash.com/photo-1769071167022-2acdf0dcf9f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3RvbmFsJTIwcGVyc29ufGVufDB8fDB8fHww",
    tag:"Passionate",
    color:"orange"
  },
  {
    image:"https://plus.unsplash.com/premium_photo-1663040322976-62fee8644950?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3RvbmFsJTIwcGVyc29ufGVufDB8fDB8fHww",
    tag:"Charming",
    color:"yellow"
  },
  {
    image:"https://plus.unsplash.com/premium_photo-1661526121111-dfcb516bb82f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXN0b25hbCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    tag:"Satisfied",
    color:"royalblue"
  }
  ]
  return (
    <div className='flex flex-nowrap overflow-x-auto gap-10 mt-15 '>
      {
        data.map(function(e,idx){
          return <Card img = {e.image} tag = {e.tag} color = {e.color} number = {idx+1} />
        })
      }
    </div>
  )
}

export default rightphotos