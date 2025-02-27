import './App.css';
import AddEmployeeData from './components/AddEmployeeData';
import UseFetch from './components/UseFetch';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from '../src/components/Update'
function App() {
    return (
        <Router>
            <div>
                {/* Move UseFetch inside a route if needed */}
                <Routes>
                    <Route path="/" element={<UseFetch />} />
                    <Route path="/newdata" element={<AddEmployeeData />} />
                    <Route path="/updatedata/:id" element={<Update />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
