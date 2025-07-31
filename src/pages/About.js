export default function About() {
  const specialties = [
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Analytics",
    "Data Visualization",
    "Data Engineering",
    "Computer Vision",
    "Natural Language Processing",
    "Big Data",
  ];

  return (
    <div className="bg-gradient-to-b from-black via-primary to-black text-accent">
      {/* HERO SECTION */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          About Us
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl text-accent/80 leading-relaxed animate-fadeIn delay-300">
          The Data Alchemists is an all-things-data club. We cover the entire
          spectrum of data science from <span className="font-semibold">Data Engineering</span>{" "}
          to <span className="font-semibold">Analytics</span> and{" "}
          <span className="font-semibold">Visualization</span> to{" "}
          <span className="font-semibold">Machine Learning</span> and{" "}
          <span className="font-semibold">Deep Learning</span>. With the
          exponentially growing amount of available data, the doors for many new
          areas in the field of Data Science have opened. Artificial
          Intelligence and Large Language Models are becoming an inseparable
          part of our lives.
        </p>
      </section>

      {/* SPECIALTIES */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center px-8 py-16 bg-gradient-to-br from-primary to-black">
        <h2 className="text-4xl font-bold mb-12 animate-fadeIn">
          Our Specialties
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="bg-black/30 rounded-lg p-6 text-center shadow-lg border border-accent/30 
                         transform transition duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn delay-200"
            >
              <p className="text-xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-8 py-16 text-center">
        <div className="max-w-4xl space-y-6 text-lg text-accent/80 leading-relaxed animate-fadeIn">
          <p>
            The aim of the club is to keep up with the pace and growth of the
            field of data science and provide students with an opportunity to be
            a part of this domain. The club serves as a platform to learn new
            skills, leverage and improve existing skillsets via projects, and
            provide a means for collaboration between students with similar
            interests.
          </p>
          <p>
            The club also increases data science awareness via an online open
            community with no joining restrictions. For a wide coverage of the
            field, there are dedicated domains for each aspect of data science.
            Catering to the massive growth in the fields of{" "}
            <span className="font-semibold">Computer Vision</span> and{" "}
            <span className="font-semibold">Natural Language Processing</span>,
            two individual domains have been formed.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="h-[50vh] flex flex-col items-center justify-center text-center px-8 bg-gradient-to-t from-primary to-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
          Let's Shape the Future, Together!
        </h2>
        <p className="text-lg text-accent/80 mb-8 max-w-2xl animate-fadeIn delay-200">
          Join our community of passionate data enthusiasts and take your first
          step toward building cutting-edge projects and innovations.
        </p>
        <a
          href="/recruitment"
          className="px-8 py-4 bg-accent text-primary font-semibold rounded shadow-lg hover:bg-white hover:text-primary transition"
        >
          Join Us
        </a>
      </section>
    </div>
  );
}
