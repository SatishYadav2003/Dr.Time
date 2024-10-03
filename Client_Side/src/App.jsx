import React from "react";
import { Toaster } from "react-hot-toast";
import PharmacyForm from "./pharmacy/PharmacyForm";

function App() {
  return (
    <>
      <div>
        <PharmacyForm/>
        <Toaster />
      </div>
    </>
  );
}

export default App;
