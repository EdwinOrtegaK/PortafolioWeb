import React from 'react';
import '../index.css';

const Home = () => {
  return (
    <section id="home" className="flex flex-col justify-center items-end h-full bg-black text-white p-2 pl-64">
      <div className="content-scroll">
        <p className="mt-4">
          I am a passionate student of the Universidad del Valle de Guatemala, 
          I am studying Computer Science Engineering, I am dedicated to explore and 
          develop innovative solutions that integrate advanced technology and creative design.
        </p>
        <p className="mt-4">
          My goal is to leverage my technical skills and creativity to contribute to the 
          development of projects that have a positive impact on society. I am always looking 
          for new challenges that allow me to grow professionally and personally.
        </p>
        <p className="mt-4">
          In addition to my academic interest, I enjoy collaborating in web development projects, 
          where I can apply my knowledge and learn new technologies. I am committed to continuous 
          learning and constant improvement of my skills.
        </p>
      </div>
    </section>
  );
};

export default Home;
