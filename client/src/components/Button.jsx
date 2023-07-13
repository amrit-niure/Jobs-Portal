import React,{useState} from 'react'

const Button = ({content,outline=false}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 100); // Adjust the duration to match your transition duration
      };
  return (
    // ${outline===true ? 'bg-transparent' : "bg-light-primary "} 
    <div
    className={`${outline===true ? 'bg-transparent text-light-primary border-2 border-light-primary' : "bg-light-primary text-white"}  flex items-center justify-center  px-4 py-2 rounded-md cursor-pointer hover:bg-opacity-90  ${
        isClicked ? 'scale-95' : ''
      }  transform transition-all duration-100 ease-in-out `}
      onClick={handleClick}
    >
{content}
    </div>
  )
}

export default Button