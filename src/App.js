"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Benefits from "./components/Benefits"
import Demo from "./components/Demo"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`App ${isLoaded ? "loaded" : ""}`}>
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Demo />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
