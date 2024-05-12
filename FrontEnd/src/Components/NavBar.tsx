// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiOutlineArrowRight } from "react-icons/hi";

const NavBar = () => {
    const listItems = [
        {
            tabName: "About Us",
            pathname: "/aboutus",
        },
        {
            tabName: "solutions",
            pathname: "/solutions",
        },
        {
            tabName: "projects",
            pathname: "/projects",
        },
    ];
    return (
        <header className="px-6 md:px-12 p-5 md:pt-12 flex justify-between items-center backdrop-blur-[30px] ">
           <Link to={"/"}>
            <img
                src={logo}
                alt="Slashon"
                className="w-[77.25px] md:w-[130.05px] h-[24px] md:h-[40.42px]"
            />
            </Link>
            <nav className="px-12 py-3 rounded-[44.25px] hidden md:block">
                <ul className="flex gap-12">
                    {listItems?.map((item) => (
                        <Link key={item?.tabName} to={item?.tabName}>
                        <li
                            key={item?.tabName}
                            className="text-[#717171] font-f1 font-w4 text-[18px] leading-[23.44px]"
                        >
                            {item?.tabName}
                        </li>
                        </Link>
                    ))}
                </ul>
            </nav>
            <button className="w-[148.72px] hidden md:flex h-10 justify-center items-center text-[#C7F903] font-f1 font-w2 border-2   border-[#C7F903] rounded-[21px]">
                Contact Us <HiOutlineArrowRight />
            </button>
        </header>
    );
};

export default NavBar;
