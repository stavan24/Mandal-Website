function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center border-t border-orange-500/20">
      <div>
        <h2 className="text-4xl text-orange-500 mb-2">About Us</h2>
        <div className="text-orange-400 mb-4">Our Story & Mission</div>
        <p className="text-gray-600 dark:text-gray-300">
          Established in 2010, Shivaji Mandal is dedicated to organizing festivals,
          social work, and sports activities for the betterment of our village.
        </p>
      </div>
      <img src="/diya.jpg" className="rounded-xl shadow-xl" />
    </section>
  );
}

export default About