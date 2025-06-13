import {Helmet} from "react-helmet";
import '../index.css';
const About = () => {
    return (
        <>
            <Helmet>
                <title>About | Sedarius Art</title>
                <meta name="description"
                      content="Meet the artist behind Sedarius Art — my journey & passion for miniature painting."/>
            </Helmet>

            <h1 className="text-3xl font-bold mt-8 text-center">About Sedarius Art</h1>
            <section className="max-w-2xl mx-auto container">
                <h2 className="text-2xl mb-4 text-primary">About Sedarius</h2>
                <p className="text-gray-300 leading-relaxed">
                    I'm a passionate miniature painter with a love for dark tones, horror vibes, and
                    fantasy aesthetics. Each piece I paint is a story told through brush strokes.
                </p>
            </section>
        </>
    )
}

export default About
