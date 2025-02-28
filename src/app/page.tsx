"use client";


import React, { useState, useEffect } from 'react';

// Inline style objects for easy readability
const styles = {
  landingPage: {
    fontFamily: 'Arial, sans-serif',
    background: '#fff',
    color: '#333',
  } as React.CSSProperties,
  stickyNav: {
    position: 'sticky' as const,
    top: 0,
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    padding: '1rem',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navMenu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
  navItem: {
    position: 'relative',
    cursor: 'pointer',
  },
  searchInput: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  heroSection: {
    position: 'relative' as const,
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  videoCarousel: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  heroOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    textAlign: 'center' as const,
  },
  liquidGradient: {
    background: 'linear-gradient(to right, #ff4081, #ff80ab)',
    WebkitBackgroundClip: 'text' as const,
    color: 'transparent',
  },
  ctaButton: {
    padding: '1rem 2rem',
    fontSize: '1.25rem',
    border: 'none',
    borderRadius: '5px',
    background: '#ff4081',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  // Personalized Greeting Styles
  greetingSection: {
    padding: '2rem',
    textAlign: 'center' as const,
  },
  greetingHeader: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  vipProgress: {
    marginTop: '1rem',
  },
  // Product Grid Styles
  productGrid: {
    padding: '2rem',
  },
  productTitle: {
    textAlign: 'center' as const,
    marginBottom: '1rem',
    fontSize: '2rem',
  },
  masonryLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
  } as React.CSSProperties,
  productCard: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  // Storytelling Section Styles
  storytellingSection: {
    padding: '2rem',
    background: '#f9f9f9',
  },
  timelineSlider: {
    width: '100%',
    marginTop: '1rem',
  },
  // Virtual Try-On Styles
  virtualTryOn: {
    padding: '2rem',
    textAlign: 'center' as const,
  },
  cameraIcon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  colorSwatches: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  swatch: (color: string) => ({
    backgroundColor: color,
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
  }),
  // Footer Styles
  footer: {
    padding: '2rem',
    background: '#f0f0f0',
    marginTop: '2rem',
    textAlign: 'center' as const,
  },
  newsletterInput: {
    padding: '0.5rem',
    marginRight: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

const LandingPage: React.FC = () => {
  // Simulated user state for personalized greeting
  const [userName] = useState("Alex");
  const [typedName, setTypedName] = useState("");
  const [isVIP] = useState(true);

  // Typing animation for user greeting
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedName((prev) => prev + userName[index]);
      index++;
      if (index === userName.length) {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, [userName]);

  // Video sources for the hero and storytelling sections
  const videoSources: string[] = [
    "video1.mp4", // [Comment: Place video file next to the source code]
    "video2.mp4",
    "video3.mp4",
  ];

  // Dummy products data for the curated product grid
  const products = [
    { id: 1, title: "Summer Essentials", image: "prod1.jpg", price: "$99" },
    { id: 2, title: "Autumn Vibes", image: "prod2.jpg", price: "$129" },
    { id: 3, title: "Winter Wonders", image: "prod3.jpg", price: "$149" },
    // [Comment: Add additional products as needed]
  ];

  // CTA hover handler for additional interactive effects
  const handleCTAHover = () => {
    // [Comment: Insert additional hover animation logic here if needed]
  };

  return (
    <div style={styles.landingPage}>
      {/* 1. Navigation: Holographic Menu */}
      <header style={styles.stickyNav}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>LuminaLogix</div>
        <nav>
          <ul style={styles.navMenu}>
            <li style={styles.navItem}>
              Men
              {/* [Comment: Add dropdown with holographic effects on hover] */}
            </li>
            <li style={styles.navItem}>
              Women
              {/* [Comment: Add dropdown with holographic effects on hover] */}
            </li>
            <li style={styles.navItem}>
              <input
                type="text"
                placeholder="Search"
                style={styles.searchInput}
              />
              {/* [Comment: Search bar expands with a morphing ripple effect and autocomplete animations] */}
            </li>
          </ul>
        </nav>
      </header>

      {/* 2. Hero Section: The Runway Experience */}
      <section style={styles.heroSection}>
        <div>
          {videoSources.map((src, index) => (
            <video key={index} style={styles.videoCarousel} autoPlay muted loop>
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            The Runway Experience{' '}
            <span style={styles.liquidGradient}>
              Summer Essentials
              {/* [Comment: Text overlay with liquid gradient fill effect] */}
            </span>
          </h1>
          <button
            style={styles.ctaButton}
            onMouseEnter={handleCTAHover}
            onClick={() => {
              /* [Comment: Navigate to shop page or trigger action] */
            }}
          >
            Shop Now
            {/* [Comment: Button that pulses and morphs on hover into a shopping bag icon] */}
          </button>
        </div>
        {/* [Comment: Add additional 3D parallax layers as absolutely positioned elements here] */}
      </section>

      {/* 3. Personalized Greeting: AI Stylist Welcome */}
      <section style={styles.greetingSection}>
        <h2 style={styles.greetingHeader}>
          Hi, {typedName}!{' '}
          <span>
            🎩👗{/* [Comment: Emoji that bounces after the typing animation] */}
          </span>
        </h2>
        {isVIP && (
          <div style={styles.vipProgress}>
            {/* [Comment: Progress bar fills with neon glow effect for VIP status] */}
            <div style={{ background: '#0ff', height: '10px', width: '100%', borderRadius: '5px' }}></div>
            <span>VIP Status</span>
          </div>
        )}
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          {/* [Comment: Floating seasonal badge that rotates 360° on load] */}
          Spring Shopper
        </div>
      </section>

      {/* 4. Curated Product Grid: Living Catalog */}
      <section style={styles.productGrid}>
        <h2 style={styles.productTitle}>Living Catalog</h2>
        <div style={styles.masonryLayout}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <div>
                <img src={product.image} alt={product.title} style={{ width: '100%' }} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
              {/* [Comment: 3D card flip effect on hover can be added via additional inline styles or CSS-in-JS libraries] */}
            </div>
          ))}
        </div>
        {/* [Comment: Implement infinite scroll effect to load more products with a wave distortion animation] */}
      </section>

      {/* 5. Storytelling Section: Behind the Design */}
      <section style={styles.storytellingSection}>
        <h2 style={styles.productTitle}>Behind the Design</h2>
        <div>
          {videoSources.map((src, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <video style={{ width: '100%' }} autoPlay muted loop>
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
        <input type="range" min="0" max="100" style={styles.timelineSlider} />
        {/* [Comment: Slider with particle trail animation on horizontal scroll] */}
      </section>

      {/* 6. Shopping Tools: Virtual Try-On Preview */}
      <section style={styles.virtualTryOn}>
        <h2 style={styles.productTitle}>Virtual Try-On Preview</h2>
        <div>
          <div style={styles.cameraIcon}>📷</div>
          <button
            style={styles.ctaButton}
            onClick={() => {
              /* [Comment: Trigger AR portal-like animation to virtual mirror mode with cloth-simulation physics] */
            }}
          >
            Try It Virtually
          </button>
        </div>
        <div style={styles.colorSwatches}>
          {['#FF0000', '#00FF00', '#0000FF'].map((color, index) => (
            <div key={index} style={styles.swatch(color)} />
          ))}
        </div>
      </section>

      {/* 7. Footer: Social Pulse */}
      <footer style={styles.footer}>
        <div>
          <h3>Stay in the Loop</h3>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.newsletterInput}
          />
          <button style={styles.ctaButton}>Subscribe</button>
          {/* [Comment: Email input with magnetic cursor effect; consider adding extra JS for that behavior] */}
        </div>
        <div style={{ marginTop: '1rem' }}>
          <a href="#facebook">Facebook</a> |{' '}
          <a href="#twitter">Twitter</a> |{' '}
          <a href="#instagram">Instagram</a>
        </div>
      </footer>

      {/* 8. Seamless Page Transitions */}
      {/* [Comment: Consider using a library like Framer Motion for smooth transitions (e.g., liquid gradient wipes, morphing logo loading indicator)] */}
    </div>
  );
};

export default LandingPage;
