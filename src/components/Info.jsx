import React from 'react';
import '../index.css';

const Info = () => {
  return (
    <section id="info" className="flex flex-col justify-center items-end h-full bg-black text-white p-2 pl-64">
      <div className="info_section">
        <div className="info_item">
          <h2 className="info_heading">Biography</h2>
          <div className="info_content">
            <p>
            I was born in Guatemala City in May 2003
            </p>
          </div>
        </div>
        <div className="info_item">
          <h2 className="info_heading">Education</h2>
          <div className="info_content">
            <ul>
              <li>High School Diploma in Science and Arts, Liceo Javier, 2021</li>
              <li>Computer Science Engineer, UVG, Present</li>
            </ul>
          </div>
        </div>
        <div className="info_item">
          <h2 className="info_heading">Skills</h2>
          <div className="info_content">
            <ul>
              <li>Python, Java, JavaScript, Kotlin, React, Vite</li>
              <li>HTML, CSS, Node.js, Next.js, PM2, Docker, AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
