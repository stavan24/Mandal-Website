function Members() {
  return (
    <section id="members" className="py-20 text-center border-t border-orange-500/20">
      <h2 className="text-4xl text-orange-500 mb-2">Our Members</h2>
      <div className="text-gray-500 dark:text-gray-400 mb-10">Meet Our Team</div>

      <div className="flex flex-wrap justify-center gap-8">
        <Member img="/member1.jpg" name="Raju Pattere" role="President" />
        <Member img="/member2.jpg" name="Ganpat Halde" role="Vice President" />
       
        <Member img="/member4.jpg" name="Shashikant Warange" role="Treasurer" />
      </div>
    </section>
  );
}

function Member({ img, name, role }) {
  return (
    <div className="bg-white dark:bg-[#111] w-[220px] border border-orange-500/30 rounded overflow-hidden shadow-lg hover:scale-105 transition">
      <img src={img} className="w-full h-[220px] object-cover" />
      <div className="p-3">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
      </div>
    </div>
  );
}

export default Members  