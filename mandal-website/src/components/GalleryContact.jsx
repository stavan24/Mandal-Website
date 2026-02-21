function GalleryContact() {
  return (
    <section className="py-20 border-t border-orange-500/20 grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
      <div>
        <h2 className="text-4xl text-orange-500 mb-2">Photo Gallery</h2>
        <div className="text-gray-500 dark:text-gray-400 mb-6">Our Activities & Events</div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/g1.jpg" className="rounded shadow-md hover:scale-105 transition" />
          <img src="/g2.jpg" className="rounded shadow-md hover:scale-105 transition" />
          <img src="/g3.jpg" className="rounded shadow-md hover:scale-105 transition" />
          <img src="/g4.jpg" className="rounded shadow-md hover:scale-105 transition" />
        </div>
      </div>

      <div id="contact">
        <h2 className="text-3xl text-orange-500 mb-6">Contact Us</h2>
        <div className="flex flex-col gap-4">
          <input placeholder="Your Name" className="p-3 bg-white dark:bg-black border border-orange-500 rounded" />
          <input placeholder="Your Email" className="p-3 bg-white dark:bg-black border border-orange-500 rounded" />
          <textarea placeholder="Your Message" className="p-3 bg-white dark:bg-black border border-orange-500 rounded" />
          <button className="bg-orange-500 text-white px-6 py-3 rounded shadow-lg hover:scale-105 transition">Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default GalleryContact