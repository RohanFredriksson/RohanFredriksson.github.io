import React from "react";

import './../styles/Navigation.css';

function Navigation() {

  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {element.scrollIntoView({behavior: 'smooth'});}
  };

  return (
      <ul className="navigation">
        <li onClick={() => scroll('home')}>Home</li>
        <li onClick={() => scroll('about')}>About</li>
        <li onClick={() => scroll('projects')}>Projects</li>
      </ul>
  );

}

export default Navigation;