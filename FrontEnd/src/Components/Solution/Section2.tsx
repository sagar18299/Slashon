// import { TbPointFilled } from "react-icons/tb";
import { HiOutlineArrowRight } from "react-icons/hi";

const Section2 = () => {
    const sectionData = [
        {
            sectionName: "Design",
            discreption:
                "At Slashon, we're your partners in crafting compelling design solutions that propel your brand forward. We believe in creating jaw-dropping visuals and digital design experiences that ensures your online presence; we also enhance the touch and feel of print materials to create a lasting impression on the brand identity.",
            image: "",
            services: [
                {
                    serviceName: "Digital",
                    servicesTypeList: [
                        "Email Newsletters",
                        "Social media creatives",
                        "Ui/Ux",
                        "Illustrations",
                        "Motion graphics",
                    ],
                },
                {
                    serviceName: "Print",
                    servicesTypeList: [
                        "Brochures &  Flyers",
                        "Packaging",
                        "Out of Home Advertising",
                        "Marketing Material",
                        "Business Stationary",
                    ],
                },
            ],
        },
        {
            sectionName: "Branding",
            discreption:
                "Our aim is to bring into reality the story, voice and personality of your brand. To reflect a brand identity that you care about, craft a strong brand message that you always wanted to convey, and create a lasting brand experience for your audience is what we focus on.",
            image: "",
            services: [
                {
                    serviceName: "Brand Strategy",
                    servicesTypeList: [
                        "Go-to-market Strategy",
                        "Competitive Analysis",
                        "Brand Positioning",
                    ],
                },
                {
                    serviceName: "Brand Identity",
                    servicesTypeList: [
                        "Logo Design",
                        "Brand Guidelines",
                        "Brand Voice",
                    ],
                },
                {
                    serviceName: "Brand Messaging",
                    servicesTypeList: [
                        "Brand Storytelling",
                        "Copywriting",
                        "Content Writing",
                    ],
                },
                {
                    serviceName: "Brand Experience",
                    servicesTypeList: [
                        "Customer Journey Mapping",
                        "Customer Experience Plan",
                        "Analysis & Strategy",
                    ],
                },
            ],
        },
        {
            sectionName: "Growth",
            discreption:
                "Our strategists and marketers constantly strive to relentlessly work on upscaling your brand with reach, relations and results. Measuring, analyzing and optimizing with our exceptional marketing solutions, AI innovations and strategies that grow your brand at an unconventional rate.",
            image: "",
            services: [
                {
                    serviceName: "Email Marketing",
                    servicesTypeList: [
                        "Newsletter Campaign",
                        "Content & Strategy",
                        "Reporting & Analytics",
                    ],
                },
                {
                    serviceName: "SEO",
                    servicesTypeList: [
                        "Keyword Research & Strategy",
                        "On-page Optimisation",
                        "Reporting & Analytics",
                    ],
                },
                {
                    serviceName: "Pay-Per-Click Advertising",
                    servicesTypeList: [
                        "Google Ads",
                        "Social Media Ads",
                        "Meta Ads",
                    ],
                },
                {
                    serviceName: "Social Media Marketing",
                    servicesTypeList: ["Performance Analysis", "SMM Strategy"],
                },
            ],
        },
    ];
    return (
        <section className="bg-white px-6 md:px-12 pt-[68px] md:pt-[172px] mt-[262px] rounded-t-[24px] md:rounded-t-[35px] space-y-[75px]">
            {sectionData?.map((item, i) => (
                <div key={item?.sectionName} className="px-0 md:px-12">
                    <div
                        className={`flex flex-col md:flex-row md:items-center gap-[35px] ${
                            i === 1 ? "md:flex-row-reverse" : null
                        }`}
                    >
                        <div
                            className={`flex-[1.5] ${
                                i === 1 ? "text-right" : null
                            } `}
                        >
                            <h2 className="font-f1  mb-4 md:mb-[36px] font-w4 text-[#3D4DFF] text-[32px] md:text-[114px] leading-[41.66px] md:leading-[148.43px] ">
                                {item?.sectionName}
                            </h2>
                            <p className="font-f1 mb-6 md:mb-[72px] font-w2 text-[#262626] text-[14px] md:text-[22.5px] leading-[18px] md:leading-[28.8px] ">
                                {item?.discreption}
                            </p>
                            <div
                                className={`flex flex-wrap ${
                                    i === 1 ? "justify-end" : "justify-start"
                                } gap-6 md:gap-[72px]`}
                            >
                                {item?.services?.map((service) => (
                                    <div
                                        key={service?.serviceName}
                                        className=""
                                    >
                                        <h5 className="font-f1 mb-6 font-w4 text-[#262626] text-[20px] md:text-[36px] leading-[26.04px] md:leading-[46.87px] text-pretty">
                                            {service?.serviceName}
                                        </h5>
                                        <ul className="space-y-4">
                                            {service?.servicesTypeList?.map(
                                                (serviceType) => (
                                                    <li
                                                        key={serviceType}
                                                        className={`font-f1 flex ${
                                                            i === 1
                                                                ? "flex-row-reverse"
                                                                : null
                                                        } items-center gap-2 font-w1 text-[#262626] text-[12px] md:text-[21px] leading-[15.62px] md:leading-[27.34px] `}
                                                    >
                                                        <div className="w-[9px] h-[9px] bg-[#262626] relative rounded-[50%] " />

                                                        {/* <TbPointFilled />{" "} */}
                                                        {serviceType}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:h-[436.5px] md:w-[436.5px] bg-[#D1D1D1] rounded-[40px] relative w-full aspect-square z-[4] md:flex-1">
                            <img
                                className=" rounded-17xl w-full h-full"
                                alt=""
                                // src={subtract}
                            />
                            <div className="bg-white absolute bottom-0 pt-4 pr-4 rounded-t-[21px]">
                                <button className="flex justify-center items-center rounded-[21px] w-[201.72px] h-10 border border-[#3D4DFF] font-f1 font-w3 text-[#3D4DFF]">
                                    Featured Projects <HiOutlineArrowRight />
                                </button>
                            </div>
                        </div>
                        {/* <div className="md:flex-1 bg-[#D1D1D1] w-full h-[312px] md:w-[436.5px] md:h-[436.5px] rounded-[40px]">
                            <img src="" alt="" />
                            <button></button>
                        </div> */}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Section2;
