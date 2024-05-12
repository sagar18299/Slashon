import { MdOutlineFileCopy } from "react-icons/md";
import footerLogo from "../../assets/footerLogo.png";
import { TbPointFilled } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Footer = () => {
    const tabs = [
        {
            tabName: "Home",
            pathname: "/",
        },
        {
            tabName: "About Us",
            pathname: "/about",
        },
        {
            tabName: "Services",
            pathname: "/services",
        },
        {
            tabName: "Work",
            pathname: "/work",
        },
        {
            tabName: "Contact Us",
            pathname: "/contact-us",
        },
    ];

    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <footer className="bg-white">
            <div className="bg-[#3D4DFF] px-[31px] md:px-[96px] pt-[20px] md:pt-[96px] pb-[13px] rounded-t-[48px]">
                <div className="flex md:hidden flex-col items-center gap-[5px] mb-[15px]">
                    <p className="font-f1 font-w4 text-white text-[10.73px] leading-[13.98px] cursor-pointer">
                        Follow Us on
                    </p>
                    <div className="flex gap-2">
                        <PiInstagramLogoBold color="#ffffff" size={20} />
                        <PiLinkedinLogoBold color="#ffffff" size={20} />
                    </div>
                </div>
                <div className=" flex justify-between ">
                    <ul className="space-y-[6px] md:space-y-[18px]  font-f1 font-w4 underline text-white text-[11px] md:text-[18px] leading-[14.32px] md:leading-[23.44px] ">
                        <li className="flex items-center gap-[13.5px]">
                            hey@slashon.agency{" "}
                            <MdOutlineFileCopy
                                onClick={() =>
                                    copyTextToClipboard("hey@slashon.agency")
                                }
                                className="hidden md:block cursor-pointer"
                            />
                        </li>
                        <li className="w-[90%]">
                            1st floor, 264-265, Dr. Annie Besant Rd, Worli,{" "}
                            <br /> Mumbai, Maharashtra, 400051
                        </li>

                        <li className="flex items-center gap-0 md:gap-[13.5px]">
                            +91 61118 12xxx{" "}
                            <MdOutlineFileCopy
                                onClick={() =>
                                    copyTextToClipboard("+91 61118 12xxx")
                                }
                                className="hidden md:block cursor-pointer"
                            />
                        </li>
                    </ul>
                    <div className="flex gap-[115px] ">
                        <ul className="space-y-[6px] md:space-y-[18px]">
                            {tabs?.map((item) => (
                                <li
                                    key={item?.tabName}
                                    className="font-f1 font-w4  text-white text-[10.73px] md:text-[18px] leading-[14.32px] md:leading-[23.44px] cursor-pointer"
                                >
                                    {item?.tabName}
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-[6px] md:space-y-[18px] hidden md:block font-f1 font-w4 text-white text-[11px] md:text-[18px] leading-[14.32px] md:leading-[23.44px] cursor-pointer">
                            <li className="">Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[12.34px] md:gap-12">
                    <img
                        src={footerLogo}
                        alt="logo"
                        className="w-full md:w-[70%] h-[69.42px] md:h-[212px] mt-[54px]"
                    />
                    <div className="align-self-end flex gap-1 justify-end items-end font-f1 font-w4 text-white text-[18px] leading-[23.44px] cursor-pointer">
                        <span>© Slashon 2023</span>
                        <span className="flex items-center gap-1">
                            <TbPointFilled />
                            Privacy Policy
                        </span>
                    </div>
                </div>
                {/* <h2 className=" text-[150px] font-f1 font-w6 text-white ">Slashon</h2> */}
            </div>
        </footer>
    );
};

export default Footer;
