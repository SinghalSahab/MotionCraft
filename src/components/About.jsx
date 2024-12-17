import React from 'react'

const About = () => {
  return (
    <div id='about' classname="min-h-screen w-screen" >
        <div className='relative m-8mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm md:text-[10px] uppercase'>Welcome to Zentry</h2>
            <div className='mt-5 text-center text-4xl leading-[0.8] md:text-[6rem] uppercase'>
            Disc<b>o</b>ver the world's<br /> largest shared <b>a</b>dventure
            </div>
            <div className='about-subtext'>
                <p>The Game of Games begins-your life, now an epic MMORPG</p>
                <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
            </div>
        </div>
         <div className='h-dvh w-screen ' id='clip'></div>
    </div>
  )
}

export default About