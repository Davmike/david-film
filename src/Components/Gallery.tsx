import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function Gallery() {
    const [currentGallery, setCurrentGallery] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [, setImageKey] = useState(0);
    const [expanded, setExpanded] = useState(false); // NEW

    const galleries = [
        {
            title: "ALESSIA & GRANT",
            subtitle: "A Fairytale Wedding in\nTsikhisdziri",
            images: [
                "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800"
            ]
        },
        {
            title: "SOPHIA & JAMES",
            subtitle: "Romantic Garden Wedding in\nSantorini",
            images: [
                "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1444443/pexels-photo-1444443.jpeg?auto=compress&cs=tinysrgb&w=800"
            ]
        },
        {
            title: "EMMA & MICHAEL",
            subtitle: "Elegant Beach Ceremony in\nMalibu",
            images: [
                "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800"
            ]
        }
    ];

    const nextGallery = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentGallery((prev) => (prev + 1) % galleries.length);
            setImageKey(prev => prev + 1);
            setTimeout(() => setIsTransitioning(false), 100);
        }, 300);
    };

    const prevGallery = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentGallery((prev) => (prev - 1 + galleries.length) % galleries.length);
            setImageKey(prev => prev + 1);
            setTimeout(() => setIsTransitioning(false), 100);
        }, 300);
    };

    const currentData = galleries[currentGallery];

    return (
        <div className="min-h-screen bg-black text-white pt-[222px] pb-[150px] px-[24px] md:py-12 md:pt-[272px]" id='gallerypage'>
            {/* Header Section */}
            <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 md:mb-22 gap-[24px]">
                    <h1 className="gallerytext flex items-center justify-center text-[40px] sm:text-[40px] md:text-[48px] font-bold tracking-wider mb-4 sm:mb-0">
                        GALLERY
                    </h1>

                    <div
                        className="flex items-center group cursor-pointer justify-end"
                        onClick={() => setExpanded(!expanded)}
                    >
                        <span className="seemore text-[22px] md:text-xl font-medium tracking-wide mr-3 group-hover:text-gray-300 transition-colors duration-300">
                            {expanded ? "See Less" : "See More"}
                        </span>
                        <ArrowRight
                            size={24}
                            className={`transition-transform duration-300 ${expanded ? "rotate-180" : "group-hover:translate-x-1"}`}
                        />
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="relative max-w-4xl mx-auto transition-all duration-500">
                    {!expanded ? (
                        // ---- CAROUSEL VARIANT ----
                        <div className="relative flex items-center justify-center overflow-hidden h-80">
                            {galleries.map((gallery, index) => {
                                let position = (index - currentGallery + galleries.length) % galleries.length;
                                return (
                                    <div
                                        key={index}
                                        className={`absolute transition-all duration-700 ease-in-out
                                            ${position === 0 ? "scale-100 opacity-100 z-20" : ""}
                                            ${position === 1 ? "translate-y-20 scale-90 opacity-70 z-10" : ""}
                                            ${position === galleries.length - 1 ? "-translate-y-20 scale-90 opacity-70 z-10" : ""}
                                            ${position !== 0 && position !== 1 && position !== galleries.length - 1 ? "opacity-0" : ""}
                                        `}
                                    >
                                        <img
                                            src={gallery.images[2]}
                                            alt={gallery.title}
                                            className="w-80 h-60 object-cover shadow-lg filter grayscale"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        // ---- EXPANDED LIST VARIANT ----
                        <div className="grid gap-[68px]">
                            {galleries.map((gallery, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <img
                                        src={gallery.images[2]}
                                        alt={gallery.title}
                                        className="w-full max-w-xl h-48 object-cover rounded-md shadow-lg filter grayscale"
                                    />
                                    <h2 className="names text-2xl font-bold mt-4">{gallery.title}</h2>
                                    <p className="subtitl mt-2 text-lg font-light text-[#BABABA] whitespace-pre-line">{gallery.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Description only in carousel mode */}
                {!expanded && (
                    <div className="text-center mt-[24px] mb-12 md:mb-16">
                        <h3 className={`description text-[16px] md:text-2xl font-medium tracking-wide leading-relaxed transition-all duration-700 ease-out whitespace-pre-line ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                            }`}>
                            {currentData.subtitle}
                        </h3>
                    </div>
                )}

                {/* Navigation Buttons (only carousel mode) */}
                {!expanded && (
                    <div className="flex justify-center gap-6 md:gap-8">
                        <button
                            onClick={prevGallery}
                            disabled={isTransitioning}
                            className={`w-16 h-16 md:w-20 md:h-20 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group active:scale-95 transform hover:scale-110 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                                }`}
                        >
                            <ChevronUp
                                size={24}
                                className="group-hover:scale-110 transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                        </button>

                        <button
                            onClick={nextGallery}
                            disabled={isTransitioning}
                            className={`w-16 h-16 md:w-20 md:h-20 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group active:scale-95 transform hover:scale-110 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                                }`}
                        >
                            <ChevronDown
                                size={24}
                                className="group-hover:scale-110 transition-transform duration-300 group-hover:translate-y-0.5"
                            />
                        </button>
                    </div>
                )}

                {/* Loading Animation Overlay */}
                {/* {isTransitioning && !expanded && (
                    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin opacity-50"></div>
                    </div>
                )} */}
            </div>
        </div>
    );
}

export default Gallery;
