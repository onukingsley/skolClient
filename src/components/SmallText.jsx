import React from 'react';

const SmallText = ({text}) => {
    return (
        <div>
          <p className='md:text-l text-md font-medium'>
              {text}
          </p>
        </div>
    );
};

export default SmallText;