import Accordian from "./Accordian";

interface IAccordianData {
    title: string;
    description: string;
}

const Section4 = () => {
    const accordianData: IAccordianData[] = [
        {
            title: "Why choose us for design & branding projects?",
            description:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!",
        },
        {
            title: "How much does it cost to work with us?",
            description:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!",
        },
        {
            title: "How can our strategies bring a change in your business?",
            description:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!",
        },
        {
            title: "Will marketing actually grow the business, how?",
            description:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!",
        },
        {
            title: "Are we a design or marketing agency?",
            description:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi voluptatem nulla atque, dolorem, labore quia, tenetur sunt voluptatibus exercitationem quam accusamus doloremque dicta dolores possimus. Blanditiis nostrum porro atque!",
        },
    ];

    return (
        <section className="bg-white pb-[64px] md:pb-[172px] flex flex-col md:flex-row md:justify-between gap-[45px] md:gap-0 px-6 md:px-[96px]">
            <div className="flex-1">
                <h2 className="font-f1 md:w-[90%] font-w4 text-[32px] md:text-[54px] leading-[35.2px] md:leading-[59.4px] text-[#262626]">
                    Finding it difficult to make a choice? Well,
                </h2>
                <p className="font-f1 font-w1 text-[16px] md:text-[24px] leading-[48px] text-[#262626]">
                    Well, these might help
                </p>
            </div>
            <div className="flex-1 h-fit">
                <Accordian data={accordianData} />
            </div>
        </section>
    );
};

export default Section4;
