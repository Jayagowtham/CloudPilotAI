"use client"

import { useState, useEffect, useRef } from "react"

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const featuresRef = useRef(null)

  const features = [
    {
      id: 1,
      icon: "🤖",
      title: "Automated Provisioning",
      description:
        "Instantly sets up networks, servers, databases, containers, and CI/CD pipelines based on simple prompts.",
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Policy & Compliance",
      description:
        "Enforces security and GDPR best practices (e.g. data encryption, regional data residency) by default.",
    },
    {
      id: 3,
      icon: "🧠",
      title: "Continuous Learning",
      description: "Learns from past deployments and AWS documentation to improve over time.",
    },
    {
      id: 4,
      icon: "🔗",
      title: "Integration",
      description: "Connects with Slack/Teams, email, and developer tools for in-context guidance and notifications.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = Number.parseInt(entry.target.dataset.featureId)
            setVisibleFeatures((prev) => [...prev, featureId])
          }
        })
      },
      { threshold: 0.3 },
    )

    const featureElements = featuresRef.current?.querySelectorAll(".feature-card")
    featureElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="features" ref={featuresRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Capabilities</h2>
          <p className="section-subtitle">
            Powerful AI-driven features that transform how you manage AWS infrastructure
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${visibleFeatures.includes(feature.id) ? "visible" : ""}`}
              data-feature-id={feature.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon">
                <span>{feature.icon}</span>
                <div className="icon-glow"></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
