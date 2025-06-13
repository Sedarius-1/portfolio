import {useTranslation} from "react-i18next";
export default function UrgencyBanner() {

    const { t } = useTranslation();

    return (
        <div className="bg-yellow-100 text-yellow-800 text-center py-2">
            {t("nav.banner")}
        </div>
    );
}
