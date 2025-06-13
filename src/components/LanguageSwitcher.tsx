import {useTranslation} from "react-i18next";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang); // optional, persist selection
    };

    return (
        <div className="relative inline-block">
            <select
                onChange={handleChange}
                value={i18n.language}
                className="appearance-none bg-gray-800 text-white px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="en">🇬🇧 English</option>
                <option value="pl">🇵🇱 Polski</option>
            </select>
        </div>
    );
};
