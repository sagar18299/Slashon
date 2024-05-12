import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
interface IAccordianData {
    title: string;
    description: string;
}

interface IAccordianProps {
    data: IAccordianData[];
}

const Accordian = ({ data }: IAccordianProps) => {
    const [showDescription, setShowDescription] = useState<string[]>([]);

    const toggleDescription = (title: string) => {
        setShowDescription((prevShowDescription) =>
            prevShowDescription.includes(title)
                ? prevShowDescription.filter((t) => t !== title)
                : [...prevShowDescription, title]
        );
    };

    return (
        <>
            {data?.map((item, i) => (
                <div
                    key={item.title}
                    className={`py-4 ${
                        i === 0 ? "border-y" : "border-b"
                    } select-none border-[#2626263D]`}
                >
                    <div
                        className="flex justify-between cursor-pointer gap-1"
                        onClick={() => toggleDescription(item.title)}
                    >
                        <h6 className="font-f1 font-w4 text-[16px] md:text-[18px] leading-[18px] md:leading-[23.46px] text-[#262626]">
                            {item.title}
                        </h6>

                        <BsPlusCircleFill
                            size={25}
                            className={`transition-transform duration-200 ease-in shrink-0 ${
                                showDescription.includes(item.title)
                                    ? "rotate-45"
                                    : "rotate-0 "
                            } `}
                        />
                    </div>
                    <div
                        className={`overflow-hidden transition-[max-height] duration-200 ease-in ${
                            showDescription.includes(item.title)
                                ? "max-h-40"
                                : "max-h-0 "
                        }`}
                    >
                        <p
                            className={` font-f1 mt-4 font-w1 text-[16px] md:text-[16px] leading-[18px] md:leading-[23.46px] text-[#262626] `}
                        >
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Accordian;
