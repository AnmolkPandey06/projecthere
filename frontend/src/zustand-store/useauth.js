// import {useStore} from 'zustand';

// export const useConversation=useStore({
//     selectedConvo:null,
//     setSelectedConversation:(selectedConvo)=>set({selectedConvo}),
//     messages:[],
//     setMessages:(messages)=>set({messages}),

// })


import { create } from "zustand";

export const useauth = create((set) => ({
	doctortoken: null,
	setdoctortoken: (doctortoken) => set({ doctortoken }),
	patienttoken: null,
	setpatienttoken: (patienttoken) => set({ patienttoken }),
	admintoken: null,
	setadmintoken: (admintoken) => set({ admintoken }),
	nursetoken: null,
	setnursetoken: (nursetoken) => set({ nursetoken }),
}));




