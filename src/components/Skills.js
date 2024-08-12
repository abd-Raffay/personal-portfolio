import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import html from "../assets/img/html-1.svg";
import Firebase from "../assets/img/firebase-1.svg";
import github from "../assets/img/github-icon-2.svg";
import figma from "../assets/img/figma-icon.svg"
import python from "../assets/img/python.svg";
import angular from "../assets/img/angular.svg";
import c from "../assets/img/c++.svg";
import flutter from "../assets/img/flutter.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am proficient in a range of technologies and tools that span various aspects of software development.
                           My expertise includes programming languages such as C++, Dart, and Python, and I have hands-on experience with web development frameworks
                            like React and Angular. I am skilled in mobile development using Flutter, and I am familiar with backend technologies including Node.js.
                             Additionally, I am experienced with MySQL and have knowledge of assembly language (x8086). I utilize version control systems like Git to
                              maintain code quality and collaboration, and I have experience with Firebase and Firestore for real-time data management. My technical
                               skills are complemented by a strong foundation in problem-solving, teamwork, and effective communication, making me well-equipped to 
                               handle diverse and challenging projects.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={angular} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={Firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
