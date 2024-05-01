import React from 'react'

const Admin = () => {
    const {doctortoken,setdoctortoken,patienttoken,setpatienttoken,nursetoken,setnursetoken,admintoken,setadmintoken}=useauth();
    console.log(admintoken);
  return (
    <div>Admin</div>
  )
}

export default Admin