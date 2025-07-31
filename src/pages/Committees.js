import { Link } from "react-router-dom";

export default function Committees() {
  return (
    <div className="p-8 text-accent text-center">
      <h1 className="text-4xl font-bold mb-8">Committees</h1>
      <div className="space-y-6">
        <Link
          to="/committees/board"
          className="block p-4 bg-primary border border-accent rounded-lg shadow hover:scale-105 transition duration-300"
        >
          Board 2025–2026
        </Link>
        <Link
          to="/committees/mancom"
          className="block p-4 bg-primary border border-accent rounded-lg shadow hover:scale-105 transition duration-300"
        >
          Management Committee
        </Link>
        <Link
          to="/committees/workcom"
          className="block p-4 bg-primary border border-accent rounded-lg shadow hover:scale-105 transition duration-300"
        >
          Working Committee
        </Link>
      </div>
    </div>
  );
}
