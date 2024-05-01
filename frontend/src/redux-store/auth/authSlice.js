import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';


const initialState = {
  user:null,
  doctor:null,
  admin:null,
  nurse:null
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
       //setting 
      localStorage.setItem("PatientToken",action.payload);
      state.patient = action.payload;
      
    },
    setLoginAdmin: (state,action) => {
      localStorage.setItem("DoctorToken",action.payload);
      state.doctor = action.payload;
      
    },
    setLoginDoctor: (state, action) => {
      localStorage.setItem("AdminToken",action.payload);
      state.admin = action.payload;
          },
    setLoginNurse: (state, action) => {
      localStorage.setItem("NurseToken",action.payload);
            state.nurse = action.payload;
                },
    setLogout: (state) => {
      localStorage.clear();
      state.user=null,
      state.doctor=null,
      state.admin=null
      state.nurse=nulll;
    }
  },
});

export const {
  setLoginUser,
  setLoginDoctor,
  setLoginAdmin,
  setLoginNurse,
  setLogout
} = authSlice.actions;

export default authSlice.reducer;
