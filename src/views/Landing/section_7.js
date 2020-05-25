import React from "react";

import TableInter from "components/table_inter";
export default function Section5() {
  return (
    <section className="relative py-20 bg-gray-200">
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

      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-9/12 px-4">
          <h2 className="text-4xl font-bold text-black">Nos Interviews</h2>
        </div>
      </div>
      <div className=" m-20 ">
        <TableInter />
      </div>
    </section>
  );
}
