import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Workflow from "./pages/Workflow.tsx";
import Pricing from "./pages/Pricing.tsx";
import GAListener from "./components/GAListener";
import UrgencyBanner from "./components/UrgencyBanner.tsx";
import BlogPost from "./pages/blog/[slug]";
import Blog from "./pages/Blog.tsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <GAListener></GAListener>
            <Navbar/>
            <UrgencyBanner/>
            <main className="flex-1 p-4">

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/workflow" element={<Workflow/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/blog/:slug" element={<BlogPost/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
