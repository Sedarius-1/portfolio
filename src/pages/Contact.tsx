import React, { useEffect, useState } from "react";
import bgImage from "../assets/contact/bg.png";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'http://cdn.lightwidget.com/widgets/lightwidget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };

    const sectionStyle: React.CSSProperties = {

        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,1)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section className="relative py-12 px-4 flex flex-col items-center justify-center fade-page"
                 style={sectionStyle}>
            <div className="absolute inset-0 pointer-events-none z-0"
                 style={{
                     background: `
      linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgb(18,18,18) 100%),
      linear-gradient(to top, rgba(0,0,0,0) 80%, rgb(18,18,18) 100%),
      linear-gradient(to left, rgba(0,0,0,0) 80%, rgb(18,18,18) 100%),
      linear-gradient(to right, rgba(0,0,0,0) 80%, rgb(18,18,18) 100%)
    `
                 }}
            />
            <div className="relative z-10 text-center content-center">
                <h2 className="text-2xl text-primary py-10">Ask for a free quote!</h2>

                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-2 text-black rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-2 text-black rounded"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="p-2 text-black rounded"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                    >
                        Send
                    </button>
                </form>

                {status && (
                    <p className="mt-4 text-center text-white font-semibold">{status}</p>
                )}
                <p className="py-4">
                    See more of my work or reach me on Instagram!
                </p>
                <p className="py-4">
                    <a
                        href="https://instagram.com/sedarius_art"
                        className="text-accent underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @sedarius_art
                    </a>
                </p>
            </div>
        </section>
);
};

export default Contact;
