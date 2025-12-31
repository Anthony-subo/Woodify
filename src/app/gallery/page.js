import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Gallery() {
  // ✅ This runs on the server
  const imagesDirectory = path.join(process.cwd(), "public/gallery"); // put images in public/gallery
  let images = [];

  if (fs.existsSync(imagesDirectory)) {
    const files = fs.readdirSync(imagesDirectory);
    images = files.filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/i));
  }

  return (
    <section className="min-h-screen bg-amber-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-amber-800 mb-10">
          Our Craft Gallery
        </h1>
        <p className="text-gray-700 mb-12">
          A showcase of our handmade wooden pieces — each crafted with care and passion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
            
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={`/gallery/${img}`} // ✅ correct path relative to public
                alt={`Gallery item ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <p className="text-white font-semibold text-lg">Woodify Craft</p>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <p className="text-gray-500 italic mt-6">
            No images found in the /public/gallery folder.
          </p>
        )}
      </div>
    </section>
  );
}
