function Hero() {
  return (
    <section style={hero}>
      <h1>Shree Ram Seva Mandal</h1>
      <p>Serving Dharma & Village Unity Since 75 Years</p>
      <button style={btn}>Explore Activities</button>
    </section>
  )
}

const hero = {
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#111",
}

const btn = {
  padding: "10px 20px",
  background: "gold",
  border: "none",
  cursor: "pointer",
  marginTop: "10px",
}

export default Hero