import React, { useRef, useState } from 'react'

const Hero = () => {
    const [currentIndex,setCurrentIndex] =  useState(2);
    const [hasCLicked,setHasCLicked] = useState(false);
    const [isLoading,setIsLoading] = useState(true);
    const [loadedVideos,setLoadedVideos] = useState(0);

    const totalVdo = 4;
    const nextVdoRef = useRef(null);
    const handleVdoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
      };

    const handleMiniVdoClick = () => {
      setHasCLicked(true);
      setCurrentIndex((prevIndex) => (prevIndex % totalVdo) + 1);
    }

    const getVdoSrc = (index) => `../../public/videos/hero-${index}.mp4`;
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                    <div onClick={handleMiniVdoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in 
                    hover:scale-100 hover:opacity-100'>
                        <video muted loop
                         src={getVdoSrc(currentIndex)}
                         ref={nextVdoRef}
                         id='current-video'
                         className='size-64 origin-center scale-150 onject-cover object-center'
                         onLoadedData={handleVdoLoad}></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero