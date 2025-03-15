"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

// Inline styles with TypeScript-safe properties
const styles: { [key: string]: React.CSSProperties } = {
  landingPage: {
    fontFamily: "Arial, sans-serif",
    background: "#fff",
    color: "#333",
  },
  stickyNav: {
    position: "sticky" as const,
    top: 0,
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    padding: "1rem",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navMenu: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: "relative" as const, // ✅ Fixed TypeScript error
    cursor: "pointer",
  },
  searchInput: {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  heroSection: {
    position: "relative" as const,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "1rem",
    textAlign: "center" as const,
  },
  productGrid: {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
  },
  productCard: {
    border: "1px solid #ccc",
    padding: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    position: "relative" as const,
    overflow: "hidden",
  },
};

const LandingPage: React.FC = () => {
  const [userName] = useState("Alex");
  const [typedName, setTypedName] = useState("");
  const [isVIP] = useState(true);

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

  // Dummy product data
  const products = [
    { id: 1, title: "Summer Essentials", image: "/prod1.jpg", price: "$99" },
    { id: 2, title: "Autumn Vibes", image: "/prod2.jpg", price: "$129" },
    { id: 3, title: "Winter Wonders", image: "/prod3.jpg", price: "$149" },
  ];

  return (
    <div style={styles.landingPage}>
      {/* Navigation */}
      <header style={styles.stickyNav}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>LuminaLogix</div>
        <nav>
          <ul style={styles.navMenu}>
            <li style={styles.navItem}>Men</li>
            <li style={styles.navItem}>Women</li>
            <li style={styles.navItem}>
              <input type="text" placeholder="Search" style={styles.searchInput} />
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>The Runway Experience</h1>
          <p>AI-Powered Fashion Shopping</p>
        </div>
      </section>

      {/* AI Stylist Greeting */}
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Hi, {typedName}! 🎩👗</h2>
        {isVIP && <p style={{ color: "#ff4081" }}>VIP Status Activated</p>}
      </section>

      {/* Product Grid */}
      <section style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <Image src={product.image} alt={product.title} width={200} height={200} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
