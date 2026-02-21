function Navbar() {
  return (
    <nav style={nav}>
      <h2>Shree Ram Seva Mandal</h2>
      <div>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#members">Members</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 30px",
  background: "#000",
  color: "gold",
}

export default Navbar