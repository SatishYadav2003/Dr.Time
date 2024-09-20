import React from "react";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function PathologistFormPage() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="w-11/12 mx-auto my-5">
        <div className="hero bg-base-50 p-4 lg:p-8 rounded-lg shadow-lg">
          <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="mb-20">
                <img
                  src="https://img.freepik.com/free-vector/scientists-working-laboratory_23-2148496624.jpg?t=st=1724608293~exp=1724611893~hmac=48c604b7646e6b42468f71ccf2307d85aa3e6937bd5a074089557465b438c71a&w=1060"
                  alt=""
                />
              </div>
              <h1 className="text-3xl lg:text-3xl font-bold mb-4">
                PATHOLOGIST'S REGISTRATION
              </h1>
              <h4 className="text-lg lg:text-xl font-semibold mb-4">
                Showcase your expertise to patients and colleagues
              </h4>
              <p className="text-base lg:text-lg">
                Join our platform to make your profile visible to patients
                seeking pathology services.
              </p>
            </div>
            <div className="card bg-base-100 max-w-md lg:max-w-lg shadow-2xl p-4 lg:p-6 rounded-lg">
              <form className="w-full max-w-lg">
                {/* Required Fields */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-dob"
                    >
                      Date of Birth
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-dob"
                      type="date"
                      name="dob"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-gender"
                    >
                      Gender
                    </label>
                    <select
                      name="gender"
                      className="select appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-gender"
                      required
                    >
                      <option disabled selected>
                        Select gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-email"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-profilePhoto"
                    >
                      Profile Photo
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-profilePhoto"
                      type="file"
                      name="profilePhoto"
                    />
                  </div>

                  <div className="w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-medicalLicense"
                    >
                      Medical License
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-medicalLicense"
                      type="file"
                      name="medicalLicense"
                    />
                  </div>

                  <div className="w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-certificationDocuments"
                    >
                      Certification Documents
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-certificationDocuments"
                      type="file"
                      name="certificationDocuments"
                    />
                  </div>

                  <div className="w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-cvResume"
                    >
                      CV/Resume
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-cvResume"
                      type="file"
                      name="cvResume"
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-phone"
                      type="tel"
                      name="phone"
                      placeholder="9876543210"
                      maxLength={10}
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-specialization"
                    >
                      Specialization
                    </label>
                    <select
                      name="specialization"
                      className="select appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-specialization"
                      required
                    >
                      <option disabled selected>
                        Select specialization
                      </option>
                      <option>Anatomical Pathology</option>
                      <option>Clinical Pathology</option>
                      <option>Forensic Pathology</option>
                      <option>Hematopathology</option>
                    </select>
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-medLicenseNo"
                    >
                      Medical License Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-medLicenseNo"
                      type="text"
                      name="medLicenseNo"
                      placeholder="123-456-789"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-medLicenseExpiry"
                    >
                      Medical License Expiry Date
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-medLicenseExpiry"
                      type="date"
                      name="medLicenseExpiry"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-hospitalAffiliation"
                    >
                      Hospital/Clinic Affiliation
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-hospitalAffiliation"
                      type="text"
                      name="hospitalAffiliation"
                      placeholder="Hospital/Clinic Name"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                {/* Optional Fields */}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-awards"
                    >
                      Awards and Honors
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-awards"
                      type="text"
                      name="awards"
                      placeholder="e.g., Best Pathologist 2023"
                    />
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-publications"
                    >
                      Publications
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-publications"
                      type="text"
                      name="publications"
                      placeholder="e.g., Research on Cancer Pathology"
                    />
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-languageSkills"
                    >
                      Language Skills
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-languageSkills"
                      type="text"
                      name="languageSkills"
                      placeholder="e.g., English, Spanish"
                    />
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-additionalInfo"
                    >
                      Additional Information
                    </label>
                    <textarea
                      className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-additionalInfo"
                      name="additionalInfo"
                      placeholder="Additional notes or information"
                      rows="4"
                      cols="50"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default PathologistFormPage;
