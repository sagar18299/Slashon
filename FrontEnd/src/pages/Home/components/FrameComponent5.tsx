import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  weWorkWithATeamOfEnthusia?: string;
  aboutUs?: string;
  vector?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propHeight?: CSSProperties["height"];
  propColor?: CSSProperties["color"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  weWorkWithATeamOfEnthusia,
  aboutUs,
  vector,
  propWidth,
  propDebugCommit,
  propHeight,
  propColor,
  propWidth1,
  propWidth2,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      debugCommit: propDebugCommit,
    };
  }, [propWidth, propDebugCommit]);

  const weWorkWithStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      color: propColor,
    };
  }, [propHeight, propColor]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div
      className="w-[612px] flex flex-col items-start justify-start gap-[36px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-3xl-5 text-gray-400 font-dm-sans mq800:gap-[18px]"
      style={frameDivStyle}
    >
      <div
        className="self-stretch h-[102px] relative tracking-[-0.04em] leading-[152%] font-medium inline-block mq450:text-lg mq450:leading-[27px]"
        style={weWorkWithStyle}
      >
        {weWorkWithATeamOfEnthusia}
      </div>
      <div
        className="w-[131.7px] h-[41px] rounded-2xl bg-blueviolet-300 box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[9px] px-[18px] gap-[4.5px] text-lg text-blueviolet-200 border-[1.5px] border-solid border-blueviolet-200"
        style={frameDiv1Style}
      >
        <div className="ml-[-34.5px] h-[23px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border">
          <div className="w-[31.5px] h-[31.5px] relative rounded-[50%] bg-blueviolet-200" />
        </div>
        <div
          className="self-stretch w-[75px] relative tracking-[-0.02em] leading-[130.32%] font-medium inline-block shrink-0"
          style={aboutUsStyle}
        >
          {aboutUs}
        </div>
        <div className="flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
          <img
            className="w-[14.7px] h-[10.1px] relative object-contain"
            alt=""
            src={vector}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
