import Price from "../components/Price.tsx";
import {useState} from "react";
import PaintingLevel from "../components/PaintingLevel.tsx";
import {Helmet} from "react-helmet";
import '../index.css';
import {useTranslation} from "react-i18next";
const Pricing = () => {

    const [option, setOption] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Pricing | Sedarius Art</title>
                <meta name="description"
                      content="Transparent pricing tiers for all miniature painting commissions—from tabletop to display pieces."/>
            </Helmet>
            <h1 className="text-3xl font-bold mt-8 mb-9 text-center">{t("services.commission")}</h1>
            <section>
                <div className="grid gap-4 container">
                    {!option && <Price/>}
                    {option && <PaintingLevel/>}
                </div>
                <div className='content-center justify-center flex'>
                    <button
                        onClick={() => {
                            setOption(!option)
                        }}
                        style={{
                            whiteSpace: "pre-line", // allow newline with \n
                            marginTop: "45px",
                            padding: "10px",
                            backgroundColor: "#eee",
                            color: "black",
                            border: "none",
                            borderRadius: 5,
                            cursor: "pointer",
                            fontWeight: "normal",
                            width: '30%'
                        }}
                    >
                        Read more about painting levels!
                    </button>
                </div>

            </section>
        </>
    )
}

export default Pricing
