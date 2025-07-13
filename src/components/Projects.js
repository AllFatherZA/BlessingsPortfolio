import React from 'react'
import { Container, Row, Col, Tab, Nav,} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import InformationSecurity from "../assets/img/InformationSecurity.jpeg";
import MachineLearning from "../assets/img/MachineLearning.jpeg";
import DataScience from "../assets/img/DataScience.jpeg";
import SystemsDesign from "../assets/img/SystemsDesign.jpeg";
import MonteCarlo from "../assets/img/MonteCarlo.jpeg"
import NormalDistribution from "../assets/img/NormalDistribution.jpeg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TelegramBot from "../assets/img/TelegramBot.png";
import FinanceGym from "../assets/img/FinanceGym.png";
import TwiskWebsite from "../assets/img/TwiskPortfolioImage.png";
import ATS from "../assets/img/ATS.png";
import AnonMessageBoard from "../assets/img/year.b949fba29b6c78d3daf1.png"
import TwiskEx from "../assets/img/twiskex.898f868d770ee1930636.png"
import HungryBlocks from "../assets/img/HungryBlocks.png"


export const Projects=()=>{
  const projects = [
    {
      title: "Stock Price Checker",
      description: "Information Security",
      imgUrl: InformationSecurity,
      link:"https://medium.com/@mnyandenilunga/breaking-in-my-journey-through-freecodecamps-information-security-certification-1617b7627d3a",
    },
    {
      title: "Machine Learning",
      description: "Algorithms and Data Structures",
      imgUrl: MachineLearning,
      link:"https://medium.com/@mnyandenilunga/lets-build-a-self-driving-car-ai-algorithms-in-python-43e682a09f96",
    },
    {
      title: "Signal Processing",
      description: "Data Science",
      imgUrl: DataScience,
      link:"https://medium.com/insiderfinance/why-data-scientists-treat-price-action-like-a-signal-financial-time-series-modelling-b198634802a8",
    },
    {
      title: "Systems Design",
      description: "Software Development",
      imgUrl: SystemsDesign,
      link:"https://medium.com/insiderfinance/systems-design-techniques-financial-process-modelling-1f6dd111ab90",
    },

    {
      title: "Risk Modelling",
      description: "Data Science",
      imgUrl: MonteCarlo,
      link:"https://medium.com/insiderfinance/systems-design-techniques-financial-process-modelling-1f6dd111ab90",
    },

    {
      title: "Normal Distribution",
      description: "Data Science",
      imgUrl: NormalDistribution,
      link:"https://medium.com/insiderfinance/mastering-stock-market-trends-with-python-unveiling-the-power-of-normal-distribution-9230b09c607a",
    },
    
  ];

  const projects2=[
    {
      title: "Telegram Trading Chatbot",
      description: "Python/Telegram/MetaTrader",
      imgUrl: TelegramBot,
      link:"https://github.com/AllFatherZA/TelegramBot"
    },
    {
      title: "Twisk Business Website",
      description: "Html,CSS,REACT",
      imgUrl: TwiskWebsite,
      link:"https://twiskwebsite-1.onrender.com/"
    },
    {
      title: "Trading Gym Enviroment",
      description: "Algorithms and Data Structures",
      imgUrl: FinanceGym,
      link:"https://github.com/AllFatherZA/TradingEnviroment"
    },

    {
      title: "Application Tracking System",
      description: "Article writing/SEO",
      imgUrl: ATS,
      link:"https://www.pitchlabs.org/library/technology/recrutiment/what-is-the-role-of-technology-in-recruitment"   
    },

    {
      title: "Anonymous Message Board",
      description: "Software Development",
      imgUrl: AnonMessageBoard,
      link:"https://freecodecamp-infosec-messageboard.onrender.com/b/Chemistry/"   
    },

    {
      title: "Investment Platform",
      description: "Software Development",
      imgUrl: TwiskEx,
      link:"https://twiskex.onrender.com/"   
    }
  ]

  const projects3=[
    
    {
      title: "Hungry Blocks",
      description: "Game Development",
      imgUrl: HungryBlocks,
      link:"https://freecodecamp-infosec-realtimegame.onrender.com/"   
    }
    
  ]
  return(
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
          <p>Here is a list of projects I have been working on</p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                                          <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='person watching laptop'></img>
    </section>
  )

}


