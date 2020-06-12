import React, { useState } from "react";
import Tab from "components/tab";
import Modal from "components/modal";
export default function Section4() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        {" "}
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
        <div className="w-full lg:w-9/12 px-4">
          <div className="flex flex-row justify-center">
            <h2 className="text-4xl font-bold text-black">
              Nos cartographies des acteurs
            </h2>{" "}
            <svg
              onClick={() => setOpen(true)}
              height="20"
              className="cursor-pointer hover:text-green-400"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z" />
                <path d="m256 368c-8.836 0-16-7.164-16-16 0-40.386 15.727-78.354 44.285-106.912 17.872-17.873 27.715-41.635 27.715-66.911 0-27.668-22.509-50.177-50.177-50.177h-3.646c-27.668 0-50.177 22.509-50.177 50.177v5.823c0 8.836-7.164 16-16 16s-16-7.164-16-16v-5.823c0-45.313 36.864-82.177 82.177-82.177h3.646c45.313 0 82.177 36.864 82.177 82.177 0 33.823-13.171 65.622-37.088 89.539-22.514 22.513-34.912 52.446-34.912 84.284 0 8.836-7.164 16-16 16z" />
                <path d="m256.02 432c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16z" />
              </g>
            </svg>
          </div>

          <Tab color="pink" />
        </div>
      </div>
      <Modal
        show={open}
        close={() => setOpen(false)}
        text={
          <p className="text-justify">
            Nous choisissons de cartographier nos acteurs repérés sur deux
            cartes, sous deux thématiques principales : technique et
            législative.
            <p className="text-justify">
              Chaque cartographie est modélisée par un slider que vous pouvez
              faire glisser pour dévoiler deux facettes superposées. Facette
              Acteurs, dans laquelle nous subdivisons nos acteurs en trois
              grandes catégories :{" "}
            </p>
            <p className="text-justify px-2">
              {" "}
              1- <span className="text-red-500">Douteux et méfiants</span> , par
              rapport à la problématique relative à chaque cartographie.
            </p>
            <p className="text-justify px-2">
              {" "}
              2-{" "}
              <span className="text-blue-500">
                Réalisateurs et prometteurs
              </span>{" "}
              , agissant directement dans le domaine de chaque cartographie.{" "}
            </p>
            <p className="text-justify px-2">
              3- <span className="text-green-500">Collaborateurs</span> ,
              participant en encadrant les réalisateurs pour répondre à la
              problématique de chaque cartographie.
            </p>
            <p className="text-justify">
              Facette Arguments et Problèmes soulevés, que nous repérons pour
              chaque catégorie d'acteurs. Les arguments d'une catégorie ont la
              même couleur de celle-ci.
            </p>
          </p>
        }
        title={"Description du principe de cartographie"}
      />
    </section>
  );
}
