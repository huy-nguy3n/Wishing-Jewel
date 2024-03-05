import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {  
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="d-flex align-items-center">
              <img src={logo} alt="Logo" style={{ marginRight: '10px', width: '2em', height: '2em' }} />
              <h2 style={{ color: "white", fontWeight: "bold", margin: 0 }}>Wishing Jewel</h2>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:info.wishingjewel@gmail.com"><img src={navIcon1} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
