import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({text, color, link, isLogin}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  }

  return (
    <button  onClick={handleClick} className="bg-blue-700 px-5 py-1">
        {text} 
    </button>
  )
}

export default CustomButton


