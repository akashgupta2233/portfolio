import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TT from "../../Assets/Projects/TT.jpg";
import T from "../../Assets/Projects/T.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import CRM from "../../Assets/Projects/CRM.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blog App"
              description="A full-stack blog application that allows users to create, edit, and publish blog posts with user authentication and comment functionality."
              ghLink="https://github.com/akashgupta2233/secure-blog-app"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Social Media"
              description="A dynamic social media web app enabling users to share posts, connect with others, and engage through likes and comments in real-time."
              ghLink="https://github.com/"
              demoLink="\"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={T}
              isBlog={false}
              title="Tic Tac Toe"
              description="A fun and interactive Tic Tac Toe game built with logic-based win detection and a clean user interface for two-player gameplay."
              ghLink="https://github.com/akashgupta2233/Tic-Tac-Toe"
              demoLink="https://marcft.github.io/tic-tac-toe/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TT}
              isBlog={false}
              title="Todo App"
              description="A simple and intuitive ToDo web app to help users organize tasks, set priorities, and track daily progress efficiently."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRM}
              isBlog={false}
              title="CRM"
              description="A web-based CRM system designed to manage customer interactions, track sales leads, and streamline business communications."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
