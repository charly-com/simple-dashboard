import girl from "../assets/profile.jpeg";
import { FiEdit } from "react-icons/fi";
import { TbSettings2 } from "react-icons/tb";
import { GrFavorite } from "react-icons/gr";
import { PiEnvelopeSimpleOpen } from "react-icons/pi";
import { PiCirclesFourLight } from "react-icons/pi";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";

const SideBar = () => {
  return (
    <div className="bg-white w-[20%] h-screen rounded-3xl items-center flex flex-col">
      <div className="p-8">
        <h1 className="text-2xl font-sans font-bold text-[#999999]">
          <span className="text-2xl font-sans font-bold text-[#1a390d]">
            Mima
          </span>
          Booking
        </h1>
      </div>
      <div className="rounded-full overflow-hidden h-16 w-16 border-double border-4 border-[#1a390d] relative">
        <img
          src={girl}
          alt="Profile"
          className="w-full h-full object-cover z-10 "
        />
      </div>
      <div className="flex justify-center items-center h-6 w-6 rounded-full text-white bg-[#1a390d] text-xl top-[150px] z-20 absolute">
        <FiEdit />
      </div>

      <p className="p-5 text-[#999999] font-sans text-lg">ilan jan</p>
      <div className="mt-[70%] flex flex-col gap-1  items-center">
        <div className="flex flex-row w-full items-center gap-4 ">
          <BiSolidHomeAlt2 />
          <p className="font-serif font-thin text-sm text-[#999999]">
            Dashboard
          </p>
        </div>
        <div className="flex flex-row w-full items-center gap-4 ">
          <PiCirclesFourLight />
          <p className="font-serif font-thin text-sm text-[#999999]">
            Explore City
          </p>
        </div>
        <div className="flex flex-row w-full items-center gap-4 ">
          <PiEnvelopeSimpleOpen />
          <p className="font-serif font-thin text-sm text-[#999999]">Ticket</p>
        </div>
        <div className="flex flex-row w-full items-center gap-4 ">
          <GrFavorite />
          <p className="font-serif font-thin text-sm text-[#999999]">
            Favourite
          </p>
        </div>
        <div className="flex flex-row w-full items-center gap-4">
          <TbSettings2 />
          <p className="font-serif font-thin text-sm text-[#999999]">
            {" "}
            Settings
          </p>
        </div>
      </div>
      <div className="mt-[50%] flex flex-row  items-center gap-4">
        <AiOutlineRightCircle />
        <p className=" font-serif font-thin text-sm text-[#999999]">Log out</p>
      </div>
    </div>
  );
};

export default SideBar;
