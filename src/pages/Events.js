export default function Events() {
  const events = [
    {
      title: "Summer Bootcamp 2025",
      date: "June 2, 2025",
      description:
        "A free certification bootcamp on Data Analytics, Machine Learning, Deep Learning, Web Development, App Development, and DSA. Perfect for beginners and enthusiasts looking to sharpen their skills with hands-on experience and expert mentors.",
      link: "https://www.linkedin.com/company/the-data-alchemists/posts/",
      register: "https://forms.office.com/r/gCJkUKxtnn",
      highlight: true,
    },
    {
      title: "DataVista 2025 (Completed)",
      date: "January 13, 2025",
      description:
        "Our flagship tech week focused on AI and Data Science with high-impact workshops, a Kaggle-style hackathon, and an inspiring keynote by Archit Patel (Amazon). Hundreds of students participated, making it a grand success.",
      link: "https://www.linkedin.com/posts/the-data-alchemists_adapt-or-be-left-behind-recap-of-workshop-activity-7293688203545387008-Dn87?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9QM_QBl8zn-MnNnxJRTzqzdFpj0xEUEFA",
    },
    {
      title: "Board Change 2024–2025",
      date: "June 2024",
      description:
        "An event marking the handover of responsibilities to the new leadership team of The Data Alchemists. Celebrating achievements of the past year and welcoming the new board for 2024–2025.",
      link: "https://www.linkedin.com/posts/the-data-alchemists_the-second-board-transfer-of-the-data-alchemists-activity-7234492387429871616-IXlJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9QM_QBl8zn-MnNnxJRTzqzdFpj0xEUEFA",
    },
  ];

  return (
    <div className="bg-primary text-accent min-h-screen py-16 px-8">
      <h1 className="text-5xl font-bold text-center mb-16">Our Events</h1>

      <div className="max-w-5xl mx-auto space-y-12">
        {events.map((e, i) => (
          <div
            key={i}
            className={`relative rounded-xl shadow-xl p-10 transition transform hover:scale-105 ${
              e.highlight
                ? "bg-gradient-to-r from-accent to-pink-400 text-primary"
                : "bg-black/70 border border-accent"
            }`}
          >
            <h2 className="text-3xl font-bold mb-2">{e.title}</h2>
            <p className="italic mb-4">{e.date}</p>
            <p className="mb-6 leading-relaxed text-lg">{e.description}</p>

            <div className="flex gap-4 flex-wrap">
              {e.highlight && (
                <a
                  href={e.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-accent px-6 py-3 rounded font-semibold hover:bg-black hover:text-white transition"
                >
                  Enroll Now
                </a>
              )}
              <a
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded font-semibold transition ${
                  e.highlight
                    ? "bg-white text-primary hover:bg-primary hover:text-accent"
                    : "bg-accent text-primary hover:bg-white hover:text-primary"
                }`}
              >
                View on LinkedIn
              </a>
            </div>

            {e.highlight && (
              <span className="absolute top-4 right-4 bg-primary text-accent text-xs font-bold px-3 py-1 rounded-full shadow">
                Featured
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
