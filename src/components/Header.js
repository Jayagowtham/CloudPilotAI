"use client"

import { useState, useEffect } from "react"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <div className="hexagon-pattern">
              <div className="hex"></div>
              <div className="hex"></div>
              <div className="hex"></div>
            </div>
          </div>
          <span className="logo-text">Voxwave AI</span>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#demo">Demo</a>
          <a href="#team">Team</a>
          <a href="#contact" className="cta-button">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
