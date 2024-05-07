import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full z-[1] text-left text-35xl text-gray-100 font-dm-sans">
      <div className="w-[1440px] flex flex-row items-start justify-start py-[129px] pr-0 pl-[829.5px] box-border relative gap-[462px] opacity-[0] max-w-full mq450:gap-[58px] mq450:pl-5 mq450:box-border mq800:gap-[115px] mq800:pl-[207px] mq800:pt-[84px] mq800:pb-[84px] mq800:box-border mq1350:gap-[231px] mq1350:pl-[414px] mq1350:box-border">
        <h1 className="!m-[0] h-[110px] w-[429px] absolute top-[calc(50%_-_55px)] left-[-61.5px] text-inherit tracking-[-0.06em] leading-[102%] font-extrabold font-inherit flex items-end shrink-0 mq450:text-13xl mq450:leading-[33px] mq800:text-24xl mq800:leading-[44px]">
          Have a Question in mind?
        </h1>
        <FrameComponent5
          weWorkWithATeamOfEnthusia="We consider communication is the key, and asking questions is the first step to it. Our team is easily approachable and excited to help with anything, till then you might want to have a quick look at some questions people ask us."
          aboutUs="All FAQs"
          vector="pending_I2841:16115;2288:11734;1722:11008;1722:10906"
          propWidth="672px"
          propDebugCommit="unset"
          propHeight="136px"
          propColor="#262626"
          propWidth1="123.7px"
          propWidth2="67px"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
