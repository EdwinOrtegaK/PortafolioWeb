import React from 'react';
import '../index.css';

const projects = [
  { title: 'Pokemon Adventure', url: 'https://tiburoncin.lat/22305/lab3Webhtml/Index.html', date: 'Jan.2024', type: 'Web Technologies / HTML Only' },
  { title: 'Snorlax CSS', url: 'https://tiburoncin.lat/22305/lab4CssWeb/html/Index.html', date: 'Feb.2024', type: 'Web Technologies / CSS Only' },
  { title: 'Blog Pokemon', url: 'https://web-pry-1.vercel.app/', date: 'May.2024', type: 'Web Technologies / Blog' },
  { title: 'My calculator', url: 'https://calculadora-web-pied.vercel.app/', date: 'May.2024', type: 'Web Technologies / Calculator' },
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-center items-end h-full bg-black text-white p-2 pl-64">
      <div className="project_section">
        <h2 className="project_heading">Projects (Design & Develop)</h2>
        <div className="project_list">
          {projects.map((project, index) => (
            <a key={index} className="project_item text-btn flex" href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="project_info">{project.date} / {project.type}</div>
              <div className="project_title">{project.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
