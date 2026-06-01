import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const base = import.meta.env.VITE_BASE_PATH || '/'

export default function App() {
  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}