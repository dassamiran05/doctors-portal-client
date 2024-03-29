import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Signup from './pages/Login/Signup';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';
import Adddoctor from './pages/Dashboard/Adddoctor';
import ManageDoctors from './pages/Dashboard/ManageDoctors';
import Payment from './pages/Dashboard/Payment';

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<RequireAuth><Appointment /></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointment></MyAppointment>} />
          <Route path="review" element={<MyReview></MyReview>} />
          <Route path="payment/:id" element={<Payment></Payment>} />
          <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>} />
          <Route path="adddoctor" element={<RequireAdmin><Adddoctor/></RequireAdmin>} />
          <Route path="managedoctor" element={<RequireAdmin><ManageDoctors/></RequireAdmin>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <ToastContainer /> 
    </div>
  );
}

export default App;
