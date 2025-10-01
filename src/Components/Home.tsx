import { useState } from 'react';
import { Menu } from 'lucide-react';
import Hamburger from './Hamburger';
import logo from "../../public/assets/logo.png"
import { Link } from 'react-scroll';


function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full overflow-hidden" id='homepage'>
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

            <Hamburger isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} onClose={() => setIsMenuOpen(false)} />

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

                    <nav className="description hidden md:flex md:items-center md:justify-center gap-8 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full absolute left-1/2 transform -translate-x-1/2">
                        <Link
                            to={"homepage"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="text-white text-base hover:text-gray-300 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to={"gallerypagedesktop"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="text-white text-base font-medium hover:text-gray-300 transition-colors"
                        >
                            Gallery
                        </Link>
                        <Link
                            to={"aboutpage"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="text-white text-base font-medium hover:text-gray-300 transition-colors"
                        >
                            About Me
                        </Link>
                        <Link
                            to={"servicepage"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="text-white text-base font-medium hover:text-gray-300 transition-colors"
                        >
                            Service
                        </Link>
                    </nav>
                </header>

                <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20 gallerytext">
                    <h1 className="text-[#eaeaea] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-center mb-12 md:mb-16 ">
                        David<span className='font-light text-[#eaeaea]'>Films</span>
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