import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Workflow from "./pages/Workflow.tsx";
import Pricing from "./pages/Pricing.tsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar/>
            <main className="flex-1 p-4">
                <Routes>
                    <Route path="/portfolio/" element={<Home/>}/>
                    <Route path="/portfolio/pricing" element={<Pricing/>}/>
                    <Route path="/portfolio/workflow" element={<Workflow/>}/>
                    <Route path="/portfolio/about" element={<About/>}/>
                    <Route path="/portfolio/contact" element={<Contact/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
