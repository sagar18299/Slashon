import Footer from "../../Components/Footer/Footer";
import Section1 from "../../Components/Solution/Section1";
import Section2 from "../../Components/Solution/Section2";
import Section3 from "../../Components/Solution/Section3";
import Section4 from "../../Components/Solution/Section4";
import Section5 from "../../Components/Solution/Section5";

const Solution = () => {
    return (
        <main className="min-h-[calc(100dvh-95.44px)] ">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </main>
    );
};

export default Solution;
