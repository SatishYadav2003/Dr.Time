import React from "react";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function PharmaceuticalFormPage() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="w-11/12 mx-auto my-5">
        <div className="hero bg-base-50 p-4 lg:p-8 rounded-lg shadow-lg">
          <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="mb-20">
                <img
                  src="https://img.freepik.com/free-vector/coronavirus-vaccine-development-concept_23-2148534521.jpg?t=st=1724608797~exp=1724612397~hmac=80d0a1906cbdc64776afa5a0b3fc47036448425f17c487dbece5b420e1643287&w=1060"
                  alt=""
                />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                Pharmaceutical Professional Registration
              </h1>
              <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                Elevate Your Expertise and Connect with Industry Leaders
              </h4>
              <p className="text-lg lg:text-xl text-gray-600">
                Join our vibrant platform to enhance your professional
                visibility and network with peers and experts in the
                pharmaceutical field.
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
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                      htmlFor="grid-certificationDocument"
                    >
                      Certification Document
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-certificationDocument"
                      type="file"
                      name="certificationDocument"
                    />
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

                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-education"
                    >
                      Highest Education Level
                    </label>
                    <select
                      name="education"
                      className="select appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-education"
                      required
                    >
                      <option disabled selected>
                        Select education level
                      </option>
                      <option>Bachelor's Degree</option>
                      <option>Master's Degree</option>
                      <option>PhD</option>
                      <option>Other</option>
                    </select>
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-license"
                    >
                      Professional License Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-license"
                      type="text"
                      name="license"
                      placeholder="ABC-123-XYZ"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-expiry"
                    >
                      License Expiry Date
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-expiry"
                      type="date"
                      name="licenseExpiry"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-employer"
                    >
                      Current Employer
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-employer"
                      type="text"
                      name="employer"
                      placeholder="Company/Organization Name"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-jobTitle"
                    >
                      Job Title
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-jobTitle"
                      type="text"
                      name="jobTitle"
                      placeholder="e.g., Senior Pharmacist"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-address"
                    >
                      Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-address"
                      type="text"
                      name="address"
                      placeholder="123 Main St, City, State, ZIP"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-city"
                    >
                      City
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-state"
                    >
                      State
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      type="text"
                      name="state"
                      placeholder="State"
                      required
                    />
                    <p className="text-red-500 text-xs italic hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      ZIP Code
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
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
                      htmlFor="grid-certifications"
                    >
                      Certifications
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-certifications"
                      type="text"
                      name="certifications"
                      placeholder="e.g., Certified Pharmacist"
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
                      placeholder="e.g., Research on Drug Development"
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
                      placeholder="e.g., English, French"
                    />
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-researchInterests"
                    >
                      Research Interests
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-researchInterests"
                      type="text"
                      name="researchInterests"
                      placeholder="e.g., Drug Safety, Pharmacokinetics"
                    />
                  </div>
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
                      placeholder="e.g., Excellence in Pharmaceutical Research"
                    />
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-volunteerExperience"
                    >
                      Volunteer Experience
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-volunteerExperience"
                      type="text"
                      name="volunteerExperience"
                      placeholder="e.g., Community Health Initiatives"
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

export default PharmaceuticalFormPage;
