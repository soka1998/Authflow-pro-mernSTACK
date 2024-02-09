import React from 'react'


const Button = ({ children, className, ...props }) => {
 
      
  return (
    <>
      <button
      className={`bg-purple-500 text-white font-bold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
    </>
  )
}


export default Button