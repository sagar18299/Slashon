import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-start justify-end py-0 px-[42px] box-border max-w-full text-left text-35xl text-gray-100 font-dm-sans mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
      <div className="flex flex-row items-start justify-start py-[129px] px-1.5 box-border max-w-full z-[1] mq450:pt-[84px] mq450:pb-[84px] mq450:box-border">
        <div className="w-[1248px] flex flex-row items-start justify-start py-0 px-[745px] box-border gap-[450px] opacity-[0] max-w-full mq450:gap-[56px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[112px] mq800:pl-[186px] mq800:pr-[186px] mq800:box-border mq1350:flex-wrap mq1350:gap-[225px] mq1350:pl-[372px] mq1350:pr-[372px] mq1350:box-border">
          <div className="ml-[-854px] w-[404px] flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738] max-w-full">
            <h1 className="m-0 h-[70px] flex-1 relative text-inherit tracking-[-0.04em] font-extrabold font-inherit flex items-end max-w-full mq450:text-13xl mq800:text-24xl">
              <span>
                <span>{`We are `}</span>
                <span className="text-blueviolet-200">Slashons</span>
              </span>
            </h1>
          </div>
          <FrameComponent5
            weWorkWithATeamOfEnthusia="We work with a team of enthusiasts aiming to excel in balancing creative design and strategic thinking for finding a perfect blend that elevates your brand story."
            aboutUs="About us"
            vector="pending_I2841:16037;1416:8011;1352:8813"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
