function About() {
    return (
        <div
            id="aboutpage"
            className="min-h-screen bg-black text-white px-4 py-8 relative overflow-hidden"
            style={{
                backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
                backgroundSize: "80px 80px",
            }}
        >
            {/* Overlay რომ კიდეებში ქროდეს */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
              radial-gradient(circle at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.95) 100%)
            `,
                }}
            />

            <div className="max-w-none mx-auto relative z-10">
                {/* About Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 gallerytext">
                    ABOUT
                </h1>

                {/* Polaroid Images Section */}
                <div className="relative h-[420px] mb-12 max-w-md mx-auto">
                    {/* Left Polaroid - Portrait */}
                    <div className="absolute right-40 top-12 w-[240px] h-[325px] p-3 shadow-2xl transform -rotate-15 z-20 
                            scale-[clamp(1,2vw,1.2)]">
                        <div className="bg-gray-300 aspect-[3/4] mb-3 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="Portrait"
                                className="w-full h-full object-cover filter grayscale"
                            />
                        </div>
                    </div>

                    {/* Right Polaroid - Camera */}
                    <div className="absolute left-40 top-12 w-[240px] h-[325px] p-3 shadow-2xl transform rotate-15 z-10 
                            scale-[clamp(1,2vw,1.2)]">
                        <div className="bg-gray-300 aspect-[3/4] mb-3 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="Camera"
                                className="w-full h-full object-cover filter grayscale"
                            />
                        </div>
                    </div>

                    {/* "who am i?" Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                        <h2 className="gallerytext text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.9)] leading-tight">
                            who am i?
                        </h2>
                    </div>
                </div>

                {/* Description Text */}
                <div className="space-y-4 text-gray-300 text-sm md:text-base text-center description">
                    <p className="text-white font-medium">
                        A visual poet and a nostalgic soul. In a world of fleeting digital
                        perfection, I find beauty in the warmth of analog dreams.
                    </p>

                    <p className="text-gray-400">
                        A visual poet and a nostalgic soul. In a world of fleeting digital
                        perfection, I find beauty in the warmth of analog dreams. My
                        approach to videography is that of a craftsman, carefully weaving
                        together light, motion, and emotion to create a film that feels like
                        a forgotten classic. I'm here to capture the heart of your story,
                        turning today's moments into tomorrow's treasured memories. A visual
                        poet and a nostalgic soul. In a world of fleeting digital
                        perfection, I find beauty in the warmth of analog dreams. My
                        approach to videography is that of a craftsman, carefully weaving
                        together light, motion, and emotion to create a film that feels like
                        a forgotten classic. I'm here to capture the heart of your story,
                        turning today's moments into tomorrow's treasured memories.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
