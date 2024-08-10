import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import linkedinLogo from '../assets/img/linkedin-logo.svg';
import githubLogo from '../assets/img/github-logo.svg';
import instagramLogo from '../assets/img/instagram-logo.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={linkedinLogo} alt="Icon" /></a>
              <a href="#"><img src={githubLogo} alt="Icon" /></a>
              <a href="#"><img src={instagramLogo} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
