import Nav from "./components/nav";
import { Routes, Route } from 'react-router-dom'
import Home from "./routes/home"; 
import Projects from "./routes/project";
import Experience from "./routes/experience";
import Contact from './routes/contact'

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}
export default App;