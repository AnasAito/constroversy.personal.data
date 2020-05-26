import React from "react";
import cycle from "./assets/cycle.png";
const Card = ({ title, content }) => (
  <div className=" bg-gray-200 relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
    <div className="px-4 py-5 flex-auto">
      <h6 className="text-xl font-semibold">{title}</h6>
      <p className="mt-2 mb-4 text-gray-600">{content}</p>
    </div>
  </div>
);
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
        <div className="w-full lg:w-9/12 px-4">
          <h2 className="text-4xl font-bold text-black">
            Quelle est la controverse alors ?
          </h2>
          <p className="text-lg text-justify leading-relaxed mt-4 mb-4 text-gray-700">
            Avant qu'on puisse répondre a notre question sur la possibilité de
            protection il faut comprendre en premier pourquoi une telle question
             existe : est qu'il surgit des pratiques des acteurs agissant sur
            ces données personnelles ? Quelles sont ces acteurs ? Sont ils les
            seuls acteurs dont les actions doivent se mettre en question ? Une
            réponse a  ces questions nécessité une observation du cycle de vie
            des données  personnelle étant le milieu ou nos acteurs qu'on
            définira peuvent affecter.
          </p>
          <img src={cycle} />

          <p className="text-lg text-justify leading-relaxed mt-4 mb-4 text-gray-700">
            En observant le schémas ci-dessous on peut distinguer les acteur
            agissant directement sur les données personnelles
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className=" pt-6 w-full md:w-4/12 px-4 text-center">
          <Card
            title="propriataire de donnees "
            content="nombre d'enregistrements de données compromis au cours des six premiers mois de 2019 seulement"
          />
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <Card
            title="
            service provider"
            content="nombre de fichiers contenant des données sensibles dans l'entreprise courante"
          />
        </div>

        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
          <Card
            title="Tiers"
            content="
               Part des utilisateurs qui ont déclaré que leur informations personnelles avaient été compromises au moins une fois au cours des cinq dernières années"
          />
        </div>
      </div>

      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-9/12 px-4">
          <p className="text-lg text-justify leading-relaxed mt-4 mb-4 text-gray-700">
            Suivant notre intuition d'ingénieur on a vu que la deuxième étape
            après avoir définis nos acteur et de distinguer quelques point
            critique de notre système. Qu'on les classe en deux types
          </p>
        </div>
      </div>
    </section>
  );
}
