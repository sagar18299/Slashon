import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <section className="self-stretch rounded-t-29xl rounded-b-none overflow-hidden flex flex-col items-end justify-start pt-24 px-24 pb-[14.3px] box-border relative gap-[243.7px] max-w-full text-left text-lg text-white font-dm-sans mq450:gap-[61px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[122px] mq800:pt-[62px] mq800:px-12 mq800:pb-5 mq800:box-border">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap mq1125:justify-center">
        <div className="w-[418.5px] flex flex-col items-start justify-start gap-[18px] max-w-full">
          <b className="relative [text-decoration:underline] tracking-[-0.02em] leading-[130.19%] z-[1]">
            hey@slashon.agency
          </b>
          <b className="self-stretch relative [text-decoration:underline] tracking-[-0.02em] leading-[130.19%] z-[1]">
            1st floor, 264-265, Dr. Annie Besant Rd, Worli, Mumbai, Maharashtra,
            400051
          </b>
          <b className="relative [text-decoration:underline] tracking-[-0.02em] leading-[130.19%] inline-block min-w-[122px] z-[1]">
            +91 61118 12xxx
          </b>
        </div>
        <div className="w-[285px] flex flex-row items-start justify-start gap-[195px] z-[1] text-center">
          <div className="w-[0.8px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[5px] px-0 border-b-[0.8px] border-solid border-gray-600">
                <b className="w-[52px] relative flex items-center justify-center shrink-0">
                  Home
                </b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[5px] px-0 border-b-[0.8px] border-solid border-gray-600">
                <b className="w-[81px] relative flex items-center justify-center shrink-0">
                  About Us
                </b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[5px] px-0 border-b-[0.8px] border-solid border-gray-600">
                <b className="w-[76px] relative flex items-center justify-center shrink-0">
                  Services
                </b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[5px] px-0 border-b-[0.8px] border-solid border-gray-600">
                <b className="w-[47px] relative flex items-center justify-center shrink-0">
                  Work
                </b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start pt-1.5 pb-[5px] px-0 border-b-[0.8px] border-solid border-gray-600">
                <b className="w-[99px] relative flex items-center justify-center shrink-0">
                  Contact Us
                </b>
              </div>
            </div>
          </div>
          <div className="w-[0.8px] flex flex-col items-start justify-start gap-[6.3px]">
            <div className="self-stretch h-[35px] box-border flex flex-row items-start justify-start py-1.5 px-0 relative border-b-[0.8px] border-solid border-gray-600">
              <b className="absolute !m-[0] top-[calc(50%_-_11.5px)] right-[-89.2px] inline-block min-w-[90px]">
                Instagram
              </b>
            </div>
            <div className="self-stretch h-[35px] box-border flex flex-row items-start justify-start py-1.5 px-0 relative border-b-[0.8px] border-solid border-gray-600">
              <b className="absolute !m-[0] top-[calc(50%_-_11.5px)] right-[-74.2px] inline-block min-w-[75px]">
                LinkedIn
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[615px]"
          alt=""
          src="/rectangle-47.svg"
        />
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
      <div className="flex flex-row items-start justify-start gap-[10.4px] z-[1]">
        <b className="relative leading-[23.2px]">© Slashon 2023</b>
        <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
          <div className="w-1.5 h-1.5 relative rounded-[50%] bg-white" />
        </div>
        <b className="relative leading-[23.2px] inline-block min-w-[123px]">
          Privacy Policy
        </b>
      </div>
    </section>
  );
};

export default Footer;
