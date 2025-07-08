"use client"

import { useState, useEffect } from "react"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "AI-Driven AWS Cloud Automation"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="brand-name">CloudPilot</span>
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="hero-subtitle">
              Featuring an intelligent AI agent that provides a conversational interface to AWS for automated
              provisioning, configuration, and deployment.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">
                Start Free Trial
                <span className="button-glow"></span>
              </button>
              <button className="secondary-button">
                Watch Demo
                <svg className="play-icon" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="chat-interface">
              <div className="chat-header">
                <div className="chat-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>CloudPilot AI</span>
              </div>
              <div className="chat-messages">
                <div className="message user-message">
                  Create a VPC with public and private subnets and launch a Node.js EC2 instance
                </div>
                <div className="message ai-message">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  Setting up your infrastructure... ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
