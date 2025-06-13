import HeroBg from "../assets/homeBgs/z1.png";
import '../styles/App.css';
import {Helmet} from "react-helmet";
import '../index.css';
import Testimonials from "../components/Testimonials.tsx";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home | Sedarius Art</title>
                <meta
                    name="description"
                    content="Sedarius Art — Premium miniature painting commissions. From bare plastic to finishing touches."
                />
            </Helmet>
            <div className="relative w-full h-screen overflow-hidden container img-gradient-wrapper">
                <img
                    src={HeroBg}
                    alt="Showcase of premium painted miniature"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    style={{
                        background: `
      linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgb(18,18,18) 100%),
      linear-gradient(to top, rgba(0,0,0,0) 80%, rgb(18,18,18) 100%),
      linear-gradient(to left, rgba(0,0,0,0) 80%, rgb(18,18,18) 100%),
      linear-gradient(to right, rgba(0,0,0,0) 80%, rgb(18,18,18) 100%)
    `
                    }}
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Museum‑Quality Miniature Commissions
                    </h1>
                    <p className="mt-4 text-lg text-gray-200 max-w-xl">
                        From basecoat to finishing touches—bring your armies to life.
                    </p>
                    <a
                        href="contact"
                        className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-lg"
                    >
                        Order Your Commission
                    </a>
                    <Testimonials></Testimonials>
                </div>
            </div>
        </>
    );
}