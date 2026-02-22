function Members() {
  return (
    <section id="members" className="py-20 text-center border-t border-orange-500/20">
      <h2 className="text-4xl text-orange-500 mb-2">Our Members</h2>
      <div className="text-gray-500 dark:text-gray-400 mb-14">
        Meet Our Team
      </div>

      {/* ================= VILLAGE MANDAL ================= */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-orange-500 mb-8">
          Village Mandal — Ramwadi
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          <Member img="/moru.jpeg" name="Moreshwar Gopal Halde" role="President" />
          <Member img="/.png" name="Dattaram Maruti Belose" role="Secretary" />
          <Member img="/.png" name="Chandrakant Nathuram Warange" role="Treasurer" />
        </div>
      </div>

      {/* ================= CITY MANDAL ================= */}
      <div>
        <h3 className="text-2xl font-semibold text-orange-500 mb-8">
          City Mandal
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          <Member img="/raju.jpeg" name="Raju Pattere" role="President" />
          <Member img="/ganpat.png" name="Ganpat Halde" role="Secretary" />
          <Member img=".png" name="Shashikant Warange" role="Treasurer" />
        </div>
      </div>
    </section>
  );
}

function Member({ img, name, role }) {
  return (
    <div className="bg-white dark:bg-[#111] w-[220px] border border-orange-500/30 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
      <img src={img} className="w-full h-[220px] object-cover" />
      <div className="p-3">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
      </div>
    </div>
  );
}

export default Members;