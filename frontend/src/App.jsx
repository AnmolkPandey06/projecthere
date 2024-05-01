import { Link, Routes ,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import AdminRegister from "./Pages/Admin/AdminRegister";
import DoctorRegister from "./Pages/Doctor/DoctorRegister";
import DoctorLogin from "./Pages/Doctor/DoctorLogin";
import PatientRegister from "./Pages/Patient/PatientRegister";
import PatientLogin from "./Pages/Patient/PatientLogin";
import NurseRegister from "./Pages/Nurse/NurseRegister";
import NurseLogin from "./Pages/Nurse/NurseLogin";
import AdminLogin from "./Pages/Admin/AdminLogin";
import Nurse from "./Pages/Nurse/Nurse";
import Patient from "./Pages/Patient/Patient";
import Doctor from "./Pages/Doctor/Doctor";
import Admin from "./Pages/Admin/Admin";

export default function App() {
  return (<>
   
    <div className="min-h-screen flex justify-center bg-white">
      <Routes>
       <Route exact path='/' element={<Home />} />
        <Route exact path='admin/register' element={<AdminRegister/>} />
        <Route exact path='admin/login' element={<AdminLogin/>} />
        <Route exact path='doctor/register' element={<DoctorRegister/>} />
        <Route exact path='doctor/login' element={<DoctorLogin/>} />
        <Route exact path='nurse/register' element={<NurseRegister/>} />
        <Route exact path='nurse/login' element={<NurseLogin/>} />
        <Route exact path='patient/register' element={<PatientRegister/>} />
        <Route exact path='patient/login' element={<PatientLogin/>} />
        <Route exact path='admin' element={<Admin/>} />
        <Route exact path='doctor' element={<Doctor/>} />
        <Route exact path='nurse' element={<Nurse/>} />
        <Route exact path='patient' element={<Patient/>} />
        
      </Routes>
    </div>
    </>
  )
}