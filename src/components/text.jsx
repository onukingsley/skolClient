import React from 'react';

const HeaderText = ({text, className}) => {
    return (
        <div className={className}>
            <p className='md:text-2xl pt-3 text-xl font-bold '>
                {text}
            </p>
        </div>
    );
};

export default HeaderText;