import React from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Info', path: '/info' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="h-full w-64 flex flex-col justify-center bg-black text-white p-8">
      <h1 className="text-5xl font-extrabold">Edwin Ortega Kou</h1>
      <div>
        <p className="text-lg mt-2 whitespace-nowrap">Computer Science</p>
        <p className="text-lg mb-4 whitespace-nowrap">Engineer Student</p>
      </div>
      <ul className="mt-8 space-y-2">
        {navItems.map((item) => (
          <li key={item.path} className="hover:text-gray-500">
            <a href={item.path}>
              {currentPath === item.path ? '●' : item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
