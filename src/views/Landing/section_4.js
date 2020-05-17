import React from "react";

export default function Section4() {
  return (
    <section className="relative py-20">
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-black">
            what is the controversy then ?
          </h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            t’s not only the EU that takes this IT procedure seriously. Data
            retention limits also show up in the US’s HIPAA rules for personal
            health data and in some financial data security regulations. Data
            retention limits—measured in years—define the amount of time an
            electronic document must be kept.{" "}
            <p className="text-black">
              (should be replaced with a abstract about the controversy and
              question then been extracted)
            </p>
          </p>
        </div>
      </div>
      <div className="flex flex-col  p-8">
        <div className="flex flex-row items-center m-4 justify-start">
          <div className="flex h-16 w-16 bg-red-300 rounded-full mr-4"></div>
          <p>
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </p>
        </div>
        <div className="flex flex-row items-center m-4 justify-end">
          <div className="flex h-16 w-16 bg-red-300 rounded-full mr-4"></div>
          <p>
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </p>
        </div>
        <div className="flex flex-row items-center m-4 justify-start">
          <div className="flex h-16 w-16 bg-red-300 rounded-full mr-4"></div>
          <p>
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </p>
        </div>
        <div className="flex flex-row items-center m-4 justify-end">
          <div className="flex h-16 w-16 bg-red-300 rounded-full mr-4"></div>
          <p>
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </p>
        </div>
      </div>
    </section>
  );
}
