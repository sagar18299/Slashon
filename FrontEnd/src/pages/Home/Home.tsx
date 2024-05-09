import { FunctionComponent, useCallback, useEffect } from "react";
import FrameComponent6 from "./components/FrameComponent6";
import FrameComponent4 from "./components/FrameComponent4";
import FrameComponent3 from "./components/FrameComponent3";
import ParallelogramPosse from "./components/ParallelogramPosse";
import TreeHeight from "./components/TreeHeight";
import FrameComponent2 from "./components/FrameComponent2";
import Compositing from "./components/Compositing";
import FrameComponent from "./components/FrameComponent";
import Footer from "./components/Footer";

const Home: FunctionComponent = () => {
  const onHEADERContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='yourPartnerToCreate']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border leading-[normal] tracking-[normal] text-center text-5xl text-white font-dm-sans">
      <div className="w-[774px] h-[774px] absolute !m-[0] top-[-229.5px] left-[-481.5px] [filter:blur(576px)] rounded-[50%] bg-greenyellow-200" />
      <section className="w-[1165.5px] h-[1165.5px] absolute !m-[0] top-[805.5px] right-[-735.8px] [filter:blur(384px)] rounded-[50%] bg-deepskyblue-200" />
      <FrameComponent6 />
      <div className="w-[1392px] h-[111px] hidden flex-row items-center justify-start py-0 px-[57.6px] box-border relative max-w-full z-[3]">
        <div className="h-[calc(100%_-_0.3px)] w-[2748px] absolute !m-[0] top-[0px] bottom-[0.3px] left-[57.6px] z-[0]">
          <img
            className="absolute top-[33px] left-[0px] w-[175.2px] h-[44.8px] object-contain"
            alt=""
            src="/asset-102x-1@2x.png"
          />
          <img
            className="absolute top-[36.5px] left-[261.6px] w-[139.2px] h-[37.7px] object-contain"
            alt=""
            src="/asset-112x-1@2x.png"
          />
          <img
            className="absolute top-[23px] left-[487.2px] w-[122.4px] h-[64.8px] object-contain"
            alt=""
            src="/asset-122x-1@2x.png"
          />
          <img
            className="absolute top-[30.3px] left-[696px] w-[137.4px] h-[50.1px] object-contain"
            alt=""
            src="/asset-142x-1@2x.png"
          />
          <img
            className="absolute top-[29.6px] left-[919.8px] w-[119.7px] h-[51.6px] object-contain"
            alt=""
            src="/asset-152x-1@2x.png"
          />
          <img
            className="absolute top-[29.7px] left-[1125.9px] w-[205.2px] h-[51.4px] object-contain"
            alt=""
            src="/asset92x-1@2x.png"
          />
          <img
            className="absolute top-[36.2px] left-[1417.5px] w-[189.9px] h-[38.4px] object-contain"
            alt=""
            src="/asset-82x-1@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_19.8px)] top-[9.9px] bottom-[9.9px] left-[1693.8px] max-h-full w-[128.4px] object-contain"
            alt=""
            src="/asset-72x-1@2x.png"
          />
          <img
            className="absolute top-[20.7px] left-[1908.6px] w-[163.8px] h-[69.3px] object-contain"
            alt=""
            src="/asset-52x-1@2x.png"
          />
          <img
            className="absolute top-[23.9px] left-[2158.8px] w-[108.3px] h-[63px] object-contain"
            alt=""
            src="/asset-42x-1@2x.png"
          />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[2353.5px] max-h-full w-[68.4px] object-cover"
            alt=""
            src="/asset-32x-1@2x.png"
          />
          <img
            className="absolute top-[30.3px] left-[2508.3px] w-[200.4px] h-[50.1px] object-contain"
            alt=""
            src="/asset-22x-1@2x.png"
          />
          <img
            className="absolute top-[28.8px] left-[2795.1px] w-[187.2px] h-[53.1px] object-contain"
            alt=""
            src="/asset-162x-1@2x.png"
          />
          <img
            className="absolute top-[35.6px] left-[3068.7px] w-[150.6px] h-[39.6px] object-contain"
            alt=""
            src="/asset-132x-1@2x.png"
          />
          <img
            className="absolute top-[25.5px] left-[3305.7px] w-[114.3px] h-[59.7px] object-contain"
            alt=""
            src="/asset-62x-1@2x.png"
          />
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[105px] pr-5 pl-[21px] box-border max-w-full text-center text-35xl text-gray-100 font-dm-sans mq450:pb-[68px] mq450:box-border">
        <div
          className="w-[1055.3px] flex flex-col items-start justify-start gap-[36px] max-w-full cursor-pointer z-[1] mq800:gap-[18px]"
          onClick={onHEADERContainerClick}
        >
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[47px] pl-[47.2px] box-border max-w-full mq1125:pl-[23px] mq1125:pr-[23px] mq1125:box-border">
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
      <div className="self-stretch h-[900px] relative hidden max-w-full z-[5] mq450:h-auto mq450:min-h-[900]">
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-gray-200 w-full h-full" />
        <div className="absolute top-[72px] left-[calc(50%_-_524.6px)] flex flex-col items-center justify-start gap-[18px] max-w-full">
          <div className="h-[39px] relative leading-[39px] flex items-end justify-center max-w-full box-border pl-5 pr-5 mq450:text-lgi mq450:leading-[31px]">
            We create an ecosystem of simple yet significant solutions.
          </div>
          <b className="self-stretch h-[83px] relative text-[76.5px] leading-[82.5px] flex font-redacted items-end justify-center mq450:text-[46px] mq450:leading-[49px] mq800:text-[61px] mq800:leading-[66px]">
            Our three Pillars of Strength
          </b>
        </div>
        <div className="absolute top-[288px] left-[calc(50%_-_672px)] flex flex-col items-start justify-start max-w-full text-left text-35xl text-gray-100">
          <div className="self-stretch bg-whitesmoke box-border flex flex-row items-center justify-between py-12 px-24 min-h-[180px] gap-[20px] border-b-[0.8px] border-solid border-gray-300 mq450:flex-wrap">
            <div className="relative font-medium mq450:text-13xl mq800:text-24xl">
              Design
            </div>
            <img
              className="h-[58.5px] w-[58.5px] relative overflow-hidden shrink-0 object-contain"
              alt=""
              src="/tdesignarrowup@2x.png"
            />
          </div>
          <div className="self-stretch bg-whitesmoke box-border flex flex-row items-center justify-between py-12 px-24 min-h-[180px] gap-[20px] border-b-[0.8px] border-solid border-gray-300 mq800:flex-wrap">
            <div className="relative font-medium mq450:text-13xl mq800:text-24xl">
              Branding
            </div>
            <img
              className="h-[58.5px] w-[58.5px] relative overflow-hidden shrink-0 object-contain"
              alt=""
              src="/tdesignarrowup@2x.png"
            />
          </div>
          <div className="self-stretch bg-whitesmoke flex flex-row items-center justify-between py-12 px-24 box-border min-h-[180px] gap-[20px] mq450:flex-wrap">
            <div className="relative font-medium mq450:text-13xl mq800:text-24xl">
              Growth
            </div>
            <img
              className="h-[58.5px] w-[58.5px] relative overflow-hidden shrink-0 object-contain"
              alt=""
              src="/tdesignarrowup@2x.png"
            />
          </div>
        </div>
      </div>
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
      <ParallelogramPosse />
      <TreeHeight />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[119px] box-border max-w-full mq800:pb-[50px] mq800:box-border mq1350:pb-[77px] mq1350:box-border">
        <FrameComponent2 />
        <Compositing />
      </section>
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
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Home;
