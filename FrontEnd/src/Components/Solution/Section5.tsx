import { HiOutlineArrowRight } from "react-icons/hi";

const Section5 = () => {
    return (
        <section className="bg-white pb-[172px] px-6">
            <h2 className="font-f1 text-center font-w4 text-[32px] md:text-[72px] leading-[30.2px] md:leading-[47.37px] text-[#262626]">
                Let’s start solving your
            </h2>
            <h2 className="font-f1 text-center font-w4 text-[32px] md:text-[72px] leading-[35.2px] md:leading-[93.37px] text-[#262626]">
                Challenges over a{" "}
                <span className="text-[#464AF8]">Cup of Chai!</span>
            </h2>
            <p className="font-f1 mt-4 text-center font-w2 text-[14px] md:text-[24px] leading-[18.23px] text-[#262626]">
                We also don’t mind Coffee & Conversations
            </p>
            <button className="w-fit whitespace-nowrap px-4 mx-auto mt-8 flex h-10 justify-center items-center gap-1 text-[#3D4DFF] font-f1 font-w2 border-2   border-[#3D4DFF] rounded-[26.25px]">
                Let’s collaborate <HiOutlineArrowRight />
            </button>
        </section>
    );
};

export default Section5;
