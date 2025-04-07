import React from 'react'

const HomeButton = ({buttonText, buttonFunction }) => {
  return (
    <button onClick={() => {
        buttonFunction();
    }} 
    className="border-black border-2 py-1 px-3 bg-red-400 rounded-md hover:text-white ">{buttonText}</button>
  )
}

export default HomeButton