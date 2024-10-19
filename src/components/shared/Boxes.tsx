import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData

interface BoxesProps {
  text: string;
  imageSrc: StaticImageData; // Use StaticImageData type here
}

const Boxes: FC<BoxesProps> = ({ text, imageSrc }) => {
  return (
    
        <div className='hover:scale-105 duration-200 transition-all shadow-xl py-5 rounded-xl w-full'>
          <Image
            className='rounded-t-xl'
            src={imageSrc} // Correctly passing StaticImageData object here
            alt={text}
           
          />
          <h4 className='mt-3'>{text}</h4>
        </div>
  );
};

export default Boxes;
