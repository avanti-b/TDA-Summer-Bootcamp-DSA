export default function Gallery() {
  const images = [
    "/images/gallery1.heic",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.heic",
    "/images/gallery9.jpg",
    "/images/gallery10.jpg",
  ];

  return (
    <div className="bg-black min-h-screen px-6 py-12 text-accent">
      <h1 className="text-5xl font-bold text-center mb-12">Gallery</h1>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <div key={i} className="break-inside-avoid overflow-hidden rounded-xl shadow-md group">
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full mb-4 rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
