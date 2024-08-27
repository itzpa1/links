import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { RiApps2AddLine } from "react-icons/ri";

const Card = () => {
    return (
        <div className='cursor-pointer hover:scale-[1.010] duration-150 shadow-md shadow-black/20 hover:shadow-lg w-[65%] h-[70px] bg-white rounded-full p-3 flex justify-between items-center '>
            <div className="top flex justify-between items-center w-full">
                <RiApps2AddLine className='text-xl' />
                <h1 className="bar_name text-base font-medium">Claim your linksDir</h1>
                <BsThreeDots className='text-base text-black/70 hover:text-black rotate-90 mr-2' />
            </div>
            <div className="card w-full border">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Card
