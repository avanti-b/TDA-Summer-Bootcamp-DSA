import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const images = ["/img1.heic", "/img2.jpg", "/img3.jpg", "/img4.heic", "/img5.jpg", "/img6.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full text-accent">
      {/* HERO SECTION */}
      <section className="h-screen bg-gradient-to-br from-black via-primary to-black flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          The Data Alchemists
        </h1>
        <p className="text-lg md:text-2xl text-accent/90 mb-10 animate-fadeIn delay-300">
          𝗧𝗵𝗲 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗗𝗮𝘁𝗮 𝗦𝗰𝗶𝗲𝗻𝗰𝗲 𝗖𝗹𝘂𝗯 𝗼𝗳 𝗠𝗜𝗧 𝗠𝗮𝗻𝗶𝗽𝗮𝗹
        </p>
        <Link
          to="/about"
          className="px-8 py-4 bg-accent text-primary font-semibold rounded shadow-lg 
                     hover:bg-white hover:text-primary transition duration-300 animate-fadeIn delay-500"
        >
          Know More
        </Link>
      </section>

      {/* ABOUT SECTION */}
      <section className="h-screen bg-gradient-to-b from-primary to-black flex flex-col items-center justify-center text-center p-16">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="max-w-2xl text-lg text-accent/80 leading-relaxed">
        We are not just a club, but a community of data-driven minds who believe in alchemy.
        We believe that even 1% chance is enough—the rare chance, the quiet momentum, the spark that revives something lost and gives rise to something exceptional.
        Something unique.
        Something that cannot be undone.

        We take that 1% chance.
        We are the exception.
        We are The Data Alchemists. 💙🚀
        </p>
      </section>

    {/* IMAGE SLIDER SECTION */}
    <section className="h-screen bg-black flex flex-col items-center justify-center relative">
    {/* Image container */}
    <div className="relative w-[70%] h-[70%] overflow-hidden rounded-2xl shadow-2xl">
        {images.map((img, index) => (
        <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        />
        ))}
    </div>

    {/* Dots */}
    <div className="flex space-x-3 mt-6 z-10">
        {images.map((_, index) => (
        <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition ${
            index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
        />
        ))}
    </div>

    {/* Arrows */}
    <button
        onClick={() =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-[15%] top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
    >
        &#10094;
    </button>
    <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-[15%] top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
    >
        &#10095;
    </button>

    <h2 className="absolute bottom-10 text-4xl font-bold text-white animate-fadeIn">
        Our Moments
    </h2>
    </section>


      {/* QUICK LINKS SECTION */}
      <section className="h-screen bg-gradient-to-b from-black to-primary flex flex-col justify-center p-16">
        <h2 className="text-4xl font-bold text-center mb-12">Explore</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Committees", link: "/committees", desc: "Meet our teams" },
            { title: "Events", link: "/events", desc: "Workshops & Hackathons" },
            { title: "Gallery", link: "/gallery", desc: "Memories & Moments" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-primary rounded-lg p-10 text-center shadow-lg transform hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-accent/80">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* JOIN US */}
      <section className="h-screen bg-gradient-to-br from-primary via-black to-primary flex flex-col items-center justify-center text-center p-16">
        <h2 className="text-4xl font-bold mb-6">Join Us</h2>
        <p className="text-lg mb-8 text-accent/80">
          Become part of our growing family of innovators.
        </p>
        <Link
          to="/recruitment"
          className="px-8 py-4 bg-accent text-primary font-semibold rounded shadow-lg hover:bg-white hover:text-primary transition"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}
