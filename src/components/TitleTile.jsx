import React from 'react';
import HeaderText from "./text";
import SmallText from "./SmallText";


const TitleTile = ({header, content, value, icon, arrowIcon,color}) => {
    return (
        <div className='hover:from-gray-300 hover:to-gray-400  bg-gradient-to-br   md:from-[#f9f9f9] md:to-[#f0f0f0] rounded-xl p-6 shadow-md w-full flex m-2  space-y-3 flex-col  justify-center items-center w-[50%] min-h-[50%]  bg-white shadow-md  '>
            <SmallText text={header}/>
            <HeaderText text={content}/>
            <div className='flex'>
                {icon && (arrowIcon)}
                <p className={`text-sm md:text-md ${color ? `text-[${color}]`:'text-black'}`}>{value}</p>
            </div>
        </div>
    );
};

export default TitleTile;