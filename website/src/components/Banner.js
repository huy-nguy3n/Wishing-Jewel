import { Container, Row, Col } from "react-bootstrap";
import vietnamImg from "../assets/img/vietnam.jpg";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Banner = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner position-relative" id="home" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${vietnamImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row className="align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <Col xs={12} md={6} className="text-center text-md-left">
            <div>
              <h1>Welcome to Our Charity Website</h1>
              <p>We are a charity group dedicated to supporting projects in Vietnam to improve the lives of its people.</p>
              <p>Join us in making a difference!</p>
              <div className="text-center">
                <Button variant="primary" onClick={scrollToAbout}>Learn More</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
