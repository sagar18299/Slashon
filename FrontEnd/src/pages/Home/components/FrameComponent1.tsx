import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  maskGroup?: string;
  trustTheirProcessTheyreEx?: string;
  onVariousMarketingCampaig?: string;
  maskGroup1?: string;
  ankitMedarwal?: string;
  founderMDTheRising?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  maskGroup,
  trustTheirProcessTheyreEx,
  onVariousMarketingCampaig,
  maskGroup1,
  ankitMedarwal,
  founderMDTheRising,
  propWidth,
  propPadding,
  propMinWidth,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const ankitMedarwalFounderContainerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="h-[526.5px] w-[587.3px] relative shrink-0 max-w-full text-left text-lg text-gray-100 font-dm-sans mq450:h-auto mq450:min-h-[526.5]">
      <img
        className="relative rounded-17xl w-[587.3px] h-[526.5px]"
        alt=""
        src="/subtract-10.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
        alt=""
        src={maskGroup}
      />
      <div className="absolute top-[70.5px] left-[33px] w-[522px] flex flex-col items-start justify-start max-w-full z-[2]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[48px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] shrink-0">
            <img
              className="w-[48.8px] h-[40.5px] relative"
              loading="lazy"
              alt=""
              src="/.svg"
            />
            <div className="self-stretch h-[222.8px] relative tracking-[0.06em] leading-[136%] inline-block shrink-0">
              <span>{trustTheirProcessTheyreEx}</span>
              <b>Slashon</b>
              <span>{onVariousMarketingCampaig}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-5xl font-inter mq450:flex-wrap">
            <div
              className="w-[323.6px] flex flex-row items-center justify-start gap-[12px] max-w-full"
              style={frameDiv2Style}
            >
              <img
                className="h-[92.6px] w-[92.6px] relative object-cover"
                loading="lazy"
                alt=""
                src={maskGroup1}
              />
              <div
                className="h-[59px] flex-1 relative leading-[142%] inline-block"
                style={ankitMedarwalFounderContainerStyle}
              >
                <p className="m-0">
                  <b>{ankitMedarwal}</b>
                </p>
                <p className="m-0 text-lg">{founderMDTheRising}</p>
              </div>
            </div>
            <img
              className="h-[37.7px] w-[37.7px] relative"
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
