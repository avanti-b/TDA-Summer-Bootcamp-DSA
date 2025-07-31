import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix"
        style={styles.logo}
      />
      <button style={styles.button}>Sign In</button>
    </header>
  );
}

const styles = {
  header: {
    background: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #333',
  },
  logo: {
    height: '40px',
  },
  button: {
    backgroundColor: '#e50914',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Header;
