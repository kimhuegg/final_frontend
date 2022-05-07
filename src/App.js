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
import Profile from './screens/profile/Profile';
import TabProfile from './components/profile/TabProfile';
import Follower from './components/profile/Follower';
import EditProfile from './screens/profile/EditProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          <Route path="/" element={<Navbar />} >
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} >
              <Route path="post" element={<TabProfile />} index/>
              <Route path="follower" element={<Follower />} />
            </Route>
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
