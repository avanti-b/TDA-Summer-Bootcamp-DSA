import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Questions? Call 1-800-000-000</p>
      <p style={styles.subtext}>Netflix Clone • Built with React 💻</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#111',
    color: '#bbb',
    textAlign: 'center',
    padding: '2rem',
    marginTop: '2rem',
    fontSize: '0.9rem',
  },
  subtext: {
    marginTop: '0.5rem',
    color: '#666',
  },
};

export default Footer;
