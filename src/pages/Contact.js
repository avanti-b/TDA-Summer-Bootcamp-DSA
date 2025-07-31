import { FaLinkedin, FaInstagram, FaGithub, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-primary via-black to-primary text-accent min-h-screen flex flex-col items-center justify-center px-8 py-20 space-y-16">
      
      {/* Heading */}
      <div className="text-center space-y-4 animate-fadeIn">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="text-lg text-accent/80 max-w-2xl mx-auto">
          Have questions, ideas, or want to collaborate? Reach out to us on any of these platforms or visit our office at MIT Manipal.
        </p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl animate-fadeIn delay-300">
        
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/the-data-alchemists/posts/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-black/30 rounded-lg p-8 shadow-lg hover:scale-105 transition"
        >
          <FaLinkedin className="text-5xl text-accent mb-4" />
          <h3 className="text-2xl font-semibold mb-2">LinkedIn</h3>
          <p className="text-accent/70">Follow our updates & events</p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/tda.manipal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-black/30 rounded-lg p-8 shadow-lg hover:scale-105 transition"
        >
          <FaInstagram className="text-5xl text-accent mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Instagram</h3>
          <p className="text-accent/70">Catch behind-the-scenes moments</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/The-Data-Alchemists-Manipal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-black/30 rounded-lg p-8 shadow-lg hover:scale-105 transition"
        >
          <FaGithub className="text-5xl text-accent mb-4" />
          <h3 className="text-2xl font-semibold mb-2">GitHub</h3>
          <p className="text-accent/70">Explore our projects & repos</p>
        </a>

        {/* MIT Site */}
        <a
          href="https://www.manipal.edu/mit/mit-experience/student-welfare/technical-clubs/TDA-Manipal.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-black/30 rounded-lg p-8 shadow-lg hover:scale-105 transition"
        >
          <FaGlobe className="text-5xl text-accent mb-4" />
          <h3 className="text-2xl font-semibold mb-2">MIT Official Page</h3>
          <p className="text-accent/70">Know more about our club</p>
        </a>

        {/* Email */}
        <a
          href="mailto:tda.mit@manipal.edu"
          className="flex flex-col items-center bg-black/30 rounded-lg p-8 shadow-lg hover:scale-105 transition"
        >
          <FaEnvelope className="text-5xl text-accent mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Email</h3>
          <p className="text-accent/70">tda.mit@manipal.edu</p>
        </a>

        {/* Phone */}
        <div className="flex flex-col items-center bg-black/30 rounded-lg p-8 shadow-lg hover:scale-105 transition">
          <FaPhone className="text-5xl text-accent mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Office Phone</h3>
          <p className="text-accent/70">+91 98765 43210</p>
        </div>
      </div>

      {/* Optional Map */}
      <div className="w-full max-w-5xl rounded-lg overflow-hidden shadow-lg animate-fadeIn delay-700">
        <iframe
          title="MIT Manipal Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.37990518988!2d74.792356!3d13.352155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4db0e11cd9d%3A0x33fcf679b2d5db18!2sManipal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1701010101010!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
