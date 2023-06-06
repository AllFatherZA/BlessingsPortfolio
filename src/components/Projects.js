import React from 'react'
import { Container, Row, Col, Tab, Nav, TabContainer } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/FourierA.JPG";
import projImg2 from "../assets/img/BuyLowSellHigh.JPG";
import projImg3 from "../assets/img/VarModels.JPG";
import projImg4 from "../assets/img/QuantTrading.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects=()=>{
  const projects = [
    {
      title: "Fourier Analysis",
      description: "Data Science",
      imgUrl: projImg1,
    },
    {
      title: "Trading Strategies",
      description: "Data Science",
      imgUrl: projImg2,
    },
    {
      title: "Trading Strategies",
      description: "Data Science",
      imgUrl: projImg3,
    },
    {
      title: "Trading Strategies",
      description: "Data Science",
      imgUrl: projImg4,
    },
    
  ];
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
                      <p>Projects Coming Soon</p>
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


