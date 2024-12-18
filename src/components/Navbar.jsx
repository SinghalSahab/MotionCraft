import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact']
const Navbar = () => {
    const [isAudioPlaying , setisAudioPlaying] = useState(false);
    const [isIndiacatorActive, setisIndiacatorActive] = useState(false);
    const navcontainerref = useRef(null);
    const audioElementRef = useRef(null);

    const toggleAudioIndicator = () => {
      setisAudioPlaying((prev) => !prev);
      setisIndiacatorActive((prev) =>!prev);
    };

    useEffect(() => {
        if (isAudioPlaying) {
          audioElementRef.current.play();
        } else {
          audioElementRef.current.pause();
        }
      }, [isAudioPlaying]); 
    
  return (
    <div ref = {navcontainerref} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
         <nav className='flex items-center justify-between p-4 size-full '>
            <div className='flex items-center gap-7'>
                <img src="/img/logo.png" alt="logo" className='w-10'/>

                <Button
                id="productButton"
                title="Products"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden
                items-center justify-center gap-1" />
            </div>
            <div className='flex h-full items-center'>
                <div className='hidden md:block'>
                    {navItems.map((item,index) => (
                        <a key={index}
                        href={`#${item.toLowerCase()}`}
                         className='nav-hover-btn'>
                            {item}
                        </a>
                    ))}
                </div>
                <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                    <audio ref={audioElementRef}
                    className='hidden'
                    src="/audio/loop.mp3" loop />
                       {[1,2,3,4].map((bar) => (
                        <div key={bar}
                        className={`indicator-line ${isIndiacatorActive ? 'active' : ''}`}
                        style={{animationDelay: `${bar*0.1}s`}} />

                       ))}
                    
                </button>
            </div>
         </nav>
      </header>  
    </div>
  )
}

export default Navbar;