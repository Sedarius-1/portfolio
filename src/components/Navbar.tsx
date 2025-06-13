import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative bg-card px-4 py-3 shadow-md flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/portfolio/">
                    <img src={logo} alt="Sedarius Art logo" className="h-16 w-auto" />
                </Link>
            </div>

            {/* Hamburger for mobile */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Nav links */}
            <div
                className={`${
                    isOpen ? 'block' : 'hidden'
                } absolute top-full left-0 w-full bg-card md:static md:flex md:space-x-16 md:items-center md:w-auto md:justify-center md:ml-auto text-lg z-10 text-center`}
            >
                <div className="flex flex-col md:flex-row md:items-center md:space-x-16 text-center py-4 md:py-0">
                    <Link
                        to="/portfolio/"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/portfolio/pricing"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        to="/portfolio/workflow"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Workflow
                    </Link>
                    <Link
                        to="/portfolio/about"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        About me
                    </Link>
                    <Link
                        to="/portfolio/contact"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
