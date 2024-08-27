import React from 'react';
import { BsThreeDots } from "react-icons/bs";

const LongBar = () => {
    return (
        <div className='cursor-pointer hover:scale-[1.010] duration-150 shadow-md shadow-black/20 hover:shadow-lg w-[65%] h-[70px] bg-white rounded-full p-3 flex justify-between items-center '>
            <div className="bar_logo w-[50px] overflow-hidden rounded-full ">
                <img src="https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.amazonaws.com%2FhSjVHxkRkq977DkN96pGXY.png&w=256&q=75" alt="" />
            </div>
            <h1 className="bar_name text-base font-medium">Claim your linksDir</h1>
            <BsThreeDots className='text-base text-black/70 hover:text-black rotate-90 mr-2' />
        </div>
    )
}

export default LongBar
