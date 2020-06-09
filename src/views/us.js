import React from "react";
import Navbar from "components/navbar.js";
export default function Us() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="data:image/jpeg;base64,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"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="data:image/jpeg;base64,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"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="data:image/jpeg;base64,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"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="data:image/jpeg;base64,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"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
