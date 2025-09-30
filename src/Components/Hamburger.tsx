import { useState } from 'react';
import { X } from 'lucide-react';

interface HamburgerProps {
    isOpen: boolean;
    onClose: () => void;
}

function Hamburger({ isOpen, onClose }: HamburgerProps) {
    const [activeLink, setActiveLink] = useState<string>("home"); // default = Home

    const navItems = [
        { id: "home", label: "Home" },
        { id: "gallery", label: "Gallery" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <div id="hamburger">
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full p-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-white text-3xl font-bold menu">MENU</h2>
                        <button
                            onClick={onClose}
                            className="text-white p-2 hover:bg-white/10 rounded transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={28} strokeWidth={2} />
                        </button>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-col space-y-6">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setActiveLink(item.id)}
                                className={`text-white text-xl font-medium px-8 py-4 rounded-full text-center transition-colors
                  ${activeLink === item.id
                                        ? "bg-white/30" // აქტიური ბექგრაუნდი
                                        : "hover:bg-gray-800"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Hamburger;
