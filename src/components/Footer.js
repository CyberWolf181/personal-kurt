import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import kurt from "../assets/img/kurt.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={kurt} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ekrem-k-3a094b19a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/ekremkurt1907"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/ekremkurt1907/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved by Cryptowolf</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}