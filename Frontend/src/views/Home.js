import React, { useState, useEffect } from 'react';
import '../styles.css'; // Import the Home styles
import { animated } from 'react-spring';
import profilePictureImg from '../assets/images/codingImg.svg';
import { useSpring } from 'react-spring';
import cloudDark from '../assets/images/cloudBg.png';
import resume from '../assets/resume/Suyash_Kulkarni_CV.docx';

function Home({ id }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const messages = [
      "Front End Developer",
      "Full Stack Developer",
      "Software Developer"
    ];

    const interval = setInterval(() => {
      if (typing && index < messages[currentMessageIndex].length) {
        setText((prevText) => prevText + messages[currentMessageIndex][index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else if (!typing && index === 0) {
        setTimeout(() => {
          setTyping(true);
        }, 1000); // Delay before typing the next message
      } else if (!typing && index > 0) {
        setText((prevText) => prevText.slice(0, -1));
        setIndex((prevIndex) => prevIndex - 1);
      } else {
        setTyping(false);
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }
    }, 100); // Adjust typing speed as needed (e.g., 100ms for a faster typing effect)

    return () => clearInterval(interval);
  }, [index, currentMessageIndex, typing]);

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  return (
    <section className="home" id={id} style={{ backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover", minHeight: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-custom">
            <animated.div style={animationProps}>
              <span className="heading">Hi, I am Karishma Patel</span>
              <span className={`${"typing-animation"} ${"subheading"}`}>{text}</span>
              <span>Welcome to a realm where IT expertise meets innovation! With mastery in React.js, TypeScript, SharePoint SPFx, and a suite of cutting-edge technologies, I architect seamless, user-centric web applications that redefine excellence. Leveraging SharePoint for optimized solutions is my forte, and my passion for continuous learning ensures I'm at the forefront of tech trends. Let's collaborate on projects that demand innovation and efficiency, transforming challenges into opportunities for success. Explore my portfolio and let's embark on a journey of groundbreaking solutions together!</span>
              <div>
                <a href={resume} download>
                  <button class="btn resume-button">Download Resume</button>
                </a>
              </div>
            </animated.div>
          </div>
          <div className="col-md-6">
            <animated.div style={animationProps}>
              <img src={profilePictureImg} alt="Your Name" className="img-fluid" />
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;