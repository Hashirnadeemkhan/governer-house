import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
    
  return (
<button className="bg-custom-blue text-white py-4 rounded-lg tracking-wider font-semibold px-12 w-full sm:w-auto sm:text-lg transition-all text-sm hover:translate-y-1">
  {text}
</button>

  )
}

export default Button
