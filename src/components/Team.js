const Team = () => {
    const teamMembers = [
      { name: "Mukesh Sadhasivam", role: "Co-Founder", image: "/placeholder.svg?height=200&width=200" },
      { name: "Jayagowtham K", role: "Co-Founder", image: "/placeholder.svg?height=200&width=200" },
      { name: "Aadil Ahmed", role: "Co-Founder", image: "/placeholder.svg?height=200&width=200" },
      { name: "Himayun S", role: "Co-Founder", image: "/placeholder.svg?height=200&width=200" },
    ]
  
    return (
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">Passionate innovators building the future of cloud automation</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                  <div className="image-overlay"></div>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Team
  