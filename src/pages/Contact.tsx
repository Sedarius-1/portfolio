import React, { useState} from "react";
import bgImage from "../assets/contact/bg.png";
import {Helmet} from "react-helmet";
import '../index.css';

const Contact = () => {
    const [step, setStep] = useState(1);

    const sectionStyle: React.CSSProperties = {

        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,1)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <Helmet>
                <title>Contact | Sedarius Art</title>
                <meta name="description"
                      content="Get in touch with Sedarius Art for your next miniature painting commission."/>
            </Helmet>

            <h1 className="text-3xl font-bold mt-8 text-center">Ask for a Free Quote!</h1>
            <section className="relative py-12 px-4 flex flex-col items-center justify-center fade-page container"
                     style={sectionStyle}>
                <progress value={step} max={3} className="w-full mb-4"></progress>

                {step === 1 && (
                    <div>
                        <label>Choose Style</label>
                        <select name="style" className="block w-full">
                            <option value="standard">Standard</option>
                            <option value="display">Display Quality</option>
                        </select>
                        <button onClick={() => setStep(2)}>Next</button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <label>Upload Reference</label>
                        <input type="file" accept="image/*" className="block" />
                        <button onClick={() => setStep(1)}>Back</button>
                        <button onClick={() => setStep(3)}>Next</button>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <label>Your Email</label>
                        <input type="email" className="block w-full" />
                        <button onClick={() => setStep(2)}>Back</button>
                        <button type="submit">Submit</button>
                    </div>
                )}
            </section>
        </>
    );
};

export default Contact;
