
export default function LawnCareWebsite() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 font-sans">
      <header className="bg-green-700 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Cuts and Lawn Care NJ</h1>
        <p className="text-sm">Professional and reliable lawn care services in New Jersey</p>
      </header>

      <main className="p-6 space-y-10">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lawn mowing and trimming</li>
            <li>Edging and blowing</li>
            <li>Seasonal clean-ups</li>
            <li>Weed control</li>
            <li>Mulching and fertilization</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Locally owned and operated in NJ</li>
            <li>Friendly, professional team</li>
            <li>Affordable and upfront pricing</li>
            <li>Flexible scheduling and prompt service</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-200 h-40 rounded-xl flex items-center justify-center">Before</div>
            <div className="bg-green-300 h-40 rounded-xl flex items-center justify-center">After</div>
            <div className="bg-green-200 h-40 rounded-xl flex items-center justify-center">More Work</div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded h-28" />
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-green-700 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} Cuts and Lawn Care NJ. All rights reserved.</p>
      </footer>
    </div>
  );
}
