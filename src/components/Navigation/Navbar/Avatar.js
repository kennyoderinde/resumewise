import React, { useState } from 'react';
import defaultAvatar from '../../assets/avatar-frame.svg';
import { BiSolidDownArrow } from "react-icons/bi";



const Avatar = ({ accountPage, signOut }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleModalClick = (path) => {
    setShowModal(false);
    window.location = path; // Redirect to the specified path
  };

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
    >
      <div className='flex space-x-2 group'>
        <img src={defaultAvatar} alt='' className=" flex w-10 h-10 sm:mt-4 mt-20 ml-6" />
        < BiSolidDownArrow size={24} className=' text-[#090c13] absolute hover:text-[#0AC5A8] ml-10' />
      </div>
      {showModal && (
        <div
          className=' sm:grid absolute  sm:rounded-lg sm:w-36 sm:h-20 sm:top-16 top-24 sm:-left-12 left-14 p-2 bg-[#F5F5F5] 'style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}
          onMouseLeave={() => setShowModal(false)}
        >
          <p
            className='whitespace-nowrap font-quicksand font-semibold text-[#1b263b] text-base hover:text-[#0AC5A8]'
            onClick={() => handleModalClick('/account-setting')}
          >
            {accountPage}
          </p>
          <p
            className='whitespace-nowrap font-quicksand font-semibold text-[#1b263b] text-base hover:text-red-500'
            onClick={() => handleModalClick('/sign-out')}
          >
            {signOut}
          </p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="relative sm:w-20 sm:h-12 sm:-left-10">
      <Avatar accountPage="Account Setting" signOut="Sign Out" />
    </div>
  );
};

export default App;
