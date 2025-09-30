import { Menu } from 'lucide-react';

function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
                }}
            />

            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="flex justify-between items-center p-6 md:p-8">
                    <div className="border-2 border-white px-4 py-2 md:px-6 md:py-3">
                        <span className="text-white text-lg md:text-xl font-bold tracking-wider">logo</span>
                    </div>

                    <button
                        className="text-white p-2 hover:bg-white/10 rounded transition-colors"
                        aria-label="Menu"
                    >
                        <Menu size={28} strokeWidth={2} />
                    </button>
                </header>

                <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
                    <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-center mb-12 md:mb-16">
                        JESSICA & GRAY
                    </h1>

                    <button className="border-2 border-white text-white px-12 py-4 md:px-16 md:py-5 text-lg md:text-xl font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                        Watch
                    </button>
                </main>
            </div>
        </div>
    );
}

export default Home;