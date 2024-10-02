import React from "react";
import DoctorFormPage from "../src/components/DoctorFormPage"
import { Toaster } from 'react-hot-toast';
// import PathologistFormPage from "./components/PathologistFormPage";
// import PharmaceuticalFormPage from "./components/PharmaceuticalFormPage";



function App() {
  return (
    <>
      <div>
      <DoctorFormPage/>
      {/* <PathologistFormPage/> */}
      {/* <PharmaceuticalFormPage/> */}
      <Toaster/>
      </div>
    </>
  );
}

export default App;
