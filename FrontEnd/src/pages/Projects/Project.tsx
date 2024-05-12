
import Footer from "../../Components/Footer/Footer";
import ProjectsList from "../../Components/Projects/ProjectsList";
import Section1 from "../../Components/Solution/Section1";
import sampleImage from "../../assets/sampleImage.png";


export interface IAProjectData {
    imgUrl: string;
    tags: string[];
    headline: string;
}




const Projects = () => {
  const projectData : IAProjectData[] = [
    {
      imgUrl: sampleImage,
      tags: ["Augnito", "Healthcare"],
      headline: "Saving 3+ hours everyday for doctors with voice ai",
    },
    {
      imgUrl: sampleImage,
      tags: ["Property Experts", "Real Estate"],
      headline:
        "Assisting Estate agents in delivering top-notch service for their clients",
    },
    {
      imgUrl: sampleImage,
      tags: ["CashKaro", "Fintech"],
      headline:
        "India's Largest Cashback app with over 1500+ online shopping sites",
    },
    {
      imgUrl: sampleImage,
      tags: ["Motherdairy", "FMCG"],
      headline:
        "Created personalised product for ICC Worldcup’s schedule",
    },
    {
      imgUrl: sampleImage,
      tags: ["Mark Safety", "Fire & Safety"],
      headline:
        "Deploying world-class industrial fire & safety equipment",
    },
    {
      imgUrl: sampleImage,
      tags: ["7 Leaves Organic Cafe", "FMCG"],
      headline:
        "Rebranding for an organic cafe outlet providing quality food experiences",
    },
  ];
  return (
    <main className="min-h-[calc(100dvh-95.44px)] ">
      <Section1 />
      <ProjectsList data={projectData} />
      <Footer />
    </main>
  );
};

export default Projects;