// components/Navbar.js

import FrameComponent3 from "../Home/components/FrameComponent3";
import FrameComponent4 from "../Home/components/FrameComponent4";
import FrameComponent6 from "../Home/components/FrameComponent6";
import NavbarSlashon from "../Home/components/NavbarSlashon";

const Navbar = () => {
    return (
        <nav className="bg-white px-4 py-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Slashon</div>
                <div className="space-x-4">
                    <a href="#about" className="hover:text-gray-700">About Us</a>
                    <a href="#solutions" className="hover:text-gray-700">Solutions</a>
                    <a href="#projects" className="hover:text-gray-700">Projects</a>
                    <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Us</a>
                </div>
            </div>
        </nav>
    );
};




// components/HeroSection.js

const HeroSection = () => {
    return (
             <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[105px] pr-5 pl-[21px] box-border max-w-full text-center text-35xl text-gray-100 font-dm-sans mq450:pb-[68px] mq450:box-border">
        <div
          className="w-[1055.3px] flex flex-col items-start justify-start gap-[36px] max-w-full cursor-pointer z-[1] mq800:gap-[18px]"
        //   onClick={onHEADERContainerClick}
        >
           <div className="self-stretch flex flex-row items-start justify-start py-0  pl-[47.2px] box-border max-w-full mq1125:pl-[23px] mq1125:pr-[23px] mq1125:box-border">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.07em] leading-[111%] font-extrabold font-inherit inline-block max-w-full mq450:text-13xl mq450:leading-[36px] mq800:text-24xl mq800:leading-[48px]">
              <p className="m-0">We are a New Age Creative Agency</p>
              <p className="m-0">
                offering Unique Solutions to give you the best Digital
                Experiences
              </p>
            </h1>
          </div>
          <b
            className="self-stretch relative text-[31.5px] tracking-[-0.06em] leading-[30px] text-blueviolet-200 mq450:text-lgi mq450:leading-[18px] mq800:text-[25px] mq800:leading-[24px]"
            data-scroll-to="yourPartnerToCreate"
          >{`Your partner to Create, Innovate & Strategise `}</b>
        </div>
        
        </section>
    
        
    );
};

// components/MainContent.js

const MainContent = () => {
    return (
      
                <section className="w-[1412px] flex flex-col items-center justify-center pt-0 pb-[172px]  pl-0 box-border max-w-full mq800:pb-[73px] mq800:box-border mq1350:pb-28 mq1350:box-border">
        {/* <img
          className="w-[1344px] relative rounded-29xl max-h-full overflow-hidden max-w-full z-[1]"
          loading="lazy"
          alt=""
          src="/logomark-1.svg"
        /> */}
        <FrameComponent4 />
        <FrameComponent3 />
      </section>
        
    );
};

// components/Footer.js

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <p>© 2023 Slashon. All rights reserved.</p>
        </footer>
    );
};

// App.js

const Demo = () => {
    return (
        <div>
                <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border leading-[normal] tracking-[normal] text-center text-5xl  font-dm-sans">
      <div className="w-[774px] h-[774px] absolute !m-[0] top-[-229.5px] left-[-481.5px] [filter:blur(576px)] rounded-[50%] bg-greenyellow-200" />

            <FrameComponent6 />
            <HeroSection />
            <MainContent />
            <Footer />

        </div>
        
        </div>
    );
};

export default Demo;