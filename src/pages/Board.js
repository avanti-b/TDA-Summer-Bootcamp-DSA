export default function Board() {
  const members = [
    { name: "Aditya Nigam", role: "President" },
    { name: "Bhavya Mittal", role: "Vice-President" },
    { name: "Kewal Thacker", role: "General Secretary" },
    { name: "Phirozgar Irani", role: "Treasurer" },
    { name: "Agrim Agrawal", role: "DAVE Head" },
    { name: "Himanshu Agarwal", role: "AIML Head" },
    { name: "Siddhant Chutke", role: "AIML Head" },
    { name: "Adriteyo Das", role: "DL Head" },
    { name: "Shivli Dimri", role: "DL Head" },
    { name: "Arnav Vijaywargiya", role: "CnD Head" },
    { name: "Avikshit Dhar", role: "CnD Head" },
    { name: "Kumar Kshitij", role: "HR Head" },
    { name: "T S Saumyaa", role: "HR Head" },
    { name: "Raghav Kedia", role: "PRO Head" },
  ];

  return (
    <div className="p-16 text-center text-accent bg-gradient-to-b from-black via-primary to-black">
      <h1 className="text-5xl font-bold mb-16 tracking-wide">Board 2025–2026</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-black/30 border border-accent/40 rounded-2xl shadow-lg 
                       p-8 transform transition duration-700 hover:scale-105 hover:shadow-accent/40 
                       animate-fadeIn hover:bg-black/50"
          >
            <img
              src="/images/dp.jpg"
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-accent shadow-md 
                         hover:shadow-accent/50 transition duration-500"
            />
            <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
            <p className="text-accent/70 text-lg">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
