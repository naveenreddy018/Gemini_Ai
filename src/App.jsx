import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';



import Hello from './components/main/Hello';

import Home from './components/interface/Home';
import Login from './components/interface/Login';
import Register from './components/interface/Register';
import Profile from './components/interface/profile';
import ImageComponent from './components/ImageComponent/image';


function ProjectContent() {
  return (
    <div style={styles.projectContent}>
      <div style={styles.imageContainer}>
        <img src="https://www.xevensolutions.com/wp-content/uploads/2024/02/Googles-Gemini-AI-Uses-Features-and-Industry-Impact-1.jpg" alt="Project" style={styles.projectImage} />
      </div>
      <div style={styles.projectInfo}>
        <h2>About My Project</h2>
        <p>
          Gemini AI is a next-generation web application designed to redefine user interaction through intelligent, conversational capabilities. Acting as a virtual assistant, Gemini AI provides precise information and content tailored to user queries in real-time.
          The application is built on a powerful backend using Node.js and socket technology, ensuring seamless and efficient communication. Its frontend, developed with React.js, offers a sleek, responsive, and user-friendly interface. By integrating modern design frameworks
          like Bootstrap and React-Bootstrap, Gemini AI delivers a visually appealing and intuitive user experience.
           Whether it's for obtaining instant information, generating creative content, or engaging in meaningful conversations, Gemini AI showcases the practical potential of artificial intelligence in everyday applications.
        </p>
      </div>
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);  // State to track dark mode

  // Toggle the dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div style={isDarkMode ? styles.appContainerDark : styles.appContainerLight}>
      <Router>
        <AppNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<div style={styles.content}><Hello /></div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<ProjectContent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// Navbar component with links to each page
function AppNavbar({ toggleTheme, isDarkMode }) {
  const location = useLocation(); // Get current location

  // Hide the navbar on login, register, and chat pages
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/chat';

  return (
    <>
      {!hideNavbar && (
        <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} style={styles.navbar}>
          <Container style={styles.Container}>
            <Navbar.Brand as={Link} to="/" className='gemini-name' style={styles.navBrand}>Gemini Ai</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={styles.hamburger} >
              <span className="custom-bar"></span>
              <span className="custom-bar"></span>
              <span className="custom-bar"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className='hamburger' style={styles.navContainer}>
              <Nav className="ml-auto auto" style={styles.navItems}>
                <Nav.Item>
                  <Link to="/" className="nav-link" style={styles.navLink}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/login" className="nav-link" style={styles.navLink}>Login</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/register" className="nav-link" style={styles.navLink}>Register</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/profile" className="nav-link" style={styles.navLink}>Profile</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/chat" className="nav-link" style={styles.navLink}>Chat</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/about" className="nav-link" style={styles.navLink}>About</Link> {/* Link to About page */}
                </Nav.Item>
              </Nav>
              <Button variant={isDarkMode ? "outline-light" : "outline-dark"} onClick={toggleTheme} style={styles.toggleButton}>
                <ImageComponent src="https://cdn.vectorstock.com/i/500p/67/51/toggle-element-simple-black-switch-interface-vector-48456751.jpg" style={{ width: 50, borderRadius: '50%' }} />
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}
const styles = {
  appContainerLight: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
    // minHeight: '100vh',
    backgroundColor: '#000000',
    color: 'Gold',
  },
  // hamburger:{
  //   padding : '30px',
  //   display :'none'
  // },
  appContainerDark: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
    // minHeight: '100vh',
    backgroundColor: '#333',
    color: '#000000',
  },
  navbar: {
    marginBottom: '20px',
    padding: '10px 20px',
    backgroundColor: "#000000",
    color: " white"
  },
  Container: {
    padding: '0px'
  },
  navContainer: {
    padding: '20px'
  },

  navBrand: {
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '60px 0px'
  },
  navItems: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px'

  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 15px',
    margin: '0 10px',
  },
  navLinkHover: {
    color: 'black',
    textDecoration: 'underline',
  },
  content: {
    flex: 0,
    padding: '0px',
  },
  projectContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
    color:"#fff"
  },
  imageContainer: {
    flex: 1,
    marginRight: '20px',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  projectInfo: {
    maxWidth: '600px',
    fontSize: '16px',
    lineHeight: '1.6',
    color : 'white'
  },
  toggleButton: {
    position: 'absolute',
    top: '65px',
    right: '700px',
    zIndex: '1000',
    borderRadius: '30%'
  },

};

export default App;