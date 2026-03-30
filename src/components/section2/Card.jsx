import React from "react";

const Card = (props) => {
  console.log(props)
  return (
    <div className="w-[280px] h-[80vh] shrink-0 relative overflow-hidden">
      <img
        className=" object-cover rounded-4xl h-[60vh] w-65 "
        src= {props.img}
        alt=""
      />
      <div className="absolute inset-0 flex flex-col gap-30 p-6 text-white">
        <div className="h-6 w-6 text-center  rounded-full bg-white text-black">{props.number}</div>
        <div>
        <p className="mb-10 font-bold w-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus hic vero iste, dicta quos quibusdam?</p>
        <button style={{backgroundColor:props.color}} className= "font-bold bg-blue-700 text-white p-2 rounded-3xl">
          {props.tag}
        </button>
      </div>
      </div>
    </div>
  );
};

export default Card;
