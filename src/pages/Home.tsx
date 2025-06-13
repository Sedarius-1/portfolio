import React from 'react';
import RotatingBackground from "../components/RotatingBackground.tsx";
import '../styles/App.css';

const Home: React.FC = () => {

    return (
        <RotatingBackground>
            <section className="py-12 px-4 flex flex-col items-center justify-center">
                {/* Your existing content */}
                <h2 className="text-3xl mb-8 text-white font-bold text-center shadow-amber-50">
                    COMMISSION PAINTER
                </h2>

            </section>
        </RotatingBackground>

    );
};

export default Home;
