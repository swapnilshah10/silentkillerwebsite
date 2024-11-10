"use client";

import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down by at least one window height
      setShowButton(window.scrollY > window.innerHeight);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "20px",
          padding: "12px 16px",
          fontSize: "18px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000, // Ensure it's above other elements
          opacity: 1, // Make sure it's visible
        }}
        className="back-to-top-button"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
