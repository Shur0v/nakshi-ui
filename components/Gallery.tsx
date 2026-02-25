
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const increment = 4;

  const sourceImages = [
    { url: 'https://images.stockcake.com/public/f/d/2/fd2a5e87-2695-4361-b55e-7f48a887469d_large/textile-factory-colors-stockcake.jpg', alt: 'Textile Factory Colors' },
    { url: 'https://www.shutterstock.com/image-photo/amritsar-punjab-indiamarch-16-2016-600nw-2475301311.jpg', alt: 'Textile Dyeing Operations' },
    { url: 'https://5.imimg.com/data5/SELLER/Default/2022/9/YT/MF/QL/3526160/0w8a5619-1024x683.jpg', alt: 'Fabric Processing' },
    { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzV8DAiC4F3YeyHuzhm5BS7EE17IfSHkNkrxrQWDxZiSPpexiy2htVqvLymIBQhkCXVtsqlRD32rFSxNKtJChZzRHBytviiqXkuJH3HOSTGb8BuXX8kq860717wTbIwxA58wIDb-4rDTOA/s1600/dyeing_textileaid.blogspot.com.jpg', alt: 'Textile Dyeing Process' },
    { url: 'https://www.shutterstock.com/image-photo/amritsar-punjab-indiamarch-16-2016-600nw-2475301313.jpg', alt: 'Fabric Dyeing Workshop' },
    { url: 'https://t4.ftcdn.net/jpg/09/32/04/49/360_F_932044993_ZU2a1Km73TwgJAgnNABiKInMuYhigfVy.jpg', alt: 'Textile Chemical Solutions' },
    { url: 'https://t3.ftcdn.net/jpg/10/84/16/28/360_F_1084162889_Y54hXPD6JCdGjM8rm6A72hKHDCeZWQ7l.jpg', alt: 'Fabric Processing Lab' },
    { url: 'https://seamapparel.com/wp-content/uploads/2024/07/fabric-dyeing-2.jpg', alt: 'Fabric Dyeing' },
    { url: 'https://t3.ftcdn.net/jpg/19/08/83/02/360_F_1908830225_ZEGE8E7GfsyzZC9IjYo3uz4g4XJuXusq.jpg', alt: 'Textile Industry Operations' },
    { url: 'https://images.squarespace-cdn.com/content/v1/53c95abee4b0e7d8eb3d6cf2/39ede217-76d4-47ce-90dc-e53655229b34/22bog-textiles-span-superJumbo-v2.jpg', alt: 'Textile Operations' },
    { url: 'https://t4.ftcdn.net/jpg/19/09/28/61/360_F_1909286192_LMuyygYIipex8vBXniBzTi4RMsUBADMe.jpg', alt: 'Coloring & Finishing' },
    { url: 'https://t3.ftcdn.net/jpg/19/11/81/10/360_F_1911811016_q4hmj9BskXKz1YHSjg2cCC8vS6EjiFFW.jpg', alt: 'Textile Production' },
    { url: 'https://img.freepik.com/premium-photo/pile-bright-multicolored-pieces-fabric-bazaar_789279-20170.jpg', alt: 'Multicolored Fabric Pile' },
  ];

  const maxImages = sourceImages.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + increment, maxImages));
  };

  const displayImages = sourceImages.slice(0, visibleCount);

  return (
    <div className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">Our Operations</h2>
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
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-primary-500/25 active:scale-95"
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
