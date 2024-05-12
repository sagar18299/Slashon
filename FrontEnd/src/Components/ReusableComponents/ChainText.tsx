import { useEffect } from "react";


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

export default ChainTest;