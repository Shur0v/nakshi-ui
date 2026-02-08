
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Start with 8 images
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const maxImages = 50;
  const increment = 4;

  const sourceImages = Array.from({ length: 10 }, (_, i) => `/gallary${i + 1}.jpg`);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + increment, maxImages));
  };

  const displayImages = Array.from({ length: visibleCount }, (_, i) => {
    return {
      url: sourceImages[i % sourceImages.length],
      alt: `Gallery Image ${i + 1}`
    };
  });

  return (
    <div className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Operations</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Gallery</h3>
          <p className="text-lg text-slate-600">A look at our work, support activities, and the industries we serve in Bangladesh.</p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayImages.map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl bg-slate-100 animate-in fade-in zoom-in duration-500 fill-mode-both aspect-[4/3] cursor-pointer"
              style={{ animationDelay: `${(i % 4) * 100}ms` }}
              onClick={() => setSelectedImage(img.url)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-xs font-medium leading-relaxed">View Full Image</p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < maxImages && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
