import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FetchData from "./components/FetchData"
import AddData from './components/AddData'
function App() {
  return (
    <div>
      <h3>Crud Operation</h3>
      <Router>
        <Routes>
          <Route path="/" element={<FetchData />}></Route>
          <Route path="/adddata" element={<AddData />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App
