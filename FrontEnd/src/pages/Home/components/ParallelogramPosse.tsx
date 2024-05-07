import { FunctionComponent } from "react";
import RhombusRally from "./RhombusRally";

const ParallelogramPosse: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[172px] box-border max-w-full text-center text-mini text-gray-100 font-dm-sans mq450:pb-[47px] mq450:box-border mq1125:pb-[73px] mq1125:box-border mq1350:pb-28 mq1350:box-border">
      <div className="h-[1634px] w-[1272px] flex flex-row items-start justify-start pt-[342px] px-0 pb-0 box-border max-w-full mq800:gap-[24px] mq800:pt-[94px] mq800:box-border mq1125:h-auto mq1350:pt-36 mq1350:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-[983.3px] box-border gap-[48px] opacity-[0] max-w-full shrink-0 mq800:gap-[24px] mq800:pb-[270px] mq800:box-border mq1350:pb-[415px] mq1350:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[72px] min-w-[398px] max-w-full mq450:gap-[18px] mq800:gap-[36px] mq800:min-w-full">
            <RhombusRally subtract="pending_I2841:16052;1421:8080;515:3145" />
            <RhombusRally
              subtract="pending_I2841:16052;1421:8087;515:3145"
              propHeight="459px"
              propGap="18px"
            />
            <RhombusRally
              subtract="pending_I2841:16052;1421:8094;515:3145"
              propHeight="459px"
              propGap="18px"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border min-w-[398px] max-w-full text-left text-35xl mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full mq450:gap-[18px] mq800:gap-[36px]">
              <div className="w-[501px] flex flex-col items-start justify-start gap-[48px] max-w-full mq800:gap-[24px]">
                <h1 className="m-0 self-stretch h-[104px] relative text-inherit tracking-[-0.04em] leading-[96%] font-bold font-inherit inline-block mq450:text-13xl mq450:leading-[31px] mq800:text-24xl mq800:leading-[41px]">
                  <p className="m-0">Dive into our</p>
                  <p className="m-0 text-blueviolet-200">{`Design & brand stories`}</p>
                </h1>
                <div className="w-[143.7px] h-[41px] rounded-2xl bg-blueviolet-300 box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[9px] px-[18px] gap-[4.5px] text-lg text-blueviolet-200 border-[1.5px] border-solid border-blueviolet-200">
                  <div className="ml-[-34.5px] h-[23px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border">
                    <div className="w-[31.5px] h-[31.5px] relative rounded-[50%] bg-blueviolet-200" />
                  </div>
                  <div className="self-stretch w-[87px] relative tracking-[-0.02em] leading-[130.32%] font-medium inline-block shrink-0">
                    View more
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
                    <img
                      className="w-[14.7px] h-[10.1px] relative object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <RhombusRally
                subtract="pending_I2841:16052;1421:8065;515:3145"
                propHeight="459px"
                propGap="18px"
              />
              <RhombusRally
                subtract="pending_I2841:16052;1421:8072;515:3145"
                propHeight="537px"
                propGap="96px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallelogramPosse;
