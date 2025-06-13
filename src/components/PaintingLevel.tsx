import React from "react";
import '../styles/App.css';

type LevelDescription = {
    level: string;
    description: string;
};

const levelDescriptions: LevelDescription[] = [
    { level: "Level 1", description: "Standard tabletop-level painting. Get your army battle-ready and hit the gaming table! At least three colours, basic shading and transfers," },
    { level: "Level 2", description: "Tabletop+ standard - make your army pop! Colour blending, more advanced shading, transfers and simple freehands await." },
    { level: "Level 3", description: "Exceptional level - complex freehands, multiple colours, NMM and even more - contact me to agree upon details!" },
];

const PaintingLevel: React.FC = () => {
    return (
        <div className='fade-page content-center justify-center text-center flex flex-col' style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
            <h1>Pricing Levels</h1>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                <tr>
                    <th style={{ textAlign: "left", borderBottom: "2px solid #ccc", padding: "10px" }}>Level</th>
                    <th style={{ textAlign: "left", borderBottom: "2px solid #ccc", padding: "10px" }}>Description</th>
                </tr>
                </thead>
                <tbody>
                {levelDescriptions.map(({ level, description }) => (
                    <tr key={level}>
                        <td style={{ borderBottom: "1px solid #eee", padding: "10px" }}>{level}</td>
                        <td style={{ borderBottom: "1px solid #eee", padding: "10px" }}>{description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaintingLevel;
