// import React, { useState } from 'react';
// import SearchInput from './SearchInput';
// import { FaSearch } from 'react-icons/fa';


// const Search = () => {
//   const [filteredItems, setFilteredItems] = useState(null);
//   const [isSearchVisible, setIsSearchVisible] = useState(false)


//   const items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

//   const handleSearch = (filteredItems) => {
//     setFilteredItems(filteredItems);
//   };

//   const toggleSearch = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };


//   return (
//     <>
//       <div 
//         onClick={toggleSearch}
//         className=" hidden sm:flex sm:items-end sm:justify-end sm:mt-24 sm:space-x-10 sm:mr-12 ">
//           <FaSearch className="text-black sm:text-base hover:text-lime-500" />
//       </div>
    
    
   
//       <div className='z-0 relative flex '>
       
//       {isSearchVisible && <SearchInput items={items} onSearch={handleSearch} />}

//       {(filteredItems !== null && filteredItems.length > 0) ? (
//         <ul className='  z-40 w-80 flex flex-col ml-59rem mt-28 bg-gray-300'>
//           {filteredItems.map((item, index) => (
//             <li key={index} className='border border-stone-300 h-12 p-3'>
//               {item}
//             </li>
//           ))}
//         </ul>
//       ) : null}

//       </div>
//     </>
//   );
// };

// export default Search;


import React from 'react'

const ResumeTemplates = () => {
  return (
    <div>ResumeTemplates</div>
  )
}

export default ResumeTemplates