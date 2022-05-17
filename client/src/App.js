import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from './components/HeroSection';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import Navbar from './components/Navbar';
import PlaceScreen from './screens/PlaceScreen';



function App() {
  return (
    <BrowserRouter>
      <div className='header'>
        <div className='container'>
          {/* <a href='/'>Healthy_First</a> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
        </div>
      </div>
      <Routes>
        <Route path="place/:slug" element={<PlaceScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
