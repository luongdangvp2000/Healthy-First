import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from './components/HeroSection';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import Navbar from './components/Navbar';
import PlaceScreen from './screens/PlaceScreen';
import Footer from './components/Footer';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import PlaceListScreen from './screens/PlaceListScreen';
import PlaceEditScreen from './screens/PlaceEditScreen';
import UserListScreen from './screens/UserListScreen';

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
        <Route path="/place/:id" element={<PlaceScreen />} exact />
        <Route path="/place/:id/edit" element={<PlaceEditScreen />} exact />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<PrivateRoute><ProfileScreen /></PrivateRoute>} />
        <Route
          path="/placelist"
          element={
            <AdminRoute>
              <PlaceListScreen />
            </AdminRoute>
          }
          exact
        />
        <Route
          path="/userlist"
          element={
            <AdminRoute>
              <UserListScreen />
            </AdminRoute>
          }
          exact
        />
        <Route path="/" element={<HomeScreen />} exact />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
