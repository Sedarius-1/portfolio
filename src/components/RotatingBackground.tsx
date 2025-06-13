import React, { useState, useEffect, type ReactNode } from 'react';
import '../styles/App.css';

// Dynamic image import via Vite
const imageModules = import.meta.glob<{ default: string }>(
    '../assets/homeBgs/*.png',
    { eager: true }
);

const images: string[] = Object.values(imageModules).map((mod) => mod.default);

interface RotatingBackgroundProps {
    interval?: number;
    children?: ReactNode;
}

const RotatingBackground: React.FC<RotatingBackgroundProps> = ({
                                                                   interval = 10000,
                                                                   children
                                                               }) => {
    const [activeLayer, setActiveLayer] = useState<'A' | 'B'>('A');
    const [imageA, setImageA] = useState(images[0]);
    const [imageB, setImageB] = useState(images[1 % images.length]);
    const [currentIndex, setCurrentIndex] = useState(1); // Already used 0 for A

    useEffect(() => {
        const timer = setInterval(() => {
            const nextImage = images[currentIndex % images.length];
            if (activeLayer === 'A') {
                setImageB(nextImage);
            } else {
                setImageA(nextImage);
            }

            // Allow image to load before switching opacity
            setTimeout(() => {
                setActiveLayer((prev) => (prev === 'A' ? 'B' : 'A'));
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 50); // Slight delay gives the browser a frame to prepare
        }, interval);

        return () => clearInterval(timer);
    }, [activeLayer, currentIndex, interval]);

    const wrapperStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    };

    const bgStyle = (image: string, visible: boolean): React.CSSProperties => ({
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        zIndex: 1,
        willChange: 'opacity',
        filter: 'brightness(30%)' // darker
    });

    return (
        <div style={wrapperStyle} className='fade-page'>
            {/* Layer A */}
            <div style={bgStyle(imageA, activeLayer === 'A')} />

            {/* Layer B */}
            <div style={bgStyle(imageB, activeLayer === 'B')} />

            {/* Foreground */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </div>
    );
};

export default RotatingBackground;
