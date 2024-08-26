import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import linkedinLogo from '../assets/img/social-logo/linkedin-logo.svg';
import githubLogo from '../assets/img/social-logo/github-logo.svg';
import instagramLogo from '../assets/img/social-logo/instagram-logo.svg';

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
            <a href="https://www.linkedin.com/in/abd-raffay/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="" /></a>

<a href="https://github.com/abd-Raffay" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="" /></a>
<a href="https://www.instagram.com/abd_raffay?igsh=MWFvejB5eG5kbTJxMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
