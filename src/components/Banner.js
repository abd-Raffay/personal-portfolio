import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Computer Scientist"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                 
                  <h1>{`Hi! I'm Abdul Raffay`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Computer Scientist" ]'>
                    <span className="wrap">{text}</span></span></h1>
                  <p>Dedicated and detail-oriented professional with a Bachelor's degree
                    in Computer Science, possessing a solid foundation in software
                    development, algorithms, and data structures. Proficient in various
                    programming languages and tools, enabling adaptability and
                    success in diverse development environments.</p>
                  <button onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}>Let’s Connect <ArrowRightCircle size={25} /></button>


    
                </div>}
            </TrackVisibility>
       
     
        </Row>
      </Container>
    </section>
  )
}
