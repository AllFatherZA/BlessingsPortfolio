import React from 'react'
import { Container, Row, Col, Tab, Nav, TabContainer } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/FourierA.JPG";
import projImg2 from "../assets/img/BuyLowSellHigh.JPG";
import projImg3 from "../assets/img/VarModels.JPG";
import projImg4 from "../assets/img/QuantTrading.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TelegramBot from "../assets/img/TelegramBot.png";
import FinanceGym from "../assets/img/FinanceGym.png";
import TwiskWebsite from "../assets/img/TwiskPortfolioImage.png";
import ATS from "../assets/img/ATS.png";


export const Projects=()=>{
  const projects = [
    {
      title: "Fourier Analysis",
      description: "Data Science",
      imgUrl: projImg1,
      link:"https://medium.com/@mnyandenilunga/fourier-analysis-for-forex-predictions-c2313adc6379",
    },
    {
      title: "Trading Strategies",
      description: "Data Science",
      imgUrl: projImg2,
      link:"https://medium.com/@mnyandenilunga/buy-low-sell-high-lets-do-the-opposite-quantitave-trading-strategies-101-de4726ef60f",
    },
    {
      title: "Trading Strategies",
      description: "Data Science",
      imgUrl: projImg3,
      link:"https://medium.com/@mnyandenilunga/value-at-risk-var-models-how-big-financial-institutions-manage-risk-4ba0c9dce4cd",
    },
    {
      title: "Trading Strategies",
      description: "Data Science",
      imgUrl: projImg4,
      link:"https://medium.com/@mnyandenilunga/quantitative-trading-feature-engineering-with-python-39e069a7bd1b",
    },
    
  ];

  const projects2=[
    {
      title: "Telegram Trading Chatbot",
      description: "Python",
      imgUrl: TelegramBot,
      link:"https://github.com/AllFatherZA/TelegramBot"
    },
    {
      title: "Twisk Business Website",
      description: "Javascript,CSS,REACT",
      imgUrl: TwiskWebsite,
      link:"https://main.d3t2zt8f8gdhy2.amplifyapp.com/"
    },
    {
      title: "Trading Gym Enviroment",
      description: "Python",
      imgUrl: FinanceGym,
      link:"https://github.com/AllFatherZA/TradingEnviroment"
    },

    {
      title: "Application Tracking System",
      description: "Article writing",
      imgUrl: ATS,
      link:"https://www.pitchlabs.org/library/technology/recrutiment/what-is-the-role-of-technology-in-recruitment"   
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
                      <p>Projects Coming Soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )

}


