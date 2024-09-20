import React from "react";
import DoctorFormPage from "../src/components/DoctorFormPage"
import PathologistFormPage from "./components/PathologistFormPage";
import PharmaceuticalFormPage from "./components/PharmaceuticalFormPage";



function App() {
  return (
    <>
      <div>
      <DoctorFormPage/>
      <PathologistFormPage/>
      <PharmaceuticalFormPage/>
      </div>
    </>
  );
}

export default App;
