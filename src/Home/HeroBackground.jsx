import React from 'react'

const HeroBackground = ({bgImage,bgMobile}) => {
  return (
    <div>
        <div className='block md:hidden relative overflow-hidden'>
 <img
    src={bgMobile}
    alt="Hero Image"
    className="w-[650px] h-[200px] object-cover"
  />
        </div>
        <div   className="w-full h-[440px] bg-cover  hidden md:block bg-center"
         style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', // Ensures the image covers the div
        backgroundPosition: 'center',
       
      }}
        >

        </div>
    </div>
  )
}

export default HeroBackground