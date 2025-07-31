import { useState } from "react";

export default function GraffitiWall() {
  const [notes, setNotes] = useState([
    { text: "Keep building, keep learning #TDA 🚀", date: "2025-07-20" },
    { text: "AI all the way #Innovation 🔥", date: "2025-07-21" },
    { text: "Big data, big dreams ✨", date: "2025-07-22" },
    { text: "Manipal vibes only 😎 #CampusLife", date: "2025-07-23" },
    { text: "Code > Sleep 💻", date: "2025-07-24" },
    { text: "Hack it till you make it 💖 #Trendy", date: "2025-07-25" },
    { text: "TDA rocks 🤘", date: "2025-07-26" },
    { text: "Push to Git, Pray to God 😂", date: "2025-07-27" },
    { text: "Stay caffeinated #NoSleep", date: "2025-07-28" },
  ]);

  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (!newNote.trim()) return;
    const today = new Date().toISOString().split("T")[0];
    setNotes([{ text: randomizeHash(newNote), date: today }, ...notes]);
    setNewNote("");
  };

  return (
    <div
      className="min-h-screen p-10 flex flex-col items-center text-white"
      style={{
        background: "linear-gradient(135deg, #0d1b2a 30%, #1b263b 100%)",
      }}
    >
      <h1 className="text-4xl font-bold mb-6">Graffiti Wall</h1>

      {/* Input */}
      <div className="flex gap-3 mb-10">
        <input
          type="text"
          placeholder="Drop your note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="p-3 w-72 rounded shadow-md text-black focus:outline-none"
        />
        <button
          onClick={addNote}
          className="bg-blue-500 px-5 py-3 rounded hover:bg-blue-600 transition"
        >
          Add Note
        </button>
      </div>

      {/* Wall container with card background */}
      <div
        className="relative p-8 rounded-lg shadow-lg"
        style={{
          width: "75vw",
          minHeight: "70vh",
          background: "#152238", // card look
          boxShadow: "0px 4px 15px rgba(0,0,0,0.4)",
        }}
      >
        {notes.map((note, index) => (
          <div
            key={index}
            className="absolute transition-transform hover:scale-105"
            style={{
              background: softNoteColor(index),
              fontFamily: randomFont(index),
              width: randomWidth(index),
              minHeight: randomHeight(index),
              top: randomWallY(index),
              left: randomWallX(index),
              transform: `rotate(${randomRotation(index)}deg)`,
              padding: "12px 16px",
              borderRadius: "8px",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.3)",
              zIndex: index,
            }}
          >
            <p>{note.text}</p>
            <span className="block text-right text-xs opacity-70 mt-1">
              {note.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----- Helpers ----- */
function softNoteColor(index) {
  const colors = [
    "rgba(255, 245, 157, 0.95)", // yellow
    "rgba(173, 216, 230, 0.95)", // light blue
    "rgba(221, 160, 221, 0.95)", // lavender
    "rgba(255, 228, 181, 0.95)", // light orange
    "rgba(176, 224, 230, 0.95)", // teal
  ];
  return colors[index % colors.length];
}
function randomFont(index) {
  const fonts = [
    "'Permanent Marker', cursive",
    "'Shadows Into Light', cursive",
    "'Gloria Hallelujah', cursive",
    "'Indie Flower', cursive",
  ];
  return fonts[index % fonts.length];
}
function randomWidth(i) {
  const sizes = ["140px", "160px", "180px"];
  return sizes[i % sizes.length];
}
function randomHeight(i) {
  const sizes = ["100px", "120px"];
  return sizes[i % sizes.length];
}
function randomRotation(i) {
  const angles = [-5, -3, 0, 3, 5];
  return angles[i % angles.length];
}

/* Slight overlap positions */
function randomWallX(i) {
  return (i % 4) * 180 + (Math.random() * 30 - 15);
}
function randomWallY(i) {
  return Math.floor(i / 4) * 140 + (Math.random() * 20 - 10);
}

function randomizeHash(text) {
  const tags = ["#TDA",  "#DataLove", "#CampusLife", "#NoSleep"];
  if (Math.random() > 0.5)
    return `${text} ${tags[Math.floor(Math.random() * tags.length)]}`;
  return text;
}
