import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Gallerytwo() {
    const [open, setOpen] = useState(false);
    const [currentGallery, setCurrentGallery] = useState(0);

    const items = [
        {
            id: 1,
            text: "THE MOST BEAUTIFUL WEDDING...",
            title: "SAMMY & RICHIE",
            img: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 2,
            text: "Wedding in Tsikhisdziri...",
            title: "ALESSIA & GRANT",
            img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 3,
            text: "A Lifetime Together...",
            title: "SIMONE & JASON",
            img: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 4,
            text: "When Two Become One...",
            title: "BEN & LU",
            img: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 5,
            text: "When Two Become One...",
            title: "BEN & LU",
            img: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6" id='gallerypagedesktop'>
            <div className="w-full max-w-6xl">
                <AnimatePresence mode="wait">
                    {!open ? (
                        // Collapsed View (Carousel)
                        <motion.div
                            key="collapsed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col md:flex-row gap-8 items-center justify-center"
                        >
                            {/* Carousel */}
                            <div className="relative flex items-center justify-center overflow-hidden h-[395px] w-[592px]">
                                {items.map((gallery, index) => {
                                    let position =
                                        (index - currentGallery + items.length) % items.length;
                                    return (
                                        <motion.div
                                            key={gallery.id}
                                            className={`absolute transition-all duration-700 ease-in-out
                        ${position === 0
                                                    ? "scale-100 opacity-100 z-20"
                                                    : position === 1
                                                        ? "translate-y-20 scale-90 opacity-70 z-10"
                                                        : position === items.length - 1
                                                            ? "-translate-y-20 scale-90 opacity-70 z-10"
                                                            : "opacity-0"
                                                }`}
                                        >
                                            <img
                                                src={gallery.img}
                                                alt={gallery.title}
                                                className="w-[592px] h-[335px] object-cover shadow-lg filter grayscale"
                                            />
                                            <h3 className="absolute bottom-4 left-4 font-bold text-lg">
                                                {gallery.title}
                                            </h3>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Text List */}
                            <div className="text-center md:text-left w-full md:w-1/2 description">
                                <h2 className="flex justify-end gallerytext text-[48px] font-bold pb-[30px]">
                                    GALLERY
                                </h2>
                                <div className="space-y-2 text-gray-400 text-sm leading-relaxed">
                                    {items.map((item, index) => (
                                        <div
                                            key={item.id}
                                            onClick={() => setCurrentGallery(index)}
                                            className={`flex flex-row-reverse items-center gap-[5px] cursor-pointer transition 
                        ${currentGallery === index
                                                    ? "text-white font-semibold text-[24px]"
                                                    : "hover:text-gray-200 text-[18px]"
                                                }`}
                                        >
                                            {currentGallery === index && <span>←</span>}
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        // Expanded Grid View
                        <>
                            <h2 className="flex justify-end gallerytext text-[48px] font-bold pb-[30px]">
                                GALLERY
                            </h2>
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                            >
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative group overflow-hidden rounded-xl shadow-lg"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale"
                                        />
                                        <h3 className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                                            {item.title}
                                        </h3>
                                        <div className="flex justify-center items-center flex-col pt-[16px]">
                                            <p className="text-[#BABABA] text-[16px] font-light description">{item.text}</p>
                                            <h4 className="text-white text-[24px] font-bold description">{item.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Common Toggle Button */}
                <div
                    className="flex items-center group cursor-pointer justify-end pt-[30px]"
                    onClick={() => setOpen(!open)}
                >
                    <span className="seemore text-[22px] md:text-xl font-medium tracking-wide mr-3 group-hover:text-gray-300 transition-colors duration-300">
                        {open ? "See Less" : "See More"}
                    </span>
                    <ArrowRight
                        size={24}
                        className={`transition-transform duration-300 ${open ? "rotate-180" : "group-hover:translate-x-1"
                            }`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallerytwo;
