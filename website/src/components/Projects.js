import { useState } from "react";
import { Container, Row, Col, Image, Card} from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "Project 1",
      description: "description for project 1",
      image: "",
    },
    {
      title: "Project 2",
      description: "description for project 2",
      image: "",
    },
    {
      title: "Project 3",
      description: "description for project 3",
      image: "",
    },
  ];

  // State to manage the visibility and animation of each project card
  const [isVisible, setIsVisible] = useState(Array(projects.length).fill(false));

  // Function to handle the visibility change when a card comes into view
  const handleVisibilityChange = (index, visible) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = visible;
    setIsVisible(updatedVisibility);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div>
              <h2>Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <TrackVisibility onChange={(isVisible) => handleVisibilityChange(index, isVisible)}>
                    {({ isVisible: isCardVisible }) => (
                      <Card
                        className={`animate__animated ${isCardVisible ? "animate__fadeIn" : ""}`}
                        style={{ backgroundColor: "#151515", borderRadius: "10px" }} // Set your custom color here
                      >
                        <Row>
                          <Col md="4">
                            {/* Increase height and width here */}
                            <Image
                              src={project.image}
                              alt={project.title}
                              fluid
                              style={{ height: "350px", width: "350px", borderRadius: "10px" }}
                            />
                          </Col>
                          <Col md="8">
                            <Card.Body>
                              <Card.Title>{project.title}</Card.Title>
                              <Card.Text>
                                {project.description}
                              </Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    )}
                  </TrackVisibility>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
