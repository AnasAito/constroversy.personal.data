import React, { useState } from "react";
import Modal from "components/modal";
export default function Tour1() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="pb-20 relative block bg-blue-700 ">
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
              className="text-blue-700   fill-current  "
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="flex flex-col  p-8">
          <div className="flex flex-row items-center m-4 justify-start">
            <div className="flex h-16 w-16 bg-blue-100 rounded-full mr-4"></div>
            <p className="text-xl leading-relaxed mt-4 mb-4 text-white">
              Les solutions techniques sont-elles capables de protéger l’usage
              de mes données personnelles ?
            </p>
          </div>
          <div className="flex flex-row items-center m-4 justify-end">
            <div className="flex h-16 w-16 bg-blue-100 rounded-full mr-4"></div>
            <p className="text-xl leading-relaxed mt-4 mb-4 text-white">
              Les solutions techniques sont-elles capables de protéger l’usage
              de mes données personnelles ?
            </p>
          </div>
          <div className="flex flex-row items-center m-4 justify-start">
            <div className="flex h-16 w-16 bg-blue-100 rounded-full mr-4"></div>
            <p className="text-xl leading-relaxed mt-4 mb-4 text-white">
              Les solutions techniques sont-elles capables de protéger l’usage
              de mes données personnelles ?
            </p>
          </div>
          <div className="flex flex-row items-center m-4 justify-end">
            <div className="flex h-16 w-16 bg-blue-100 rounded-full mr-4"></div>
            <p className="text-xl leading-relaxed mt-4 mb-4 text-white">
              Les solutions techniques sont-elles capables de protéger l’usage
              de mes données personnelles ?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
