import { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/index"
import AppLoading from "./components/AppLoading"

function App() {

  return (
    <Suspense fallback={<AppLoading />}>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  </Suspense>
  )
}

export default App
