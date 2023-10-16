import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoNotificationsOutline } from 'react-icons/io5';

const NavBar = () => {
  return (
    <div className="bg-white w-[80%] h-[90px] rounded-3xl ml-5 mr-5 py-4 px-8">
      <div className="flex flex-row items-center justify-between ">
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-white p-2 pl-9 rounded-2xl w-[280px] border-2 border-[#eeeeee]"
          />
          <div className="absolute top-3 left-2">
            <CiSearch size={20} />
          </div>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <p className="font-serif font-thin text-xl text-[#999999]">
            Saturday, May 3, 2013
          </p>
          <div className="relative">
            <div className="rounded-full bg-red-500 w-5 h-5 flex items-center justify-center shadow-md absolute top-0 right-0 -mt-1">
              <span className="text-white text-xs">3</span>
            </div>
            <IoNotificationsOutline size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
