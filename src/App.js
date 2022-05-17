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
import Recipe from './screens/posts/Recipe';
import Post from './screens/posts/Post';
import CreatePost from './screens/posts/CreatePost';
import CreateRecipe from './screens/posts/CreateRecipe';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />

          <Route path="/" element={<Navbar />} >
            <Route path="homepage" element={<Homepage />} />
            <Route path="profile" element={<Profile />} >
              <Route path="your-post" element={<TabProfile />} index />
              <Route path="follower" element={<Follower />} />
            </Route>
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="recipe" element={<Recipe />} />
            <Route path="post" element={<Post />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="create-recipe" element={<CreateRecipe />} />
          </Route>
          

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
