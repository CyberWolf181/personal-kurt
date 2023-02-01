import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/crypto.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";
import projImg18 from "../assets/img/project-img18.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const articles = [
    {
      title: "The Future of Software Testing",
      description: "https://ekremkurt1907.medium.com/the-future-of-software-testing-67d8c82c0ecd",
      imgUrl: projImg18,
    },
    {
      title: "Which Automation Tool is the Best",
      description: "https://medium.com/codex/which-automation-tool-is-the-best-selenium-cypress-webdriverio-testcafe-playwright-c56c6f22df1f",
      imgUrl: projImg10,
    },
    {
      title: "Cloud-Based Mobile App Testing",
      description: "https://medium.com/codex/cloud-based-mobile-app-testing-78b8d398ab2e",
      imgUrl: projImg11,
    },
    {
      title: "How to test your GraphQL API",
      description: "https://ekremkurt1907.medium.com/how-to-test-your-graphql-api-beginners-guide-f6b5fa0bfe31",
      imgUrl: projImg12,
    },
    {
      title: "Docker — Selenium | How To Integrate Selenium Grid With Docker",
      description: "https://ekremkurt1907.medium.com/docker-selenium-how-to-integrate-selenium-grid-with-docker-2b350020d213",
      imgUrl: projImg13,
    },
    {
      title: "Appium — Mobile App Automation | Android & iOS",
      description: "https://ekremkurt1907.medium.com/appium-mobile-app-automation-510d6de1ad01",
      imgUrl: projImg14,
    },
    {
      title: "JMeter — Performance and Load Testing",
      description: "https://ekremkurt1907.medium.com/jmeter-performance-and-load-testing-beginners-guide-part-i-5121604bf97a",
      imgUrl: projImg15,
    },
    {
      title: "JMeter — Performance and Load Testing:Part 2",
      description: "https://ekremkurt1907.medium.com/jmeter-performance-and-load-testing-beginners-guide-part-ii-7edb98b0d2c3",
      imgUrl: projImg17,
    },
    {
      title: "API Testing using Postman & Newman",
      description: "https://ekremkurt1907.medium.com/api-testing-using-postman-newman-2beb55182840",
      imgUrl: projImg16,
    },
  ];

  const bloc_articles = [
    {
      title: "ERC Token Standards",
      description: "https://blog.blockmagnates.com/erc-token-standards-e83e7fdb0c54",
      imgUrl: projImg5,
    },
    {
      title: "Blockchain Consensus Mechanism",
      description: "https://ekremkurt1907.medium.com/blockchain-consensus-mechanism-2a30a3856fc9t",
      imgUrl: projImg6,
    },
    {
      title: "Decentralization, Metaverse and NFT",
      description: "https://ekremkurt1907.medium.com/decentralization-metaverse-and-nft-63fcc33f3f01",
      imgUrl: projImg7,
    },
    {
      title: "What is a Blockchain Node?",
      description: "https://ekremkurt1907.medium.com/what-is-a-blockchain-node-5cbb52c30a67",
      imgUrl: projImg8,
    },
    {
      title: "Blockchain Project Process",
      description: "https://ekremkurt1907.medium.com/blockchain-project-process-b1e600cebddb",
      imgUrl: projImg9,
    },
  ];

  const projects = [
    {
      title: "Cryptowolf",
      description: "Explore the World of Cryptocurrency",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
   
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Articles & Projects</h2>
                <p>Write stories about QA, Development, Tech, Blockchain and more!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Articles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Blockchain </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          articles.map((article, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...article}
                                />
                            )
                          })
                        }
                      </Row>
                      <div className="blog-page">
                      <a href="https://ekremkurt1907.medium.com" >Read more articles...</a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          bloc_articles.map((article, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...article}
                                />
                            )
                          })
                        }
                      </Row>
                      <div className="blog-page">
                      <a href="https://ekremkurt1907.medium.com" >Read more articles...</a>
                      </div>

                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <div className="blog-page">
                      <a href="https://cryptokurt.netlify.app/" >Visit website...</a>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}