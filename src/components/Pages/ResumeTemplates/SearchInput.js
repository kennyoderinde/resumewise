// import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { ImNotification } from "react-icons/im";


// const SearchInput = ({ items, onSearch }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setInputValue(searchTerm);
//     const filteredItems = items.filter((item) =>
//       item.toLowerCase().includes(searchTerm)
//     );
//     onSearch(filteredItems);
//   };

//   const handleIconClick = () => {
//     if (!inputValue) {
//       setShowAlert(true);
//     }
//   };

//   const hideAlert = () => {
//     setShowAlert(false);
//   };

//   const Alert = () => (
//     <div
//       className=" z-20 relative p-2 border-2 border-stone-400 top-16 left-0 bg-gray-100 w-56 h-14 flex items-center justify-center text-gray-500 whitespace-nowrap"
//       onClick={hideAlert}
//     >
//       <ImNotification className=' text-amber-500 text-2xl'/>
//       Please fill in this space
//     </div>
//   );

//   return (
//     <div className=" ml-59rem mt-8 z-10 hidden fixed sm:w-80 sm:h-24 sm:flex sm:justify-end sm:bg-stone-200 sm:border border-stone-400 sm:p-4 ">
     
//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={handleSearch}
//         value={inputValue}
//         className=" fixed sm:w-72 sm:h-14 p-2 outline-none border border-stone-400"
//       />

//       <div
//         className=" fixed sm:w-16 sm:h-14 sm:flex sm:justify-end sm:bg-black hover:bg-lime-500 sm:border sm:px-5"
//         onClick={handleIconClick}
//       >
//         <FaSearch className="text-white sm:text-lg mt-5" />
//       </div>
      
//       {showAlert && <Alert />}
//     </div>
//   );
// };

// export default SearchInput;
import React from 'react'

const SearchInput = () => {
  return (
    <div>SearchInput</div>
  )
}

export default SearchInput