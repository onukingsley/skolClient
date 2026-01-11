import React from 'react';
import {Images} from "../utils/constants";
import {ArrowRightIcon} from '@heroicons/react/24/solid'

const NotificationTile = ({title,cardText,subText, content, subject,type,image ,iconText}) => {
    return (
        <div className='min-w-[80%] m-auto  rounded-xl p-6 shadow-md   m-2  space-y-3    bg-white shadow-md mb-6'>
            <div>
                <div className='pb-6 border-b flex md:flex-col  justify-center  border-gray-300'>
                    <div className='flex md:flex-row md:text-start text-center flex-col space-x-3 items-center '>

                           <img src={Images.profile1} className={' rounded w-16 h-16'} alt=""/>
                           <div className={'space-y-2 '} >

                                <div className='flex justify-center md:justify-start mt-4'>
                                    <p className='px-2 rounded incline-block bg-[#5B99EA] text-sm text-white font-normal w-auto w-fit'>{cardText||'Project'}</p>

                                </div>
                               <div>
                                   {title}
                               </div>
                               <div className={' text-[#828D9F] space-x-3'}>
                                   <span>{subText||'29 Jan'}</span>
                                   <span> | </span>
                                   <span> {subject}</span>
                               </div>
                           </div>

                    </div>
                </div>

                <div>
                    <p className='mb-10 pt-6 text-gray-600'>{content}</p>
                    <div className='flex text-[#5cb377] items-center gap-x-1'>
                        <p className=''>{iconText??`view More`}  </p>
                        <ArrowRightIcon className='w-5 h-5'/>
                    </div>
                </div>

            </div>
            <div></div>
        </div>
    );
};

export default NotificationTile;