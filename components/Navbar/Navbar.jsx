import React,{useState} from "react";
import Link from 'next/link';


import NavLinks from "./NavLinks";

import { FaOpencart , FaRegUser,FaRegHeart} from "react-icons/fa";

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-4 md:w-auto w-full flex justify-between">
          <div className="font-[Sacramento] text-3xl font-semibold ">  Caftan Intemporel</div>
 
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden  items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
           Acceuil
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
      
        <div className="m-2 flex flex-row flex-wrap justify-between gap-12 ">
        < FaRegUser className="md:block hidden" size="20px"
     />
       
       
    
        <FaOpencart   className="md:block hidden" size="30px"
     />
       
        <FaRegHeart    className="md:block hidden" size="20px"
     />
        
       </div>
       
        {/* Mobile nav */}
        
        <ul
          className={`
        md:hidden  bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <Link href="/" className="py-7 px-3 inline-block">
              Contact
            </Link>
          <div className="  md:block  ">
        
            <div className=" mt-10 md:block  ">
          < FaRegUser className="md:block " size="20px"
     />
       </div>
       
       <div className="mt-10  md:block  ">
        <FaOpencart   className="md:block " size="30px"
     /> </div>
       <div>
        <FaRegHeart    className=" mt-10 md:block " size="20px" />
     </div>
        </div>
       
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;