import React from "react";
import Navbar from "components/navbar.js";

export default function Anexe() {
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
                <h2 className="text-4xl font-semibold">Annexe</h2>
              </div>
            </div>
            <div className="text-justify">
              <p className=" ml-3 font-medium text-xl text-red-400">
                Définitions :{" "}
              </p>
              <p className="m-3">
                <span className="font-bold">
                  Règlement Général sur la Protection des Données (RGPD){" "}
                </span>{" "}
                : Règlement de l’Union Européenne sur la protection des données
                et la vie privée dans l’UE et l’Espace Economique Européen
                (EEE), entré en vigueur le 25 Mai 2018. Il traite également du
                transfert de données personnelles en dehors des zones de l’UE et
                de l’EEE.
              </p>
              <p className="m-3">
                <span className="font-bold">
                  Commission Nationale de l’Informatique et des Libertés (CNIL)
                  :
                </span>{" "}
                Organisme de réglementation administratif français indépendant
                dont la mission est de veiller à ce que la loi sur la
                confidentialité des données soit appliquée à la collecte, au
                stockage et à l’utilisation des données personnelles.
              </p>
              <p className="m-3">
                <span className="font-bold">
                  Commission Nationale de Contrôle de la Protection des Données
                  à caractère Personnel (CNDP) :
                </span>{" "}
                Crée en 18 Février 2009. Commission relative à la protection des
                personnes physiques à l’égard du traitement des données à
                caractère personnel. Chargée de vérifier que les traitements des
                données personnelles sont licites, légaux et qu’ils ne portent
                pas atteintes à la vie privée, aux libertés et droits
                fondamentaux de l’homme.
              </p>
              <p className="m-3">
                <span className="font-bold">
                  Agence Nationale de Réglementation des Télécommunications
                  (ANRT) :
                </span>{" "}
                L’ANRT est le régulateur national marocain des
                télécommunications. Elle est placée sous l’autorité du Premier
                ministre.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
