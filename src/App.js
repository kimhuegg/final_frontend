import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import Homepage from './screens/homepage/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          <Route path="/" element={<Navbar />} >
            <Route path="/homepage" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
