import RestCountries from "./../assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./../assets/portfolioImages/spacetourism.jpg";
import Advice from "./../assets/portfolioImages/advice.jpg";
import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg";
import Vanlife from "./../assets/portfolioImages/vanlife.png";
import Dashboard from "./../assets/portfolioImages/Dashboard.png";
import qe from "./../assets/portfolioImages/qe.png";
import Feature from "./../assets/portfolioImages/Feature.png";
import report from "./../assets/portfolioImages/report.png";

// in progress projects

import Servista from "./../assets/portfolioImages/servista.png";
import landingPage from "./../assets/portfolioImages/url.jpg";

const ProjectsData = [
  {
    id: "vanlife",
    img: Dashboard,
    name: "Project 360",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://project-van-life.vercel.app/",
    source: "https://github.com/rimshub/project-van-life",
    description:
      "The Ultimate Solution for End-to-End Project Management, Streamlining Workflows and Driving Results Across Industries. A visual tool for organizing tasks and workflows, where tasks move through stages.The process of assigning, tracking, and managing individual tasks within a project, ensuring they are completed on time and aligned with overall project goals.",
  },
  {
    id: "fyp",
    img: qe,
    name: "QE 360",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://www.canva.com/design/DAFoa-GrVg4/6wEhj_I__-QaLI1uQbnzsA/watch?utm_content=DAFoa-GrVg4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    source: "https://servista.vercel.app/",
    description:
      "The Software Quality Engineering module is highly beneficial for the software industry by automating critical testing processes",
  },
  {
    id: "rest-countries",
    img: Feature,
    name: "Assessment 360",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://rest-countries-api-rimshub.vercel.app/",
    source: "https://github.com/rimshub/rest-countries-api",
    description:
      "This comprehensive assessment module can be highly beneficial for various industries by supporting diverse project-related assessments and making it practical for industries like education, healthcare, finance, and manufacturing to improve project outcomes and decision-making",
  },

  {
    id: "space-tourism",
    img: report,
    name: "Risk 360",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://react-space-tourism-website-alpha.vercel.app/",
    source: "https://github.com/rimshub/react-space-tourism-website",
    description:
      "This Risk and Compliance module can be highly beneficial for industries like finance, healthcare, and manufacturing by helping organizations identify and categorize risks, track compliance, and automate audits, ensuring regulatory adherence and mitigating potential liabilities",
  },
];

const InprogressProjectsData = [
  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },
];

export default { ProjectsData, InprogressProjectsData };
