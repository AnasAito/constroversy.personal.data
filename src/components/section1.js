import React, { useState, useRef } from "react";
import Table from "./table";
import Modal from "components/modal";
export default function Tour5() {
  const scrollToRef = ref =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const [entreprise, setEntreprise] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <section className="pb-20 bg-blue-900 -mt-24 ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-around items-center">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center  ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Données passives</h6>
                <p className="mt-2 mb-4 text-gray-600 text-justify">
                  la collecte a lieu en arrière-plan.Par exemple ,si
                  l'utilisateur dispose de ses services de localisation, ces
                  informations de localisation sont un exemple de collecte de
                  données passive
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h6 className="text-xl font-semibold">Données actives</h6>
                <p className="mt-2 mb-4 text-gray-600  text-justify">
                  l'utilisateur est au courant de la collecte de données .Un
                  utilisateur remplissant un formulaire Web est un exemple de
                  collecte de données active. L'utilisateur sait qu'il révélera
                  son identité .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center mt-20">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold text-white text-center leading-normal">
              Donner un sens aux données ...
            </h3>

            <p className="text-lg font-light text-center leading-relaxed mt-0 mb-4 text-gray-400">
              Après la collecte des données, il y a souvent un fort désir pour{" "}
              <span
                className="text-green-400 cursor-pointer font-bold"
                onClick={() => {
                  executeScroll();
                  setEntreprise(true);
                }}
              >
                tout le monde
              </span>{" "}
              dans une organisation ont accès aux données. Avec des données
              largement disponibles. les propriétaires de données doivent
              accorder aux utilisateurs appropriés uniquement l'accès dont ils
              ont besoin pour realiser leur missions .
            </p>
          </div>

          <div
            ref={myRef}
            onClick={() => {
              setTitle(" conservation des données");
              setText(
                "les données ne doivent être conservées que le temps nécessaire pour atteindre l'objectif pour lequel elles ont été collectées et traitées."
              );
              setShow(true);
            }}
            className=" cursor-pointer hover:bg-blue-700 break-words bg-transparent  mb-6 shadow-lg rounded-lg  border-4 border-dashed border-gray-400 p-10 "
          >
            <Table />
          </div>
        </div>
        <div className="flex flex-row items-center justify-around px-4">
          <div
            className={` flex flex-row justify-between break-words bg-transparent  mb-6 shadow-lg rounded-lg  border-4 border-dashed ${
              !entreprise ? "border-gray-400" : "border-green-400"
            } p-10 `}
          >
            <div className="w-24 h-24 bg-gray-100  flex text-center items-center shadow-lg rounded m-3">
              <p className="font-bold  "> Pôle Employés 1</p>
            </div>
            <div className="w-24 h-24 bg-gray-100 mt-20  flex text-center items-center shadow-lg rounded m-3">
              <p className="font-bold  "> Pôle Employés 2</p>
            </div>
            <div className="w-24 h-24 bg-gray-100  flex text-center items-center shadow-lg rounded m-3">
              <p className="font-bold  ">Pôle Employés 3</p>
            </div>
          </div>
          <div
            onClick={() => {
              setTitle("Tiers");
              setText(
                " Une personne physique ou morale, une autorité publique, une agence ou un organisme qui  sous l'autorité directe du responsable du traitement ou l'organisme propriaitaire sont autorisées à traiter des données à caractère personnel"
              );
              setShow(true);
            }}
            className=" hover:bg-red-200 cursor-pointer flex flex-row justify-between break-words bg-transparent  mb-6 shadow-lg rounded-lg  border-4 border-dashed border-gray-400 p-10 "
          >
            <div className="w-24 h-24 bg-gray-100 flex justify-center text-center items-center shadow-lg rounded m-3">
              <p className="font-bold  ">Tiers</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        close={() => setShow(false)}
        text={text}
        title={title}
      />
    </section>
  );
}
