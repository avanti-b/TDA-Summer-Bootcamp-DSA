export default function Recruitment() {
  const subdomains = [
    {
      name: "AI/ML",
      desc: "Dive deep into algorithms, model building, and cutting-edge AI research.",
    },
    {
      name: "Data Analytics",
      desc: "Extract meaningful insights from raw data to drive smarter decisions.",
    },
    {
      name: "Deep Learning",
      desc: "Work on neural networks, computer vision, and NLP-based solutions.",
    },
    {
      name: "Data Engineering",
      desc: "Design pipelines, manage databases, and handle big data infrastructure.",
    },
    {
      name: "Research & Development",
      desc: "Innovate and contribute to academic and industrial data-driven research.",
    },
    {
      name: "Community & Outreach",
      desc: "Engage with peers, host workshops, and expand our network.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-primary to-black text-accent min-h-screen">
      {/* HERO */}
      <section className="h-[60vh] flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Join The Data Alchemists
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl text-accent/80 animate-fadeIn delay-300">
          Be a part of our growing family of innovators, developers, and data
          enthusiasts.
        </p>
      </section>

      {/* SUBDOMAINS */}
      <section className="px-8 py-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12">Our Subdomains</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
          {subdomains.map((domain, index) => (
            <div
              key={index}
              className="bg-black/30 border border-accent/30 rounded-lg p-8 shadow-lg 
                         transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{domain.name}</h3>
              <p className="text-accent/80">{domain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BUTTON */}
      <section className="h-[40vh] flex flex-col items-center justify-center text-center px-8 bg-gradient-to-t from-primary to-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-accent/80 mb-8 max-w-2xl">
          Fill out our recruitment form and join us in building the future of
          data-driven technology.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfpUOejSRRjEox8W8b0Px1XFUZVbP7Wbdz5wnrEExGr-7qMbw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-accent text-primary font-semibold rounded shadow-lg hover:bg-white hover:text-primary transition"
        >
          Fill The Form
        </a>
      </section>
    </div>
  );
}
