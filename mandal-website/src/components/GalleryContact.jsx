import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function GalleryContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6sjzuhw",
        "template_b9n63bq",
        form.current,
        "PDwf4ISwUyOkNyVzl"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send ❌");
      });
  };

  return (
    <>
      {/* CONTACT FORM */}
      <section className="py-24 border-t border-orange-500/20 flex justify-center px-6">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-xl bg-white/70 dark:bg-black/70 backdrop-blur-md border border-orange-500/30 rounded-2xl p-10 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
            Contact Us
          </h2>

          <div className="flex flex-col gap-5">
            <input
              name="user_name"
              required
              placeholder="Your Name"
              className="p-3 rounded border border-orange-500 bg-white dark:bg-black outline-none"
            />

            <input
              name="user_email"
              type="email"
              required
              placeholder="Your Email"
              className="p-3 rounded border border-orange-500 bg-white dark:bg-black outline-none"
            />

            <textarea
              name="message"
              required
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded border border-orange-500 bg-white dark:bg-black outline-none"
            />

            <button
              type="submit"
              className="bg-orange-500 text-white py-3 rounded-lg shadow-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* LOCATION SECTION */}
      <section className="pb-24 text-center px-6">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          Visit Us — Ramwadi
        </h2>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-orange-500/30 shadow-xl">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.5323782161554!2d73.30148027523684!3d18.523260382570747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8197b5c94aabd%3A0xab4f9a0b4782d1e2!2sRamwadi!5e1!3m2!1sen!2sin!4v1771752454607!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full rounded-2xl"
/>
        </div>
      </section>
    </>
  );
}