import React from 'react';
import '../index.css';

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center items-end h-full bg-black text-white p-2 pl-64">
      <div className="info_section">
        <div className="info_item">
          <h2 className="info_heading">Contact me</h2>
          <div className="info_content">
            <ul>
              <li><a className="text-btn" href="https://github.com/EdwinOrtegaK?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
              <li><a className="text-btn" href="https://www.linkedin.com/in/edwin-ortega-a85418233/" target="_blank" rel="noopener noreferrer">Linkedin ↗</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
