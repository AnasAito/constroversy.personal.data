import React from "react";

import Navbar from "components/navbar.js";

export default function Profile() {
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
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div>
                  <div class="hidden sm:block">
                    <div class="border-b border-gray-200">
                      <nav class="-mb-px flex">
                        <a
                          href="#"
                          class="w-1/4 py-4 px-1 text-center border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
                        >
                          Débat
                        </a>
                        <a
                          href="#"
                          class="w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                        >
                          Acteurs
                        </a>
                        <a
                          href="#"
                          class="w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                          aria-current="page"
                        >
                          Cartographie
                        </a>
                        <a
                          href="#"
                          class="w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                        >
                          Interviews
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <h3 className="text-3xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Les solutions techniques sont-elles capables de protéger
                    l’usage de mes données personnelles ?
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    19 / 05 / 2020, SAFI
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg text-left text-justify leading-relaxed text-gray-800">
                        <p className="text-black font-bold">
                          (text will be integrated here )
                        </p>
                        On ne peut pas parler du sujet de protection des données
                        personnelles sans traiter le côté technique du sujet,
                        car l'évolution des outils digitaux d'information et de
                        communication est toujours en évolution ; chose qui rend
                        les solutions de protection des données personnelle
                        vulnérable, ce qui pousse à chercher des alternatives
                        dans le sujet. En outre, dans cette perspective on
                        essaye de discuter le problème dans les techniques de
                        protection des données personnelles, analyser les
                        solutions actuelles de protection ou d'exploitation de
                        données actuelles et comment les entreprises gèrent ces
                        solutions en exposant les problèmes et les failles
                        techniques trouvés dans ces solutions, ainsi de chercher
                        des alternatifs qui peuvent présenter une meilleure
                        protection pour les utilisateurs. P1 : Les Failles et
                        les scandales D’abord, on trouve maints problèmes
                        techniques dans ce sujet présentés par les scandales
                        rapportés dans la mauvaise exploitation des données
                        personnelles ou la violation de la vie privée des
                        citoyens. A cet égard, on peut citer, En 2018, le cas de
                        l’Enquête sur l’indicateur et l’impact du VIH/sida au
                        Nigeria, l’une des plus grandes enquêtes sur le VIH au
                        monde, risquait de révéler des détails personnels, y
                        compris la grossesse et les résultats d’examens
                        médicaux, sur environ 80 000 patients. L’enquête a
                        utilisé MongoDB, un système de gestion de base de
                        données convivial et autrefois ouvert. Selon Oloyede,
                        l’enquête a été stockée dans une base de données qui
                        n’était pas correctement sécurisée. Et dans la même
                        mesure Simons Bright ajoute :« Les registres de vote
                        biométriques sont un parfait exemple de la vulnérabilité
                        des données personnelles des Africains : des milliers
                        d’employés et de nombreux bureaux peuvent accéder aux
                        bases de données, la cybersécurité est souvent faible et
                        les atteintes à la vie privée ne sont généralement pas
                        traitées sérieusement par les autorités de protection
                        des données. »
                      </p>
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
