import { Container, Row, Col } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor"; // Import VisibilitySensor
import 'animate.css';

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Row className={`justify-content-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
              <Col md={8}>
                <h2 className="section-title">About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  blandit massa vel mauris sollicitudin dignissim. Fusce sit amet
                  odio a odio malesuada condimentum. Nullam ultricies metus vitae
                  nisi pulvinar, in vestibulum mauris scelerisque.
                </p>
                <p>
                  Nullam vehicula, arcu nec fermentum ultrices, nunc felis
                  consectetur libero, ut posuere felis risus vel libero. Vivamus
                  non justo ac libero varius congue a id dui. Nulla facilisi.
                </p>
                <p>
                  Praesent sagittis velit libero, sed congue lorem malesuada vel.
                  Duis pharetra elit quis lectus rutrum, vitae convallis velit
                  venenatis. Morbi vestibulum diam et aliquam aliquam.
                </p>
              </Col>
            </Row>
          )}
        </VisibilitySensor>
        <Row className="justify-content-center mt-5">
          <Col md={4} className="text-center">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className={`achievement-circle ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}>
                  <p className="achievement-number">10,000+</p>
                  <p className="achievement-description">Meals Donated</p>
                </div>
              )}
            </VisibilitySensor>
          </Col>
          <Col md={4} className="text-center">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className={`achievement-circle ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  <p className="achievement-number">500+</p>
                  <p className="achievement-description">Volunteers Engaged</p>
                </div>
              )}
            </VisibilitySensor>
          </Col>
          <Col md={4} className="text-center">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div className={`achievement-circle ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}>
                  <p className="achievement-number">5</p>
                  <p className="achievement-description">Years of Service</p>
                </div>
              )}
            </VisibilitySensor>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
