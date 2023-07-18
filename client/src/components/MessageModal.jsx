import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const MessageModal = ({message,setMessageModal,path}) => {
    const navigate = useNavigate()
//   const springProps = useSpring({
//     from: { opacity: 0, transform: 'translate3d(0, 0, 0)' },
//     to: async (next, cancel) => {
//       await next({ opacity: 1, transform: 'translate3d(100%, 0, 0)' });
//       await next({ transform: 'translate3d(calc(50vw - 250px), 0, 0)' });
//     },
//     config: { tension: 200, friction: 20 },
//   });

  return (
    <div className='inset-0 fixed w-[100vw] h-full flex items-center justify-center bg-light-primary bg-opacity-50 text-white flex-col'>
        <div className=' flex gap-2 items-center justify-center w-[500px] px-[2rem] py-[2rem] rounded-sm bg-light-primary relative '>
        <div className='absolute right-[20px] top-[20px] text-xl cursor-pointer'
        onClick={() => {
            setMessageModal(false)
            path!=='' && navigate(path)
        }}
        >
          <RxCross2 />
        </div>
        <BsCheck2Circle className='text-xl' />
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default MessageModal;


