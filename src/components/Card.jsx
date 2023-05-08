import React from 'react';

//import framer motion hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';

//Nike image
import NikeImg from '../image/nike.png';

//logo image
import LogoImg from '../image/logo.svg';

  const Card = () => {
    
     const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    
    const colors = [
        {value: "#b6a179"},
        {value: "#272425"},
        {value: "#6389cb"},
        {value: "#f2c758"},
        {value: "#ffffff"}
    ];
  return (
    //card wrapper
        <div style={{perspective: 2000}}>
            {/* card */}
            <div className='w-[426px] min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'>
                {/* card logo */}
                <div className='mb-6'>
                    <img src={LogoImg} alt=''/>
                </div>
                
                {/*card title */}
                <div className='text-5xl mb-6 font-extrabold'>Nike Air Max Pre-Day</div>

                {/*subtitle */}
                <div className='max-w-[300px] text-[]#000000'>
                    <p>Taking the classic look of heritage Nike Running into new realm, the
                        Nike Air Max Pre-Day brings you a fast-paced look that's ready for
                        today's world.
                    </p>
                </div>

                {/*  btn & price wrapper */}
                <div className='flex items-center gap-x-[20px] mt-4'>
                    <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>Add to Bag</button>
                    <div className='text-[24px] font-bold text-[#000000]'>$495.00</div>
                </div>
                {/* colors */}
                <ul className='flex gap-x-[10px] mt-6'>
                    {colors.map((color, index) => {
                        return (
                            <li
                                key={index}
                                style={{backgroundColor: color.value}}
                                className='w-8 h-8 rounded-full cursor-pointer'
                            ></li>
                        )
                    })}
                </ul>
                {/* card image */}
                <div className='absolute top-12 -right-64 w-[620px]'>
                    <img src={NikeImg} alt=''  draggable='false'/>
                </div>
            </div>
        </div>
  )
}

export default Card
