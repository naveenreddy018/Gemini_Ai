import React from 'react';
import "./home.css"

function Home() {
  return (
    <div className='homeContainer' style={styles.homeContainer}>
      <h1 className='heading' style={styles.heading}>Welcome to Gemini AI!</h1>
      <p style={styles.subHeading}>Your personal assistant for smarter interactions and updates!</p>

      {/* Featured Section */}
      <div style={styles.featureSection}>
        {/* <img
          src="https://thumbs.dreamstime.com/b/ai-robot-working-office-using-computer-laptop-typing-keyboard-communication-network-generative-301354808.jpg" width="50px"
          alt="Feature"
          style={styles.featureImage}
        /> */}
        <div style={styles.featureText}>
          <h2>Latest Feature: Real-time Chat</h2>
          {/* <p style={styles.featureSubText}>
            Experience seamless communication with our real-time chat feature. 
            Collaborate and share insights instantly with other users.
          </p> */}
        </div>
      </div>

      {/* Highlights Section */}
      <div  style={styles.highlightsSection}>
        {/* <h2 style={styles.sectionHeading}>App Highlights</h2> */}
        <div className='cards' style={styles.cardsContainer}>
         <a href="https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/#ceo-message">
         <div style={styles.card}>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240417104003/Google-Gemini-AI-Agents-Introduced-At-Google-Next-2024.webp"
              alt="Highlight 1"
              style={styles.cardImage}
            />
            <h3>Introducing Gemini 2.0</h3>
            <p>Gemini 2.0 available in Gemini app, our AI assistant</p>
          </div>
         </a>
         <a href="https://cloud.google.com/products/gemini?hl=en">
         <div style={styles.card}>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240417104003/Google-Gemini-AI-Agents-Introduced-At-Google-Next-2024.webp"
              alt="Highlight 2"
              style={styles.cardImage}
            />
            <h3>AI-Powered Assistance</h3>
            <p>Let Gemini AI handle repetitive tasks efficiently for you.</p>
          </div>
         </a>
          <a href="https://support.google.com/gemini/answer/14286560?hl=en&co=GENIE.Platform%3DDesktop">
          <div style={styles.card}>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240417104003/Google-Gemini-AI-Agents-Introduced-At-Google-Next-2024.webp"
              alt="Highlight 3"
              style={styles.cardImage}
            />
            <h3>Generate images with Gemini</h3>
            <p> Gemini  can help you generate images to help bring your imagination to life.</p>
          </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Gemini AI. All rights reserved.</p>
        <p>
          Follow us: <a href="#" style={styles.footerLink}>Twitter</a> | <a href="#" style={styles.footerLink}>LinkedIn</a> | <a href="#" style={styles.footerLink}>GitHub</a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  homeContainer: {
    padding: '0px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop:"50px"
  },
  heading: {
    fontSize: '36px',
    color: '#4A90E2',
  },
  subHeading: {
    fontSize: '18px',
    margin: '10px 0 30px',
    color: '#fff',
  },
  featureSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    margin: '30px 0',
  },
  featureSubText : {
    color : "#FFFFFF"
  },
  featureImage: {
    width: '150px',
    
    objectFit: 'cover',
    borderRadius: '8px',
  },
  featureText: {
    maxWidth: '400px',
    textAlign: 'left',
    color : '#fff',
 
  },
  highlightsSection: {
    margin: '10px 0',
  },
  sectionHeading: {
    fontSize: '24px',
    color: '#4A90E2',
    marginBottom: '20px',
  },
  cardsContainer: {
    display: 'flex',
    gap: '100px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: '300px',
    textAlign: 'center',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardImage: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  footer: {
    marginTop: '50px',
    padding: '10px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    borderRadius: '8px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'underline',
  },




};





export default Home;
