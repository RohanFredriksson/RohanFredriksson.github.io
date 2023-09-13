import React from "react";

function Navigation() {

  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {element.scrollIntoView({behavior: 'smooth'});}
  };

  return (
    <nav>
      <ul>
        <li> <button onClick={() => scroll('section1')} />Section 1</li>
        <li> <button onClick={() => scroll('section2')} />Section 2</li>
        <li> <button onClick={() => scroll('section3')} />Section 3</li>
      </ul>
    </nav>
  );

}

export { Navigation };