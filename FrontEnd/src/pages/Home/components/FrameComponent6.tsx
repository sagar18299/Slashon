import { FunctionComponent } from "react";
import SlashonButton from "./SlashonButton";

const FrameComponent6: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-12 pb-[151px] box-border max-w-full mq800:pl-6 mq800:pr-6 mq800:box-border">
      <header className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] text-left text-xl-2 text-gray-200 font-dm-sans">
        <div className="h-[47px] w-[222.3px] flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.6px]">
            <img
              className="h-[40.4px] w-[130.1px] relative overflow-hidden shrink-0"
              alt=""
              src="/slashon-logo-2.svg"
            />
            <img
              className="h-[6.7px] w-[6.7px] relative hidden"
              alt=""
              src="/vector.svg"
            />
            <div className="h-[28.6px] w-[72.4px] relative overflow-hidden shrink-0 hidden">
              <b className="absolute top-[0px] left-[0px]">
                <p className="m-0">agency</p>
                <p className="m-0">digital</p>
                <p className="m-0">growth</p>
              </b>
            </div>
          </div>
        </div>
        <div className="w-[572.1px] flex flex-col items-start justify-start max-w-full mq1125:w-[74.09999999999854px]">
          <nav className="m-0 w-[498px] rounded-[44.25px] bg-whitesmoke flex flex-row items-start justify-between py-1.5 px-12 box-border gap-[20px] max-w-full text-center text-lg text-dimgray-100 font-dm-sans mq800:pl-6 mq800:pr-6 mq800:box-border mq1125:hidden">
            <div className="flex flex-row items-start justify-start py-1.5 px-[11px]">
              <b className="relative leading-[23.2px] inline-block min-w-[81px] whitespace-nowrap">
                About Us
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-1.5 px-[11px]">
              <b className="relative inline-block min-w-[83px]">Solutions</b>
            </div>
            <div className="flex flex-row items-start justify-start py-1.5 px-[11px]">
              <b className="relative inline-block min-w-[74px]">Projects</b>
            </div>
          </nav>
        </div>
        <div className="w-[148.7px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <SlashonButton colour={`blueviolet`}/>
          {/* <button className="cursor-pointer py-[7px] px-[18px] bg-blueviolet-300 self-stretch rounded-2xl overflow-hidden flex flex-row items-start justify-start gap-[4.5px] border-[1.5px] border-solid border-blueviolet-200">
            <div className="ml-[-34.5px] h-[23px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border">
              <div className="w-[31.5px] h-[31.5px] relative rounded-[50%] bg-blueviolet-200" />
            </div>
            <div className="relative text-lg tracking-[-0.02em] leading-[130.32%] font-medium font-dm-sans text-blueviolet-200 text-left inline-block min-w-[92px] whitespace-nowrap">
              Contact Us
            </div>
            <div className="flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
              <img
                className="w-[14.7px] h-[10.1px] relative object-contain"
                alt=""
                src="/vector1.svg"
              />
            </div>
          </button> */}
        </div>
      </header>
    </section>
  );
};

export default FrameComponent6;
