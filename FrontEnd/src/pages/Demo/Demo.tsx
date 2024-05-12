// components/Navbar.js

import { useEffect } from "react";
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


const Chai = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[201px] pr-5 pl-[21px] box-border max-w-full text-center text-53xl text-gray-100 font-dm-sans mq800:pb-[131px] mq800:box-border">
      <div className="w-[1145px] flex flex-row items-start justify-start gap-[106px] max-w-full mq800:gap-[26px] mq1125:flex-wrap mq1125:gap-[53px]">
        <img
          className=" md:block sm:hidden w-[481px] relative max-h-full object-cover max-w-full mq1125:flex-1"
          loading="lazy"
          alt=""
          src="/mask-group-7@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[100.1px] px-0 pb-0 box-border min-w-[363px] max-w-full mq450:pt-[65px] mq450:box-border mq450:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq800:gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <h1 className="m-0 w-[521px] relative text-inherit tracking-[-0.04em] leading-[100%] font-bold font-inherit inline-block max-w-full mq450:text-24xl mq450:leading-[43px] mq800:text-39xl mq800:leading-[58px]">
                  Let’s have some
                </h1>
                <h1 className="m-0 h-[72px] relative text-inherit tracking-[-0.04em] leading-[100%] font-bold font-inherit inline-block z-[1] text-blueviolet-200 mq450:text-24xl mq450:leading-[43px] mq800:text-39xl mq800:leading-[58px]">
                  <span>Chai Pe Charcha</span>
                  <span className="text-blueviolet-100">!</span>
                </h1>
              </div>
              <div className="relative text-5xl tracking-[-0.02em] leading-[130.19%] font-medium text-left inline-block max-w-full mq450:text-lgi mq450:leading-[25px]">{`We also don’t mind Coffee & Conversations :P`}</div>
            </div>
            <button className="cursor-pointer pt-[11.4px] pb-[16.4px] pr-[22.5px] pl-[167px] bg-blueviolet-300 w-[207.9px] h-[45.7px] rounded-[26.25px] box-border overflow-hidden shrink-0 flex flex-row items-start justify-center gap-[7.5px] border-[1.9px] border-solid border-blueviolet-200 mq450:pl-5 mq450:box-border">
              <div className="ml-[-187.59999999999857px] flex flex-row items-start justify-start gap-[3.7px]">
                <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
                  <div className="w-[39.4px] h-[39.4px] relative rounded-[50%] bg-blueviolet-200" />
                </div>
                <div className="relative text-lg tracking-[-0.02em] leading-[130.32%] font-medium font-dm-sans text-blueviolet-200 text-left whitespace-nowrap">
                  Let’s Collaborate
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5.2px] px-0 pb-0">
                <img
                  className="hidden sm:block w-[18.4px] h-[12.7px] relative object-contain"
                  alt=""
                  src="/vector-9.svg"
                />
              </div>
            </button>
        </div>
      </div>
      </div>
    </section>
  );
}
         

// components/Footer.js

const ChainTest = () =>{

    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
          "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                const targetElement = entry.target;
                targetElement.classList.add("animate");
                observer.unobserve(targetElement);
              }
            }
          },
          {
            threshold: 0.15,
          }
        );
    
        for (let i = 0; i < scrollAnimElements.length; i++) {
          observer.observe(scrollAnimElements[i]);
        }
    
        return () => {
          for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.unobserve(scrollAnimElements[i]);
          }
        };
      }, []);
    return(
        <>
        <section className="self-stretch flex flex-col items-end justify-start pt-0 pb-[180px] pr-1.5 pl-0 box-border min-h-[350px] max-w-full text-left text-53xl text-blueviolet-100 font-dm-sans">
        <div className="self-stretch h-[80.3px] overflow-hidden shrink-0 flex flex-row items-start justify-start [debug_commit:1de1738] max-w-full">
          <h1
            className="m-0 h-[93px] w-[3226px] relative text-inherit tracking-[-0.02em] leading-[129.68%] font-bold font-inherit inline-block whitespace-nowrap [&.animate]:animate-[65s_linear_-32.5s_infinite_normal_forwards_marquee-text] opacity-[1] shrink-0 [debug_commit:1de1738] mq450:text-24xl mq450:leading-[56px] mq800:text-39xl mq800:leading-[75px]"
            data-animate-on-scroll
          >
            LET’S CREATE TOGETHER. LET’S CREATE TOGETHER. LET’S CREATE TOGETHER.
            LET’S CREATE TOGETHER.
          </h1>
        </div>
        <div className="mr-[-778px] w-[3226px] h-[90px] overflow-hidden shrink-0 flex flex-row items-start justify-start [debug_commit:1de1738] max-w-[225%] z-[1]">
          <h1
            className="m-0 h-[93px] flex-1 relative text-inherit tracking-[-0.02em] leading-[129.68%] font-bold font-inherit inline-block whitespace-nowrap [&.animate]:animate-[65s_linear_-32.5s_infinite_normal_forwards_marquee-text] opacity-[1] mq450:text-24xl mq450:leading-[56px] mq800:text-39xl mq800:leading-[75px]"
            data-animate-on-scroll
          >
            LET’S CREATE TOGETHER. LET’S CREATE TOGETHER. LET’S CREATE TOGETHER.
            LET’S CREATE TOGETHER.
          </h1>
        </div>
      </section>
        </>
    )
}

