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
      <>
             <section className="w-full h-[576px] rounded-t-29xl bg-blueviolet-200 rounded-b-none overflow-hidden shrink-0 flex flex-col items-end justify-start pt-24 px-24  box-border relative gap-[243.7px] text-left text-lg text-white font-dm-sans">
              <div className=" h-[199px] flex flex-row items-start justify-start gap-[544.5px]">
                <div className="h-32 w-[418.5px] flex flex-col items-start justify-start gap-[18px]">
                  <b className="w-[179px] h-[23px] relative [text-decoration:underline] tracking-[-0.02em] leading-[130.19%] inline-block z-[1]">
                    hey@slashon.agency
                  </b>
                  <b className="w-[418.5px] h-[46px] relative [text-decoration:underline] tracking-[-0.02em] leading-[130.19%] inline-block z-[1]">
                    1st floor, 264-265, Dr. Annie Besant Rd, Worli, Mumbai, Maharashtra,
                    400051
                  </b>
                  <b className="w-[121px] h-[23px] relative [text-decoration:underline] tracking-[-0.02em] leading-[130.19%] inline-block z-[1]">
                    +91 61118 12xxx
                  </b>
                </div>
                <div className="h-[199px] w-[285px] flex flex-row items-start justify-start gap-[195px] z-[1] text-center">
                  <div className="h-[199px] w-[0.8px] flex flex-col items-start justify-start">
                    <div className="w-[0.8px] h-[199px] flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[0.8px] h-[] box-border flex flex-row items-center justify-start py-1.5 px-0 border-b-[0.8px] border-solid border-gray-600">
                        <b className="h-[23px] w-[52px] relative flex items-center justify-center">
                          Home
                        </b>
                      </div>
                      <div className="w-[0.8px] h-[] box-border flex flex-row items-center justify-start py-1.5 px-0 border-b-[0.8px] border-solid border-gray-600">
                        <b className="h-[23px] w-[81px] relative flex items-center justify-center">
                          About Us
                        </b>
                      </div>
                      <div className="w-[0.8px] h-[] box-border flex flex-row items-center justify-start py-1.5 px-0 border-b-[0.8px] border-solid border-gray-600">
                        <b className="h-[23px] w-[76px] relative flex items-center justify-center">
                          Services
                        </b>
                      </div>
                      <div className="w-[0.8px] h-[] box-border flex flex-row items-center justify-start py-1.5 px-0 border-b-[0.8px] border-solid border-gray-600">
                        <b className="h-[23px] w-[47px] relative flex items-center justify-center">
                          Work
                        </b>
                      </div>
                      <div className="w-[0.8px] h-[] box-border flex flex-row items-center justify-start py-1.5 px-0 border-b-[0.8px] border-solid border-gray-600">
                        <b className="h-[23px] w-[99px] relative flex items-center justify-center">
                          Contact Us
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="h-[76.3px] w-[0.8px] flex flex-col items-start justify-start gap-[6.3px]">
                    <div className="w-[0.8px] h-[35px] box-border flex flex-row items-start justify-start py-1.5 px-0 relative border-b-[0.8px] border-solid border-gray-600">
                      <b className="h-[23px] absolute !m-[0] top-[calc(50%_-_11.5px)] right-[-89.2px] inline-block">
                        Instagram
                      </b>
                    </div>
                    <div className="w-[0.8px] h-[35px] box-border flex flex-row items-start justify-start py-1.5 px-0 relative border-b-[0.8px] border-solid border-gray-600">
                      <b className="h-[23px] absolute !m-[0] top-[calc(50%_-_11.5px)] right-[-74.2px] inline-block">
                        LinkedIn
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                {/* <img
                  className="absolute top-[0px] left-[0px] w-[1440px] h-[615px]"
                  alt=""
                  src="/rectangle-47.svg"
                /> */}
                <img
                  className="absolute top-[98.5px] left-[287px] w-[18px] h-[18px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/-icon-file-copy.svg"
                />
                <img
                  className="absolute top-[203.5px] left-[229px] w-[18px] h-[18px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/-icon-file-copy.svg"
                />
                <img
                  className="absolute top-[349px] left-[96px] w-[914.1px] h-[212.7px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className="w-[285.8px] h-[23px] flex flex-row items-start justify-start gap-[11.9px] z-[1]">
                <b className="h-[23px] w-[135px] relative flex items-center">
                  © Slashon 2023
                </b>
                <div className="h-[14.5px] w-1.5 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                  <div className="w-1.5 h-1.5 relative rounded-[50%] bg-white" />
                </div>
                <b className="h-[23px] w-[121px] relative flex items-center">
                  Privacy Policy
                </b>
              </div>
             </section>
             

            
            </>
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