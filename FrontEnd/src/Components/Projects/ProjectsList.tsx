import { IAProjectData } from "../../Pages/Projects";
import { TbPointFilled } from "react-icons/tb";

interface IProjectsListProps {
    data: IAProjectData[];
}

const ProjectsList = ({ data }: IProjectsListProps) => {
    return (
        <section className="bg-white grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-[72px] px-6 md:px-12 pt-[68px] md:pt-[172px] mt-[262px] rounded-t-[24px] md:rounded-t-[35px] ">
            {data.map((item, i) => (
                <div key={item.headline} className={`w-full h-fit `}>
                    {i === 1 && (
                        <h1 className="hidden md:block font-f1 font-w4 text-[54px] leading-[51.84px] text-[#262626] mb-[72px]">
                            Dive into our <br /> Design & brand stories
                        </h1>
                    )}
                    <div className="relative w-full h-[208px] md:h-[411px] ">
                        <img
                            src={item.imgUrl}
                            alt="Projects"
                            className="absolute inset-0 w-full h-[208px] md:h-full object-cover rounded-[40px]"
                        />
                    </div>
                    <div className="flex items-center gap-1 my-2">
                        <p className="font-f1 font-w4 text-[14px] md:text-[24px] leading-[15.29px] md:leading-[29.99px] text-[#3D4DFF]">
                            {item.tags[0]}
                        </p>
                        <TbPointFilled />
                        <p className="font-f1 font-w4 text-[14px] md:text-[24px] leading-[15.29px] md:leading-[29.99px] text-[#3D4DFF]">
                            {item.tags[1]}
                        </p>
                    </div>
                    <h4 className="font-f1 font-w2 text-[18px] md:text-[33.75px] leading-[20px] md:leading-[43.94px] text-black">
                        {item.headline}
                    </h4>
                </div>
            ))}
        </section>
    );
};

export default ProjectsList;
