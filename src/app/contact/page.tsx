export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f5e6d3] text-[#3b2416]">

      <section className="bg-[#6f4e37] text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We'd love to hear from you. Send us a message anytime.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

          <div className="space-y-4 text-[#5c4033]">

            <p>
              <span className="font-semibold">Address:</span><br />
              123 Brew Street, Coffee City
            </p>

            <p>
              <span className="font-semibold">Phone:</span><br />
              +1 234 567 890
            </p>

            <p>
              <span className="font-semibold">Email:</span><br />
              hello@brewnest.com
            </p>

            <p>
              <span className="font-semibold">Hours:</span><br />
              Mon - Sun : 8 AM – 9 PM
            </p>

          </div>
        </div>

        <form className="bg-white p-10 rounded-2xl shadow-md space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
              placeholder="Write your message..."
            />
          </div>

          <button
            className="w-full bg-[#6f4e37] text-white py-3 rounded-lg font-semibold hover:bg-[#5a3f2c] transition"
          >
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}