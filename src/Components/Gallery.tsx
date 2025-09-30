import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

function Gallery() {
    const [currentGallery, setCurrentGallery] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [imageKey, setImageKey] = useState(0);

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

    const goToGallery = (index: number) => {
        if (isTransitioning || index === currentGallery) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentGallery(index);
            setImageKey(prev => prev + 1);
            setTimeout(() => setIsTransitioning(false), 100);
        }, 300);
    };

    const currentData = galleries[currentGallery];

    return (
        <div className="min-h-screen bg-black text-white px-4 py-8 md:py-12">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 md:mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4 sm:mb-0">
                        GALLERY
                    </h1>

                    <div className="flex items-center group cursor-pointer">
                        <span className="text-lg md:text-xl font-light tracking-wide mr-3 group-hover:text-gray-300 transition-colors duration-300">
                            See More
                        </span>
                        <ArrowRight
                            size={24}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* Image Gallery Stack */}
                <div className={`relative max-w-2xl mx-auto mb-8 md:mb-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}>
                    {/* Background Images */}
                    <div className="relative">
                        {/* Back layer - landscape image */}
                        <div className={`absolute -top-4 -left-4 md:-top-8 md:-left-8 w-72 h-48 md:w-96 md:h-64 transform rotate-[-3deg] z-10 transition-all duration-1000 ease-out ${isTransitioning ? 'translate-x-[-20px] translate-y-[10px] rotate-[-8deg] opacity-0' : 'translate-x-0 translate-y-0 rotate-[-3deg] opacity-100'
                            }`}>
                            <img
                                key={`${imageKey}-0`}
                                src={currentData.images[0]}
                                alt="Wedding venue"
                                className="w-full h-full object-cover rounded-lg shadow-2xl grayscale transition-all duration-1000 ease-out transform hover:scale-105"
                            />
                        </div>

                        {/* Middle layer - portrait image */}
                        <div className={`absolute top-8 right-4 md:top-12 md:right-8 w-64 h-80 md:w-80 md:h-96 transform rotate-[2deg] z-20 transition-all duration-1000 ease-out delay-75 ${isTransitioning ? 'translate-x-[20px] translate-y-[-10px] rotate-[7deg] opacity-0' : 'translate-x-0 translate-y-0 rotate-[2deg] opacity-100'
                            }`}>
                            <img
                                key={`${imageKey}-1`}
                                src={currentData.images[1]}
                                alt="Wedding details"
                                className="w-full h-full object-cover rounded-lg shadow-2xl grayscale transition-all duration-1000 ease-out transform hover:scale-105"
                            />
                        </div>

                        {/* Main focal image - centered */}
                        <div className={`relative w-full h-64 md:h-80 lg:h-96 z-30 transition-all duration-1000 ease-out delay-150 ${isTransitioning ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
                            }`}>
                            <img
                                key={`${imageKey}-2`}
                                src={currentData.images[2]}
                                alt="Wedding couple"
                                className="w-full h-full object-cover rounded-lg shadow-2xl grayscale transition-all duration-1000 ease-out transform hover:scale-105"
                            />

                            {/* Overlay text on main image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg transition-all duration-500">
                                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-center transition-all duration-700 ease-out ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                                    }`}>
                                    {currentData.title}
                                </h2>
                            </div>
                        </div>

                        {/* Front layer - bottom right */}
                        <div className={`absolute -bottom-6 -right-4 md:-bottom-12 md:-right-8 w-56 h-36 md:w-72 md:h-48 transform rotate-[4deg] z-40 transition-all duration-1000 ease-out delay-200 ${isTransitioning ? 'translate-x-[15px] translate-y-[-15px] rotate-[9deg] opacity-0' : 'translate-x-0 translate-y-0 rotate-[4deg] opacity-100'
                            }`}>
                            <img
                                key={`${imageKey}-3`}
                                src={currentData.images[3]}
                                alt="Wedding reception"
                                className="w-full h-full object-cover rounded-lg shadow-2xl grayscale transition-all duration-1000 ease-out transform hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="text-center mb-12 md:mb-16 pt-16 md:pt-24">
                    <h3 className={`text-xl md:text-2xl font-light tracking-wide leading-relaxed transition-all duration-700 ease-out whitespace-pre-line ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                        }`}>
                        {currentData.subtitle}
                    </h3>
                </div>

                {/* Navigation Buttons */}
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

                {/* Gallery Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {galleries.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToGallery(index)}
                            disabled={isTransitioning}
                            className={`w-2 h-2 rounded-full transition-all duration-500 transform hover:scale-150 ${index === currentGallery
                                ? 'bg-white scale-125 shadow-lg shadow-white/50'
                                : 'bg-gray-500 hover:bg-gray-300 scale-100'
                                } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
                        />
                    ))}
                </div>

                {/* Loading Animation Overlay */}
                {isTransitioning && (
                    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin opacity-50"></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Gallery;