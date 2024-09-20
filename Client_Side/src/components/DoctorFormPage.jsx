import React from "react";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function DoctorFormPage() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="w-11/12 mx-auto my-5">
        <div className="hero bg-base-50 p-4 lg:p-8 rounded-lg shadow-lg">
          <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="mb-20">
                <img
                  src="https://img.freepik.com/free-vector/online-doctor-with-white-coat_23-2148519127.jpg?t=st=1724604679~exp=1724608279~hmac=91d3d8d894014d2afe51cf559324ed8132481fe8b2a6869ba45cc267f39af988&w=740"
                  alt=""
                />
              </div>
              <h1 className="text-3xl lg:text-3xl font-bold mb-4">
                DOCTOR'S REGISTRATION
              </h1>
              <h4 className="text-lg lg:text-xl font-semibold mb-4">
                Patients are looking for doctors like you
              </h4>
              <p className="text-base lg:text-lg">
                Millions of patients are looking for the right doctor on DR.
                TIME. Start your digital journey with DR. TIME Profile
              </p>
            </div>
            <div className="card bg-base-100 max-w-md lg:max-w-lg shadow-2xl p-4 lg:p-6 rounded-lg">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      name="fname"
                      type="text"
                      placeholder="Jane"
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      name="lname"
                      type="text"
                      placeholder="Doe"
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
                      htmlFor="grid-email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      name="password"
                      placeholder="******************"
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-dob"
                    >
                      Date of birth
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="date"
                      name="dob"
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-dob"
                    >
                      Gender
                    </label>
                    <select
                      name="gender"
                      className="select appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option disabled selected>
                        Select gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>

                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-mobile"
                    >
                      Phone Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="tel"
                      name="mobile"
                      placeholder="9874560123"
                      maxLength={10}
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
                    >
                      <option disabled selected>
                        Select specialization
                      </option>
                      <option>Physicians</option>
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
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-medLicenseNoExpiry"
                    >
                      Medical License Expiry Date
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-medLicenseNoExpiry"
                      type="text"
                      name="medLicenseNoExpiry"
                      placeholder="123-456-789"
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
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
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-hospitalAffiliationName"
                    >
                      Hospital Affiliation Name
                    </label>
                    <select
                      name="hospitalAffiliationName"
                      className="select appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option disabled selected>
                        Select hospital name
                      </option>
                      <option>Physicians</option>
                    </select>
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-hospitalAffiliationAddress"
                    >
                      Hospital Affiliation Address
                    </label>
                    <select
                      name="hospitalAffiliationAddress"
                      className="select appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option disabled selected>
                        Select hospital address
                      </option>
                      <option>Physicians</option>
                    </select>
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-qualification"
                    >
                      Qualification
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="text"
                      name="qualification"
                      placeholder="Enter Qualification"
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-experience"
                    >
                      Experience in years
                    </label>
                    <div className="relative">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="number"
                        name="experience"
                        placeholder="Enter experience"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-institute"
                    >
                      Institution
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-institute"
                      type="text"
                      placeholder="AIIMS Delhi"
                    />
                  </div>

                  <div className="w-full px-3 py-5">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-certificate"
                    >
                      Additional Certification
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-certificate"
                      type="file"
                      name="certificate"
                    />
                  </div>

                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-AlternateAddress"
                    >
                      Alternate Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-AlternateAddress"
                      type="text"
                      name="AlternateAddress"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-emergencyContact"
                    >
                      Emergency Contact
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-emergencyContact"
                      name="emergencyContact"
                      type="tel"
                      maxLength={10}
                      placeholder="Enter emergency contact details"
                    />
                  </div>

                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-languagesSpoken"
                    >
                      Languages Spoken
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-languagesSpoken"
                      type="text"
                      name="languagesSpoken"
                      placeholder="Languages the doctor can communicate in"
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-websiteLinkedIn"
                    >
                      Website/LinkedIn Profile
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-websiteLinkedIn"
                      type="url"
                      name="websiteLinkedIn"
                      placeholder="For additional information or professional networking"
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-additionalNotes"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-additionalNotes"
                      name="additionalNotes"
                      placeholder="Any other relevant information or comments"
                      rows="6"
                      cols="50"
                    ></textarea>
                  </div>

                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-professionalBiography"
                    >
                      Professional Biography
                    </label>
                    <textarea
                      className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-professionalBiography"
                      name="professionalBiography"
                      placeholder="A short biography or summary of the doctor’s career"
                      rows="6"
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

export default DoctorFormPage;
