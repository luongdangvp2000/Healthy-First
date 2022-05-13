import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from './components/HeroSection';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import data from './data'

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
        
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
