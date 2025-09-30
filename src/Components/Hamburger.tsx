import { X } from 'lucide-react';

interface HamburgerProps {
    isOpen: boolean;
    onClose: () => void;
}

function Hamburger({ isOpen, onClose }: HamburgerProps) {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            <div
                className={`fixed top-0 left-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full p-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-white text-3xl font-bold">menu</h2>
                        <button
                            onClick={onClose}
                            className="text-white p-2 hover:bg-white/10 rounded transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={28} strokeWidth={2} />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-6">
                        <a
                            href="#home"
                            className="text-white text-xl font-medium px-8 py-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-center"
                        >
                            Home
                        </a>
                        <a
                            href="#gallery"
                            className="text-white text-xl font-medium px-8 py-4 hover:bg-gray-800 rounded-full transition-colors text-center"
                        >
                            Gallery
                        </a>
                        <a
                            href="#about"
                            className="text-white text-xl font-medium px-8 py-4 hover:bg-gray-800 rounded-full transition-colors text-center"
                        >
                            About Me
                        </a>
                        <a
                            href="#contact"
                            className="text-white text-xl font-medium px-8 py-4 hover:bg-gray-800 rounded-full transition-colors text-center"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Hamburger;