import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter basename="/dev">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}