import { MdOutlineFileCopy } from "react-icons/md";
import footerLogo from "../../assets/footerLogo.png";
import { TbPointFilled } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Footer = () => {
    const tabs = [
        {
            tabName: "Home",
            pathname: "/",
        },
        {
            tabName: "About Us",
            pathname: "/about",
        },
        {
            tabName: "Services",
            pathname: "/services",
        },
        {
            tabName: "Work",
            pathname: "/work",
        },
        {
            tabName: "Contact Us",
            pathname: "/contact-us",
        },
    ];

    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <footer className="bg-white">
            <div className="bg-[#3D4DFF] px-[31px] md:px-[96px] pt-[20px] md:pt-[96px] pb-[13px] rounded-t-[48px]">
                <div className="flex md:hidden flex-col items-center gap-[5px] mb-[15px]">
                    <p className="font-f1 font-w4 text-white text-[10.73px] leading-[13.98px] cursor-pointer">
                        Follow Us on
                    </p>
                    <div className="flex gap-2">
                        <PiInstagramLogoBold color="#ffffff" size={20} />
                        <PiLinkedinLogoBold color="#ffffff" size={20} />
                    </div>
                </div>
                <div className=" flex justify-between ">
                    <ul className="space-y-[6px] md:space-y-[18px]  font-f1 font-w4 underline text-white text-[11px] md:text-[18px] leading-[14.32px] md:leading-[23.44px] ">
                        <li className="flex items-center gap-[13.5px]">
                            hey@slashon.agency{" "}
                            <MdOutlineFileCopy
                                onClick={() =>
                                    copyTextToClipboard("hey@slashon.agency")
                                }
                                className="hidden md:block cursor-pointer"
                            />
                        </li>
                        <li className="w-[90%]">
                            1st floor, 264-265, Dr. Annie Besant Rd, Worli,{" "}
                            <br /> Mumbai, Maharashtra, 400051
                        </li>

                        <li className="flex items-center gap-0 md:gap-[13.5px]">
                            +91 61118 12xxx{" "}
                            <MdOutlineFileCopy
                                onClick={() =>
                                    copyTextToClipboard("+91 61118 12xxx")
                                }
                                className="hidden md:block cursor-pointer"
                            />
                        </li>
                    </ul>
                    <div className="flex gap-[115px] ">
                        <ul className="space-y-[6px] md:space-y-[18px]">
                            {tabs?.map((item) => (
                                <li
                                    key={item?.tabName}
                                    className="font-f1 font-w4  text-white text-[10.73px] md:text-[18px] leading-[14.32px] md:leading-[23.44px] cursor-pointer"
                                >
                                    {item?.tabName}
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-[6px] md:space-y-[18px] hidden md:block font-f1 font-w4 text-white text-[11px] md:text-[18px] leading-[14.32px] md:leading-[23.44px] cursor-pointer">
                            <li className="">Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[12.34px] md:gap-12">
                    <img
                        src={footerLogo}
                        alt="logo"
                        className="w-full md:w-[70%] h-[69.42px] md:h-[212px] mt-[54px]"
                    />
                    <div className="align-self-end flex gap-1 justify-end items-end font-f1 font-w4 text-white text-[18px] leading-[23.44px] cursor-pointer">
                        <span>© Slashon 2023</span>
                        <span className="flex items-center gap-1">
                            <TbPointFilled />
                            Privacy Policy
                        </span>
                    </div>
                </div>
                {/* <h2 className=" text-[150px] font-f1 font-w6 text-white ">Slashon</h2> */}
            </div>
        </footer>
    );
};





// App.js

const Demo = () => {
    return (
<>
<main className="min-h-[calc(100dvh-95.44px)] ">

            <FrameComponent6 />
            <HeroSection />
            <MainContent />
            <ChainTest/>
            <Chai/>
            <Footer /> 
            </main>
            </>
    );
};

export default Demo;



