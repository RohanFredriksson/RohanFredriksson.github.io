import React from "react";

function Navigation() {

  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {element.scrollIntoView({behavior: 'smooth'});}
  };

  return (
      <ul style={{position: 'absolute', height: 100}}>
        <li onClick={() => scroll('home')}>Home</li>
        <li onClick={() => scroll('about')}>About</li>
        <li onClick={() => scroll('projects')}>Projects</li>
      </ul>
  );

}

export { Navigation };