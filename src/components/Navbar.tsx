import { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/LOGO.png';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    return (
        <nav className="relative bg-card px-4 py-3 shadow-md flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img  src={bgImage}
                            alt="Sedarius Art logo"
                            className="h-10 w-auto"
                    />
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
                        to="/"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {t("nav.home")}
                    </Link>
                    <Link
                        to="/pricing"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {t("nav.services")}
                    </Link>
                    <Link
                        to="/workflow"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {t("nav.workflow")}
                    </Link>
                    <Link
                        to="/about"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {t("nav.about_me")}
                    </Link>
                    {/*<Link*/}
                    {/*    to="/blog"*/}
                    {/*    className="block px-4 py-2 hover:text-primary transition"*/}
                    {/*    onClick={() => setIsOpen(false)}*/}
                    {/*>*/}
                    {/*    Blog*/}
                    {/*</Link>*/}
                    <Link
                        to="/contact"
                        className="block px-4 py-2 hover:text-primary transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {t("nav.contact")}
                    </Link>
                </div>
                <LanguageSwitcher/>
            </div>
        </nav>
    );
};

export default Navbar;
