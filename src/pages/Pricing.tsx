import PriceComponent from "../components/PriceComponent.tsx";
import {useState} from "react";
import PriceDescriptionComponent from "../components/PriceDescriptionComponent.tsx";

const Pricing = () => {

    const [option, setOption] = useState(false);

    return (
        <section>
            <div className="grid gap-4">
                {!option && <PriceComponent/>}
                {option && <PriceDescriptionComponent/>}
            </div>
            <div className='content-center justify-center flex'>
                <button
                    onClick={()=>{setOption(!option)}}
                    style={{
                        whiteSpace: "pre-line", // allow newline with \n
                        marginTop: "25px",
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
    )
}

export default Pricing
