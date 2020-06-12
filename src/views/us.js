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
                "url('https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"
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
                <h2 className="text-4xl font-semibold">Qui-sommes nous ?</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Nous sommes un groupe d’élèves-ingénieurs de l’Université
                  Mohammed VI Polytechnique qui, sous l'optique des polémiques
                  grandissantes autour de l'utilisation des données
                  personnelles, a décidé de mener un projet académique encadré
                  par Madame Cécile MEADEL. Sous le format d'un site web
                  informatif, nous avons essayé de vulgariser cette controverse
                  en l'évoquant sous différents axes et en prenant l'avis
                  d'experts en la matière.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="data:image/jpeg;base64,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"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Anas AIT AOMAR</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Responsable web
                    </p>
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
                    <h5 className="text-xl font-bold">Hibatallah RHARRASSI</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Responsable coordination
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQE_WgF-mHIxhA/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=AWDCfvti4_g7ieVD-Q6xtQ14bgsa7gwMcvxXyDIw-5c"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mohamed Amine CHAFIK</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Responsable documentation scientifique
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://media-exp1.licdn.com/dms/image/C5603AQEKNqd0wzP8_Q/profile-displayphoto-shrink_800_800/0?e=1597276800&v=beta&t=-4t-ZM9ukVrrDSoOgKbYnlVjf21vu8vFJ8hMGbaXpDA"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sanaa MARZOUG</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Responsable documentation générale
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGtNjj1K51XHg/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=gxVjQEI1wQVFNeOfQOFP_vGu-c_Qzzc3dkjBeq4sdPk"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Siham BOUDHAR</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Responsable cartographie des acteurs
                    </p>
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
                    <h5 className="text-xl font-bold"> Zakarya JOUHAFA</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Responsable web
                    </p>
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
