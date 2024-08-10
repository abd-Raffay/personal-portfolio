import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1-bidcart.png";
import projImg2 from "../assets/img/proj2-notekeep.png";
import projImg3 from "../assets/img/proj3-cc.png";
import projImg4 from "../assets/img/proj4-dashboard.png";
import projImg5 from "../assets/img/proj5-magzine.png";
import projImg6 from "../assets/img/proj6-bank.png";
import projImg7 from "../assets/img/proj7-vendingmachine.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const tab1Projects = [
    { title: "BidCart", description: "BidCart is a grocery shopping app designed to modernize grocery shopping by integrating a bidding system.", technology: "Flutter & Firebase", imgUrl: projImg1 },
    { title: "NoteKeep", description: "The ultimate web app for managing your to-dos. Effortlessly add, delete, and update notes to stay organized and productive every day.", imgUrl: projImg2, technology: "Angular & Firebase" },
    { title: "RealTime Currency Converter", description: "The Real-Time Currency Converter is a dynamic desktop application aimed at providing users with up-to-date currency conversion capabilities.", imgUrl: projImg3, technology: "Python" },
  ];

  const tab2Projects = [
    { title: "Dashboard Application", description: "Developed an interactive and responsive dashboard using AngularJS and AJAX for CRUD operations. Integrated real APIs for GET ALL, GET, POST, PUT, and DELETE actions with appropriate error handling. Implemented a backend with Entity Framework in ASP.NET and created Web API Controllers. Designed a dynamic UI for displaying and managing data with unique, colorful, and responsive elements, including icon buttons for CRUD operations.", imgUrl: projImg4, technology: "Angular CLI, ASP.NET" },
    { title: "Cust Magzine", description: "Explore our University Magazine Website for tech trends, campus events, fashion tips, gaming reviews, and wellness insights.", imgUrl: projImg5, technology: "Angular" },
    { title: "Bank Management System", description: "A console-based application for managing bank operations, including account creation, transactions, and balance management.", imgUrl: projImg6, technology: "C++" },
  ];

  const tab3Projects = [
    { title: "Vending Machine", description: "A customer-centric desktop vending application designed torevolutionize the vending experience. It allows users to effortlesslyselect and purchase products from a virtual vending machine interface.", imgUrl: projImg7, technology: "C++" },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here is a collection of my diverse projects, showcasing my skills across various technologies and domains. From mobile apps and web development to desktop applications and system-level programming, each project reflects my dedication to creating effective, user-friendly solutions.
                  </p>

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
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {tab1Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {tab2Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {tab3Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};
