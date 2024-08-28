import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineFileDownload, MdOutlineLightMode } from 'react-icons/md';
import { RiApps2AddLine } from "react-icons/ri";

const Card = () => {
    return (
        <div className='cursor-default hover:scale-[1.010] duration-150 shadow-md shadow-black/20 hover:shadow-lg w-full bg-white rounded-3xl p-3 flex flex-col gap-4 items-center '>
            <div className="top flex justify-between items-center w-full">
                <MdOutlineLightMode className='text-xl text-black/70 hover:text-black cursor-pointer' />
                <h1 className="bar_name text-base font-medium">Visiting Card</h1>
                <BsThreeDots className='text-base text-black/70 hover:text-black rotate-90 mr-2 cursor-pointer' />
            </div>
            <div className="card w-full px-2 ">
                <div className="card_img relative shadow-sm h-[260px] overflow-hidden rounded-lg">
                    <img className='w-full h-full' src="" alt="" />
                    <div className="card_download_btn absolute bottom-8 right-4 p-2 rounded-full hover:bg-black/10 duration-300 flex items-center justify-center bg-black/20  ">
                        <MdOutlineFileDownload className='text-2xl text-black hover:text-black/70 duration-300 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
