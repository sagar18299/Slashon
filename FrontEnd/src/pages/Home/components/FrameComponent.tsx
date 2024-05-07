import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[201px] pr-5 pl-[21px] box-border max-w-full text-center text-53xl text-gray-100 font-dm-sans mq800:pb-[131px] mq800:box-border">
      <div className="w-[1145px] flex flex-row items-start justify-start gap-[106px] max-w-full mq800:gap-[26px] mq1125:flex-wrap mq1125:gap-[53px]">
        <img
          className="w-[481px] relative max-h-full object-cover max-w-full mq1125:flex-1"
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
                  className="w-[18.4px] h-[12.7px] relative object-contain"
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
};

export default FrameComponent;
