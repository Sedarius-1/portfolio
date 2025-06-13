import "./i18n";
import ReactDOM from "react-dom/client";
import App from "./App";
// import HelmetProvider from "react-helmet";
import ReactGA from "react-ga4";
import {BrowserRouter} from "react-router-dom";

ReactGA.initialize(import.meta.env.VITE_GA_ID);

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <HelmetProvider>
    <BrowserRouter basename="/portfolio">
            <App />
    </BrowserRouter>
    // </HelmetProvider>
);
