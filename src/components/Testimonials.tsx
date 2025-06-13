import {useTranslation} from "react-i18next";

const items = [
    { quote: "", name: "" },
    { quote: "", name: "" },
];

export default function Testimonials() {

    const { t } = useTranslation();

    return (
        <div className="container my-12">
            <h2 className="text-2xl font-semibold mb-4">
                {t("home.testimonials_headline")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {items.map((t, i) => (
                    <blockquote key={i} className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-black">"{t.quote}"</p>
                        <footer className="mt-2 text-right text-black">— {t.name}</footer>
                    </blockquote>
                ))}
            </div>
        </div>
    );
}
