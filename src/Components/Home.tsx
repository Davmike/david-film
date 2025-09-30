import { useState } from 'react';
import { Menu } from 'lucide-react';
import Hamburger from './Hamburger';
import logo from "../../public/assets/logo.png"

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="absolute inset-0 bg-black/30" />

            <Hamburger isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="flex justify-between items-center p-6 md:p-8">
                    <div className="border-white px-4 py-2 md:px-6 md:py-3">
                        <img src={logo} className="w-[70px]"></img>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
                        aria-label="Menu"
                    >
                        <Menu size={32} strokeWidth={2} />
                    </button>

                    <nav className="hidden md:flex md:items-center md:justify-center gap-8 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full absolute left-1/2 transform -translate-x-1/2">
                        <a
                            href="#home"
                            className="text-white text-base font-bold hover:text-gray-300 transition-colors text-[24px]"
                        >
                            Home
                        </a>
                        <a
                            href="#gallery"
                            className="text-white text-base font-medium hover:text-gray-300 transition-colors"
                        >
                            Gallery
                        </a>
                        <a
                            href="#about"
                            className="text-white text-base font-medium hover:text-gray-300 transition-colors"
                        >
                            About Me
                        </a>
                        <a
                            href="#service"
                            className="text-white text-base font-medium hover:text-gray-300 transition-colors"
                        >
                            Service
                        </a>
                    </nav>
                </header>

                <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
                    <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-center mb-12 md:mb-16">
                        David <span className='font-light'>Films</span>
                    </h1>

                    {/* <button className="border-2 border-white text-white px-12 py-4 md:px-16 md:py-5 text-lg md:text-xl font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                        Watch
                    </button> */}
                </main>
            </div>
        </div>
    );
}

export default Home;