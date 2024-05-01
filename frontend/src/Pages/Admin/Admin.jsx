import React from 'react'
import { useSelector, useDispatch } from "react-redux";
const Admin = () => {
    const {doctortoken,setdoctortoken,patienttoken,setpatienttoken,nursetoken,setnursetoken,admintoken,setadmintoken}=useauth();
    const doctor = useSelector((state) => state.auth.doctor);
  return (
    <div>Admin</div>
  )
}

export default Admin