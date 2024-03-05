import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={""} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 >Contact</h2>
                  <h5>Email: <a href="mailto:info.wishingjewel@gmail.com" style={{ color: "white", textDecoration: "none" }}>info.wishingjewel@gmail.com</a></h5>
                  <h5>USA: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "none" }}>+1 (234) 567-890</a></h5>
                  <h5>Vietnam: <a href="tel:+84234567890" style={{ color: "white", textDecoration: "none" }}>+84 (234) 567-890</a></h5>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
