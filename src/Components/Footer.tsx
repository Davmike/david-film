import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-10 mt-[150px]">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    {/* Logo */}
                    <h1 className="text-5xl font-bold">DAVID</h1>

                    {/* Contacts */}
                    <div className="text-center md:text-left space-y-2 description">
                        <h2 className="font-semibold text-lg">CONTACTS</h2>
                        <p className="text-gray-400">davidmikeladze00@gmail.com</p>
                        <p className="text-gray-400">+995 543 321 123</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
                        >
                            <FaTiktok size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-700"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>Copyright © 2025</p>
                    <a
                        href="#top"
                        className="flex items-center space-x-1 mt-4 md:mt-0 hover:text-white transition"
                    >
                        <span>Back To Top</span>
                        <span>↑</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
