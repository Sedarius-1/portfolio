import {useState} from "react";
import '../styles/App.css';

const imageModules = import.meta.glob<{ default: string }>(
    '../assets/homeBgs/*.png',
    {eager: true}
);

const photos: string[] = Object.values(imageModules).map((mod) => mod.default);

const pricingData = [
    [
        {category: "Infantry", description: "25-32mm based infantry, e.g Space Marines or Beastmen Gors", price: "2-4 USD"},
        {category: "Monstrous Infantry", price: "5-8 USD", description: '>32mm based infantry, such as Minotaurs'},
        {category: "Characters", price: "5-8 USD", description: 'Primarchs or Special Characters'},
        {category: "Behemoth", price: "15-20 USD", description: "Gigantic monsters, such as Carnifex or Cygor"},
        {category: "Vehicle", price: "30 USD", description: "Vehicles, such as Leman Russ or Predator tank"},
    ],
    [
        {category: "Infantry", description: "25-32mm based infantry, e.g Space Marines or Beastmen Gors", price: "4-8 USD"},
        {category: "Monstrous Infantry", price: "10-16 USD", description: '>32mm based infantry, such as Minotaurs'},
        {category: "Characters", price: "10-16 USD", description: 'Primarchs or Special Characters'},
        {category: "Behemoth", price: "30-40 USD", description: "Gigantic monsters, such as Carnifex or Cygor"},
        {category: "Vehicle", price: "60 USD", description: "Vehicles, such as Leman Russ or Predator tank"},
    ],
    [
        {category: "Infantry", description: "25-32mm based infantry, e.g Space Marines or Beastmen Gors", price: "6-12 USD"},
        {category: "Monstrous Infantry", price: "15-24 USD", description: '>32mm based infantry, such as Minotaurs'},
        {category: "Characters", price: "15-24 USD", description: 'Primarchs or Special Characters'},
        {category: "Behemoth", price: "45-60 USD", description: "Gigantic monsters, such as Carnifex or Cygor"},
        {category: "Vehicle", price: "90 USD", description: "Vehicles, such as Leman Russ or Predator tank"},
    ],
];

export default function PriceComponent() {
    const [selectedLevel, setSelectedLevel] = useState(1);

    return (
        <div style={{display: "flex", flexDirection: 'column', gap: 20}} className='fade-page'>
            {/* Left side: Photo */}

            <div style={{display: "flex", flexDirection: 'row', gap: 20, height:'100%'}}>
                {/* Right side: Buttons column */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: '50%',
                    gap: '3vw',
                    padding: '5vw',
                    height:'20vw'
                }}>
                    {[1, 2, 3].map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            style={{
                                whiteSpace: "pre-line", // allow newline with \n
                                padding: "10px",
                                backgroundColor: selectedLevel === level ? "#007BFF" : "#eee",
                                color: selectedLevel === level ? "white" : "black",
                                border: "none",
                                borderRadius: 5,
                                cursor: "pointer",
                                fontWeight: selectedLevel === level ? "bold" : "normal",
                                width: '100%'
                            }}
                        >
                            {`Level ${level}\n${"★".repeat(level)} ${"☆".repeat(3 - level)}`}
                        </button>
                    ))}

                </div>
                <div style={{display: "flex", alignItems: "flex-start"}}>
                    <img
                        src={photos[selectedLevel]}
                        alt={`Level ${selectedLevel} photo`}
                        style={{borderRadius: 8, maxWidth: '100%', height: '20vw'}}
                    />
                </div>
                {/* Pricing table below everything, full width */}
            </div>

            <div style={{
                flexBasis: "100%",
                marginTop: 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1 className="font-bold text-xl">Pricing</h1>
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        textAlign: "left",
                    }}
                >
                    <thead>
                    <tr>
                        <th style={{borderBottom: "2px solid #ccc", padding: 10}}>Category</th>
                        <th style={{borderBottom: "2px solid #ccc", padding: 10}}>Description</th>
                        <th style={{borderBottom: "2px solid #ccc", padding: 10}}>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pricingData[selectedLevel - 1].map(({category, description, price}) => (
                        <tr key={category}>
                            <td style={{borderBottom: "1px solid #ddd", padding: 10}}>{category}</td>
                            <td style={{borderBottom: "1px solid #ddd", padding: 10}}>{description}</td>
                            <td style={{borderBottom: "1px solid #ddd", padding: 10}}>{price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
