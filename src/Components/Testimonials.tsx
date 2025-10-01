function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "DAVID MIKELADZE",
            source: "From Facebook",
            text: "Absolutely stunning work. The cinematography was visually captivating, with smooth transitions, thoughtful framing, and a beautiful color palette that elevated the entire mood of the video.",
        },
        {
            id: 2,
            name: "DAVID MIKELADZE",
            source: "From Facebook",
            text: "Absolutely stunning work. The cinematography was visually captivating, with smooth transitions, thoughtful framing, and a beautiful color palette that elevated the entire mood of the video.",
        },
        {
            id: 3,
            name: "DAVID MIKELADZE",
            source: "From Facebook",
            text: "Absolutely stunning work. The cinematography was visually captivating, with smooth transitions, thoughtful framing, and a beautiful color palette that elevated the entire mood of the video.",
        },
    ];

    return (
        <section
            className="relative bg-black text-white py-12 overflow-hidden mt-[150px]"
            style={{
                backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
                backgroundSize: "80px 80px",
            }}
        >
            {/* Overlay რომ კუთხეებში ქროდეს */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
              radial-gradient(circle at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.95) 100%)
            `,
                }}
            />

            <h2 className="relative text-center text-3xl font-bold mb-8 z-10 gallerytext">
                TESTIMONIALS
            </h2>

            {/* Mobile scroll / Tablet grid */}
            <div className="relative flex md:grid md:grid-cols-3 gap-6 px-4 md:px-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide z-10">
                {testimonials.map((t) => (
                    <div
                        key={t.id}
                        className="min-w-[80%] md:min-w-0 snap-start bg-neutral-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex mb-4 text-yellow-400">
                                {"★".repeat(5)}
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed description">{t.text}</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <div className="w-10 h-10 rounded-full bg-gray-700" />
                            <div>
                                <p className="font-semibold gallerytext">{t.name}</p>
                                <p className="text-xs text-gray-400 description">{t.source}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
