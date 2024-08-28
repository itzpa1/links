import React from 'react';
import { BsThreeDots } from "react-icons/bs";

const LongBar = ({data}) => {
    console.log(data)
    return (
        <div className='cursor-pointer hover:scale-[1.010] duration-150 shadow-md shadow-black/20 hover:shadow-lg w-full h-[70px] bg-white rounded-3xl p-3 flex justify-between items-center '>
            <div className="bar_logo w-[50px] overflow-hidden rounded-full ">
                <img src={data.img} alt="" />
            </div>
            <h1 className="bar_name text-base font-medium">Claim your links.Dir</h1>
            <BsThreeDots className='text-base text-black/70 hover:text-black rotate-90 mr-2' />
        </div>
    )
}

export default LongBar
