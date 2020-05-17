import React, { useState } from "react";
import Modal from "components/modal";
export default function Tour1() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="pb-20 relative block bg-blue-900 ">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
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
              className="text-blue-900   fill-current  "
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                cycle de vie des données
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Ce tour interactif nous montre le cycle de vie d'une donnees
                personelle en introduisant les etapes : collecte , traitemnet et
                partage .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 lg:pt-0 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">formulaire web</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    En complettant ce formulaire vous acceptez nos{" "}
                    <a className="text-blue-500 cursor-pointer">termes</a> et
                    nos{" "}
                    <a className="text-blue-500 cursor-pointer">conditions</a>
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShow(true)}
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        close={() => setShow(false)}
        text=" Avant de commencer à collecter des données, les meilleures pratiques recommandent aux collecteurs de données d'obtenir d'abord le consentement avant la collecte de données active et passive. Ces mesures aident à éviter les problèmes de communication et permettent à l'utilisateur de décider de s'inscrire ou de se retirer."
        title=" consentement avant la collecte"
      />
    </>
  );
}
