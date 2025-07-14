import React from 'react';

function Features() {
  const data = [
    {
      title: 'Enjoy on your TV.',
      desc: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    },
    {
      title: 'Download your shows to watch offline.',
      desc: 'Save your favorites easily and always have something to watch.',
    },
    {
      title: 'Watch everywhere.',
      desc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    },
  ];

  return (
    <section style={styles.container}>
      {data.map((feature, idx) => (
        <div key={idx} style={styles.card}>
          <h3 style={styles.title}>{feature.title}</h3>
          <p style={styles.desc}>{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '3rem 2rem',
    display: 'grid',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#111',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  desc: {
    fontSize: '1.1rem',
    color: '#ccc',
  },
};

export default Features;
