function Events() {
  return (
    <section id="events" className="py-20 text-center border-t border-orange-500/20">
      <h2 className="text-4xl text-orange-500 mb-2">Upcoming Events</h2>
      <div className="text-gray-500 dark:text-gray-400 mb-10">What's Happening</div>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        <EventCard img="/event1.jpg" title="Ganesh Festival" date="August 2024" />
        <EventCard img="/event2.jpg" title="Football Tournament" date="September 2024" />
        <EventCard img="/event3.jpg" title="Cleanliness Drive" date="October 2024" />
      </div>

      <button className="mt-10 bg-orange-500 text-white px-6 py-3 rounded shadow-lg hover:scale-105 transition">
        View All Events
      </button>
    </section>
  );
}

function EventCard({ img, title, date }) {
  return (
    <div className="bg-white dark:bg-[#111] w-[300px] rounded overflow-hidden border border-orange-500/30 shadow-lg hover:scale-105 transition">
      <img src={img} className="w-full h-[180px] object-cover" />
      <div className="p-4 text-left">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{date}</div>
      </div>
    </div>
  );
}

export default Events