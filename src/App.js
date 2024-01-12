import './App.css'
import Achat from './component/achat/Achat'
import Login from './component/login/Login'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/achat" element={
                  <Achat />
                }
            />
            <Route path="/" element={
                  <Login />
                }
            />
          </Routes>
        </Router>
    </>
  );
}

export default App;
