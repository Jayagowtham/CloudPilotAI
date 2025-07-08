"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your interest! We'll be in touch soon.")
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Ready to Transform Your Cloud Operations?</h2>
            <p className="section-subtitle">
              Join the beta and be among the first to experience AI-powered AWS automation.
            </p>
            <div className="contact-features">
              <div className="contact-feature">
                <span className="feature-icon">🚀</span>
                <div>
                  <h4>Early Access</h4>
                  <p>Get priority access to CloudPilot beta</p>
                </div>
              </div>
              <div className="contact-feature">
                <span className="feature-icon">💬</span>
                <div>
                  <h4>Direct Support</h4>
                  <p>Work directly with our founding team</p>
                </div>
              </div>
              <div className="contact-feature">
                <span className="feature-icon">🎯</span>
                <div>
                  <h4>Custom Setup</h4>
                  <p>Tailored configuration for your needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your AWS automation needs..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Join Beta Program
                <span className="button-glow"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
