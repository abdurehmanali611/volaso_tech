import { Routes, Route } from "react-router-dom"
import Home from "./Screens/Home"
import Technology from './Screens/Technology'
import About from './Screens/About'
import Contacts from "./Screens/Contacts"
import Privacy from "./Screens/Privacy"
import Terms from "./Screens/Terms"

const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/technology" element = {<Technology/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contacts/>}/>
      <Route path="/privacy" element = {<Privacy/>}/>
      <Route path="/terms" element = {<Terms/>}/>
    </Routes>
  )
}

export default App