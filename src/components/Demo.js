"use client"

import { useState } from "react"

const Demo = () => {
  const [activeTab, setActiveTab] = useState("startup")

  const scenarios = {
    startup: {
      title: "European SaaS Startup",
      description:
        "A European SaaS startup launching a new product can have CloudPilot automatically provision a complete staging environment on AWS, even if their offshore team is unfamiliar with AWS.",
      steps: [
        'Tell CloudPilot: "Set up staging environment for our SaaS app"',
        "AI analyzes requirements and AWS best practices",
        "Automatically provisions VPC, databases, and containers",
        "Configures security and compliance for EU regulations",
      ],
    },
    agency: {
      title: "Development Agency",
      description:
        "A dev agency can onboard a new client by having CloudPilot ask configuration questions and build the infrastructure accordingly, reducing trial-and-error.",
      steps: [
        'CloudPilot asks: "What type of application are you deploying?"',
        "Gathers client requirements through conversation",
        "Generates infrastructure blueprint",
        "Deploys optimized AWS environment automatically",
      ],
    },
  }

  return (
    <section id="demo" className="demo">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">See CloudPilot in Action</h2>
          <p className="section-subtitle">Real-world scenarios showing how CloudPilot simplifies AWS deployment</p>
        </div>

        <div className="demo-tabs">
          <button
            className={`tab-button ${activeTab === "startup" ? "active" : ""}`}
            onClick={() => setActiveTab("startup")}
          >
            SaaS Startup
          </button>
          <button
            className={`tab-button ${activeTab === "agency" ? "active" : ""}`}
            onClick={() => setActiveTab("agency")}
          >
            Dev Agency
          </button>
        </div>

        <div className="demo-content">
          <div className="demo-scenario">
            <h3 className="scenario-title">{scenarios[activeTab].title}</h3>
            <p className="scenario-description">{scenarios[activeTab].description}</p>

            <div className="demo-steps">
              {scenarios[activeTab].steps.map((step, index) => (
                <div key={index} className="demo-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="demo-visual">
            <div className="workflow-diagram">
              <div className="workflow-node chat-node">
                <span>💬</span>
                <p>Natural Language Input</p>
              </div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node ai-node">
                <span>🤖</span>
                <p>AI Processing</p>
              </div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-node aws-node">
                <span>☁️</span>
                <p>AWS Deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
