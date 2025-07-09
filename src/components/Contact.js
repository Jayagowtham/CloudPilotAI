"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzRLOJA8gfWeuhDdkPNsShygcMiAi-XZGQHA3o74rp0GbeT2R30f2aclU3-LKak94UT/exec"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create form data
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("company", formData.company)
      formDataToSend.append("message", formData.message)

      // Send to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })

        // Also save to localStorage as backup
        const submissions = JSON.parse(localStorage.getItem("betaSubmissions") || "[]")
        submissions.push({
          ...formData,
          timestamp: new Date().toISOString(),
        })
        localStorage.setItem("betaSubmissions", JSON.stringify(submissions))

        console.log("Form submitted successfully!")
      } else {
        throw new Error(result.error || "Submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your AWS automation needs..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Join Beta Program"}
                <span className="button-glow"></span>
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="status-message success">
                  ✅ Thank you! We'll be in touch soon with beta access details.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="status-message error">
                  ❌ Sorry, there was an error. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
