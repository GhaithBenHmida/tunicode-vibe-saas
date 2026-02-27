import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import LinkAccount from './pages/LinkAccount'
import Workspace from './pages/Workspace'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/link" element={<LinkAccount />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </main>
    </div>
  )
}