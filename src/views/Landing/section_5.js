import React from "react";
import { Link } from "react-router-dom";
export default function Section5() {
  return (
    <section className="relative py-20  bg-gray-200">
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
            className="text-gray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className=" bg-gray-200 flex flex-wrap items-center ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <p className="text-xl leading-relaxed mt-4 mb-4 text-black">
                Une tel analyse nous permetra de tirer dune question largemant
                vague des question bien precis dont on peut directemet
                distinguer la controverse .
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            The message is clear: lower your data security risk profile. If you
            don’t need data, delete it. The less data you have, the less
            damaging a breach will be.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            If it’s sensitive, make sure it’s only accessible to those who need
            it. Old and stale files are expensive and risky, which is why we
            have retention policies and software solutions such as Varonis Data
            Transport Engine – which helps archive, quarantine, and delete stale
            (and regulated) data.
            <p className="text-black font-bold">
              (should be replaced with abstract about the studied part)
            </p>
          </p>

          <Link to="/axe" className="font-bold text-gray-800 mt-8">
            Lire la suite ...
          </Link>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <p className="text-xl font-bold text-center">Actors</p>
          <div className="relative flex  rounded-lg flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500">
            <div className="text-md font-light m-10 text-white">
              <h4 className="text-xl font-bold text-white">Contre : </h4>
              <p className="text-md font-light mt-2 text-white">
                - Commission Nationale de Contrôle de Protection des Données à
                Caractère Personnel (Cndp)
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
            </div>
            <blockquote className="relative p-8  bg-green-300">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px"
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-green-300 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">Pour : </h4>
              <p className="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      {/* next question */}
      <div className=" bg-gray-200 flex flex-wrap items-center mt-32">
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <p className="text-xl font-bold text-center">Actors</p>
          <div className="relative flex  rounded-lg flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500">
            <div className="text-md font-light m-10 text-white">
              <h4 className="text-xl font-bold text-white">Contre : </h4>

              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
            </div>
            <blockquote className="relative p-8  bg-green-300">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px"
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-green-300 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">Pour : </h4>
              <p className="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
            </blockquote>
          </div>
        </div>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            The message is clear: lower your data security risk profile. If you
            don’t need data, delete it. The less data you have, the less
            damaging a breach will be.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            If it’s sensitive, make sure it’s only accessible to those who need
            it. Old and stale files are expensive and risky, which is why we
            have retention policies and software solutions such as Varonis Data
            Transport Engine – which helps archive, quarantine, and delete stale
            (and regulated) data.
            <p className="text-black font-bold">
              (should be replaced with abstract about the studied part)
            </p>
          </p>
          <button className="font-bold text-gray-800 mt-8">
            Lire la suite ...
          </button>
        </div>
      </div>
      {/*next  */}
      <div className=" bg-gray-200 flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            The message is clear: lower your data security risk profile. If you
            don’t need data, delete it. The less data you have, the less
            damaging a breach will be.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            If it’s sensitive, make sure it’s only accessible to those who need
            it. Old and stale files are expensive and risky, which is why we
            have retention policies and software solutions such as Varonis Data
            Transport Engine – which helps archive, quarantine, and delete stale
            (and regulated) data.
            <p className="text-black font-bold">
              (should be replaced with abstract about the studied part)
            </p>
          </p>
          <button className="font-bold text-gray-800 mt-8">
            Lire la suite ...
          </button>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <p className="text-xl font-bold text-center">Actors</p>
          <div className="relative flex  rounded-lg flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500">
            <div className="text-md font-light m-10 text-white">
              <h4 className="text-xl font-bold text-white">Contre : </h4>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
            </div>
            <blockquote className="relative p-8  bg-green-300">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px"
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-green-300 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">Pour : </h4>
              <p className="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      {/*next  */}
      <div className=" bg-gray-200 flex flex-wrap items-center mt-32">
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <p className="text-xl font-bold text-center">Actors</p>
          <div className="relative flex  rounded-lg flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500">
            <div className="text-md font-light m-10 text-white">
              <h4 className="text-xl font-bold text-white">Contre : </h4>

              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
            </div>
            <blockquote className="relative p-8  bg-green-300">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px"
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-green-300 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">Pour : </h4>
              <p className="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
              <p className="text-md font-light mt-2 text-white">
                - The Arctic Ocean freezes
              </p>
            </blockquote>
          </div>
        </div>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            The message is clear: lower your data security risk profile. If you
            don’t need data, delete it. The less data you have, the less
            damaging a breach will be.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            If it’s sensitive, make sure it’s only accessible to those who need
            it. Old and stale files are expensive and risky, which is why we
            have retention policies and software solutions such as Varonis Data
            Transport Engine – which helps archive, quarantine, and delete stale
            (and regulated) data.
            <p className="text-black font-bold">
              ( should be replaced with abstract about the studied part)
            </p>
          </p>
          <button className="font-bold text-gray-800 mt-8">
            Lire la suite ...
          </button>
        </div>
      </div>
    </section>
  );
}
