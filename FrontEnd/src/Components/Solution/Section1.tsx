import { BsArrowDownCircle } from "react-icons/bs";

const Section1 = () => {
    return (
        <section className="mt-[148px]">
            <h2 className="font-f1 font-w4 text-white text-[24px] md:text-[76px] leading-[31.28px] md:leading-[99.05px] text-center">
                We tackle problems with
            </h2>
            <h1 className="font-f1 font-w4 text-[#C7F903] text-[53.58px] md:text-[101.26px] leading-[71.44px] md:leading-[135.01px] text-center">
                Passion
            </h1>
            <p className="font-f1 font-w1 text-[#B5B5B5] mt-12 md:mt-0 text-[16px] md:text-[30px] leading-[20.85px] md:leading-[39.1px] w-[90%] md:w-1/2 mx-auto text-center">
                Our focus lies in giving life to your ideas by providing
                tailored solutions for your exceptional needs
            </p>
            <BsArrowDownCircle color="#ffffff" size={25} className="mx-auto mt-[96px] block md:hidden"/>
        </section>
    );
};

export default Section1;
