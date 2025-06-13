const Footer = () => {
    return (
        <footer className="bg-card text-center py-4 text-sm text-gray-400 mt-10">
            <p>&copy; {new Date().getFullYear()} Sedarius Art</p>
            <a
                href="https://instagram.com/sedarius_art"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline ml-2"
            >
                @sedarius_art
            </a>
        </footer>
    )
}

export default Footer
