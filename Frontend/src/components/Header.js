import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap's JavaScript components

function Header() {
  const navLinks = [
    {
      linkName: "Home",
      route: "home"
    },
    {
      linkName: "About",
      route: "about"
    },
    {
      linkName: "Projects",
      route: "projects"
    },
    {
      linkName: "Contact",
      route: "contact"
    }
  ];

  const [activeLink, setActiveLink] = useState(navLinks[0].route); // Initialize with the route of the first link

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (route) => {
    setActiveLink(route);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontFamily: 'Inconsolata, monospace' }}>Suyash.dev</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <Link
                  to={link.route}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className={`nav-link ${activeLink === link.route ? 'active' : ''} p-2`}
                  style={{ cursor: 'pointer', backgroundColor: activeLink === link.route ? 'rgb(59, 130, 246, 1)' : 'transparent', borderRadius: '5px', color: activeLink === link.route ? 'white' : 'black' }}
                  onClick={() => handleLinkClick(link.route)} // Added onClick event
                >
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;