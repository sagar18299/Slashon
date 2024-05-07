import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type RhombusRallyType = {
  subtract?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propGap?: CSSProperties["gap"];
};

const RhombusRally: FunctionComponent<RhombusRallyType> = ({
  subtract,
  propHeight,
  propGap,
}) => {
  const rhombusRallyStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
    };
  }, [propHeight, propGap]);

  return (
    <div
      className="self-stretch h-[459px] flex flex-col items-start justify-start gap-[18px] text-center text-mini text-gray-100 font-dm-sans"
      style={rhombusRallyStyle}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-end py-[18px] px-[2.2px] relative">
        <div className="h-[31.5px] overflow-x-auto flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[12px] opacity-[0]">
          <button className="cursor-pointer [border:none] py-1.5 px-3 bg-gainsboro h-8 w-[107px] rounded-29xl shrink-0 flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-silver">
            <div className="self-stretch flex-1 relative text-mini font-dm-sans text-gray-100 text-center flex items-end justify-center whitespace-nowrap">
              Web Design
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-1.5 px-3 bg-gainsboro h-8 w-[86px] rounded-29xl shrink-0 flex flex-row items-start justify-start box-border hover:bg-silver">
            <div className="self-stretch flex-1 relative text-mini font-dm-sans text-gray-100 text-center flex items-end justify-center whitespace-nowrap">
              Branding
            </div>
          </button>
          <div className="self-stretch w-[53px] rounded-29xl bg-gainsboro shrink-0 flex flex-row items-start justify-start py-1.5 px-3 box-border">
            <div className="self-stretch flex-1 relative flex items-end justify-center whitespace-nowrap">
              SEO
            </div>
          </div>
        </div>
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-29xl max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src={subtract}
        />
        <img
          className="h-[624px] w-[624px] absolute !m-[0] bottom-[-181.5px] left-[-12px] object-cover z-[3]"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <div className="w-[249.3px] h-[30px] flex flex-row items-end justify-start gap-[18px] text-left text-5xl text-black">
        <div className="self-stretch w-[85px] relative tracking-[-0.02em] leading-[29.99px] font-medium flex items-end mq450:text-lgi mq450:leading-[24px]">
          Augnito
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[10.8px]">
          <div className="w-[8.3px] h-[8.3px] relative rounded-[50%] bg-black" />
        </div>
        <div className="self-stretch flex-1 relative tracking-[-0.02em] leading-[29.99px] font-medium flex items-end mq450:text-lgi mq450:leading-[24px]">
          Healthcare
        </div>
      </div>
    </div>
  );
};

export default RhombusRally;
