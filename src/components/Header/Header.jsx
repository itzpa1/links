import React from 'react';
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
    return (
        <header className='header w-full pt-6 flex flex-col items-center px-3'>
            <div className="more_icon w-full flex justify-end ">
                <div className="more_btn p-3 bg-black/20 hover:bg-black/10 duration-300 rounded-full cursor-pointer">
                    <BsThreeDots className='text-base text-white' />
                </div>
            </div>
            <div className="banner flex flex-col items-center w-full">
                <div className="logo w-[90px] overflow-hidden rounded-full">
                    <img className='w-full h-full' src="https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.amazonaws.com%2FhSjVHxkRkq977DkN96pGXY.png&w=256&q=75" alt="" />
                </div>
                <h1 className="name text-xl font-semibold pt-4">Pawan Kumar</h1>
                <p className="slogan text-base font-medium my-1">Explore, Profile Beautiful Hai  &gt; &lt; </p>
            </div>
        </header>
    )
}

export default Header
