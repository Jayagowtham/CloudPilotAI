const Benefits = () => {
    const benefits = [
      { icon: "⚡", title: "Increased Efficiency", description: "Automate repetitive tasks and focus on strategic work" },
      { icon: "💰", title: "Reduced Costs", description: "Optimize resource utilization and reduce manual intervention" },
      { icon: "🚀", title: "Faster Time to Market", description: "Automate development and deployment processes" },
      { icon: "🔒", title: "Improved Security", description: "Automated security tasks reduce human error risk" },
      { icon: "📊", title: "Better Compliance", description: "Automated compliance tasks ensure regulatory adherence" },
      { icon: "👥", title: "Talent Optimization", description: "Enable developers to focus on higher-value tasks" },
    ]
  
    return (
      <section id="benefits" className="benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose CloudPilot?</h2>
            <p className="section-subtitle">Transform your cloud operations with AI-powered automation</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Benefits
  