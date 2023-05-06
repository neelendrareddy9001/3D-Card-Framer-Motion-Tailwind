import React from 'react';
//Nike image
import NikeImg from '../image/nike.png';

//logo image
import LogoImg from '../image/logo.svg';

  const Card = () => {
    const colors = [
        {value: "#b6a179"},
        {value: "#272425"},
        {value: "#6389cb"},
        {value: "#f2c758"},
        {value: "#ffffff"}
    ];
  return (
    //card Wrapper
        <div className='w-[426px] min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-pointer'>
            {/* cardl logo */}
            <div className='mb-6'>
                <img src={LogoImg} alt=''/>
            </div>

            {/* cardl title */}
            <div>title</div>

            {/* cardl subtitle */}
            <div>subtitle</div>

            <div>
                <button>button</button>
                <div>price</div>
            </div>

            <ul>
                {/*Colors*/}
                {colors.map((color, index) => {
                    return (
                        <li
                            key={index}
                            className='w-8 h-8 rounded-full cursor-pointer'
                            style={{backgroundColor: color.value}}
                        ></li>
                    )
                } )}
            </ul>

            {/*Card Image*/}
            <div>
                <img src={NikeImg} alt='' draggable='false'/>
            </div>
        </div>
  )
}

export default Card
