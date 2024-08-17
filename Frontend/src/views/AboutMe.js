import React from 'react';
import { motion } from "framer-motion";
import { techStack } from "../constants/Constants";

function AboutMe({ id }) {

  return (
    <section id={id} className='mt-5'>
      <div className="container">
        <h2>About Me</h2>
        <div className="row mt-5">
          <div className="col-lg-6">
            <h4 style={{ color: 'rgb(59, 130, 246, 1)' }}>A bit about me</h4>
            <p>
            I'm a Software Developer who is a highly motivated person with strong technical, 
            problem-solving with excellent time management, leadership, and team skills who is 
            likely to create an impact on the organization/work, I'm a part of and always loves 
            to socialize and experience new things in life.
            </p>
          </div>
          <div className='col-lg-6'>
            <h4 style={{ color: 'rgb(59, 130, 246, 1)' }}>Technologies and Tools</h4>
            <p>
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          {techStack.map((el, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
            >
              <div className="rectangle bg-light d-flex align-items-center p-3">
                <img alt="Language Icon" src={el.link} className="me-3 img-fluid" style={{ width: '60px', height: 'auto' }} />
                <h4 className="text-md ml-4">{el.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;