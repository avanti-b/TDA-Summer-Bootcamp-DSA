import React from 'react';

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Unlimited movies, TV shows, and more.</h1>
        <h2 style={styles.subtitle}>Watch anywhere. Cancel anytime.</h2>
        <p style={styles.text}>Ready to watch? Enter your email to create or restart your membership.</p>
        <div style={styles.form}>
          <input type="email" placeholder="Email address" style={styles.input} />
          <button style={styles.button}>Get Started &gt;</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/5a5d99e1-d5a2-4041-8602-39b6e0aa0f8d/f34dd98d-16ae-4c6e-9900-84aa98d07ab8/PK-en-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '6rem 2rem',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '4rem 2rem',
    borderRadius: '8px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  input: {
    padding: '0.75rem',
    width: '300px',
    maxWidth: '100%',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#e50914',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Hero;
