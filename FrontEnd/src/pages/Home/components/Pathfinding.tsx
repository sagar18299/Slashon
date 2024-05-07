import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type PathfindingType = {
  maskGroup?: string;
  rustomLawyer?: string;
  coFounderCEOAugnito?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Pathfinding: FunctionComponent<PathfindingType> = ({
  maskGroup,
  rustomLawyer,
  coFounderCEOAugnito,
  propPadding,
}) => {
  const networkingStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-left text-5xl text-gray-100 font-inter mq800:flex-wrap">
      <div
        className="flex flex-row items-center justify-start gap-[12px] max-w-full mq450:flex-wrap"
        style={networkingStyle}
      >
        <img
          className="h-[92.6px] w-[92.6px] relative object-cover"
          loading="lazy"
          alt=""
          src={maskGroup}
        />
        <div className="relative leading-[142%]">
          <p className="m-0">
            <b>{rustomLawyer}</b>
          </p>
          <p className="m-0 text-lg">{coFounderCEOAugnito}</p>
        </div>
      </div>
      <img
        className="h-[37.7px] w-[37.7px] relative"
        loading="lazy"
        alt=""
        src="/vector-5.svg"
      />
    </div>
  );
};

export default Pathfinding;
