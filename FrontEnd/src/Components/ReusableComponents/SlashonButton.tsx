import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function SlashonButton({ colour }: any) {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <button
        className={`relative cursor-pointer py-[7px] px-[18px] self-stretch rounded-2xl overflow-hidden flex flex-row items-center justify-center gap-[4.5px] border-[1.5px] border-solid border-${colour}-200 bg-${colour}-300`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >

      
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#3D4DFF',
            transformOrigin: 'bottom left',
            transform: hover ? 'scale(5, 5)' : 'scale(0, 0)',
            transition: 'transform 0.5s ease-in-out',
            borderRadius: '0px',
          }}
        />
        <span className={`relative z-10 text-lg tracking-[-0.02em] leading-[130.32%] font-medium font-dm-sans ${hover ? 'text-white' : `text-${colour}-200`}`}>
          Contact Us
        </span>
        <div className="flex flex-col items-center justify-center pt-[6.4px] px-0 pb-0 z-10">
            <FaArrowRight className={`mb-1 ${hover ? 'text-white' : `text-${colour}-200`}`}  />
        </div>
      </button>
    </div>
  );
}

export default SlashonButton;