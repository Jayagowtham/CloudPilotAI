import mukeshImg from "../images/Mukesh.jpg"
import memethImg from "../images/Memeth.jpeg"
import gowthamImg from "../images/gowtham.jpeg"
import melisaImg from "../images/Melisa.jpeg"

const Team = () => {
  const teamMembers = [
    { name: "Mukesh Sadhasivam", role: "Co-Founder", image: mukeshImg },
    { name: "Mehmet Can Hizarci", role: "Co-Founder", image: memethImg },
    { name: "Jayagowtham K", role: "Co-Founder", image: gowthamImg },
    { name: "Inasisslem", role: "Business Development", image: melisaImg },
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
