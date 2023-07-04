import React,{useState} from 'react'

const Button = ({content}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 100); // Adjust the duration to match your transition duration
      };
  return (
    <div
    className={`bg-light-primary flex items-center justify-center text-white px-4 py-2 rounded-md cursor-pointer hover:bg-opacity-90  ${
        isClicked ? 'scale-95' : ''
      }  transform transition-all duration-100 ease-in-out ${content==='Search Jobs' && 'h-[55px]'} `}
      onClick={handleClick}
    >
{content}
    </div>
  )
}

export default Button