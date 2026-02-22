function Events() {
  return (
    <section id="events" className="py-20 text-center border-t border-orange-500/20">
      <h2 className="text-4xl text-orange-500 mb-2">Upcoming Events</h2>
      <div className="text-gray-500 dark:text-gray-400 mb-10">What's Happening</div>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        
        <EventCard img="/ram.png" title="75th Ram navami" date="March 2026" />
        <EventCard img="/blood.png" title="Blood Donation" date="September 2027" />
        <EventCard img="/cleanliness.png" title="Cleanliness Drive" date="October 2026" />
        <EventCard img="/cleanliness.png" title="" date="October 2026" />
      </div>

      
    </section>
  );
}

function EventCard({ img, title, date }) {
  return (
    <div className="bg-white dark:bg-[#111] w-[300px] rounded overflow-hidden border border-orange-500/30 shadow-lg hover:scale-105 transition">
      <img src={img} className="w-[600px] h-[400px] object-cover" />
      <div className="p-4 text-left">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{date}</div>
      </div>
    </div>
  );
}

export default Events