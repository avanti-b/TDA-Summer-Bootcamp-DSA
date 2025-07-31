export default function WorkComm() {
  const members = [
    "Rahul Menon", "Ananya Singh", "Rohan Verma", "Priya Shah", "Nikhil Kapoor",
    "Meera Iyer", "Arjun Malhotra", "Sanya Bhatia", "Vikram Desai", "Ishita Reddy",
    "Kabir Mehra", "Neha D’Souza", "Dev Mishra", "Tanvi Khanna", "Rajat Nair",
    "Aarav Choudhary", "Sneha Kulkarni", "Varun Gupta", "Aditi Rao", "Siddharth Jain",
    "Kriti Sharma", "Aman Bansal", "Rhea Menon", "Aditya Shankar", "Pooja Tripathi",
    "Harshit Aggarwal", "Simran Arora", "Kunal Yadav", "Manvi Saxena", "Parth Sinha",
    "Roshni Pillai", "Abhinav Joshi", "Surbhi Kaul", "Naveen Kumar", "Anjali Taneja",
    "Deepak Reddy", "Muskaan Jain", "Shivam Patel", "Ayushi Pandey", "Rohit Nambiar",
    "Vishal Chatterjee", "Sakshi Goyal", "Pranav Iyer", "Shreya Dutt", "Aryan Ahuja",
    "Charu Sethi", "Saurabh Chauhan", "Ankita Das", "Tanishq Jaiswal", "Ira Bedi"
  ];

  return (
    <div className="bg-gradient-to-b from-black via-primary to-black text-accent min-h-screen py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-16 animate-fadeIn">
        Work Committee
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {members.map((name, index) => (
          <div
            key={index}
            className="group bg-black/40 backdrop-blur-sm border border-accent/20 rounded-xl p-8 
                       text-center shadow-md transform transition-all duration-500 hover:scale-105 
                       hover:shadow-2xl hover:border-accent/60 animate-slideUp"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-2xl font-bold text-primary shadow-inner group-hover:rotate-12 transition">
              {name.charAt(0)}
            </div>
            <h2 className="text-xl font-semibold group-hover:text-white transition">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
