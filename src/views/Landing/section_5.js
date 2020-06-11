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
              <p className="text-xl leading-relaxed mt-4 mb-4 text-black text-justify">
                Une telle analyse nous permettra de tirer d'une question
                largement vague des questions bien précis dont on peut
                directement distinguer la controverse .
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal ">
            Les solutions techniques sont-elles capables de protéger l’usage de
            mes données personnelles ?
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 text-justify">
            La question des données personnelles ne peut être totalement cernée
            sans recours à sa composante technique. Les méthodes utilisées pour
            récolter les données à caractère personnel se sont développées pour
            répondre aux besoins des entreprises tierces, lorsque celles qui
            préviennent ces pratiques peinent encore à poser d'innovantes
            barrières. Tout cela pose l'utilisateur lambda devant un dilemme
            technologique inouï .
          </p>

          <Link
            to="/axe/tech"
            className="font-bold text-gray-800 mt-8 inline-flex  shadow-sm cursor-pointer text-blue-500"
          >
            Lire la suite ...
          </Link>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex  rounded-lg flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500">
            <div className="text-md font-light m-10 text-white">
              <h4 className="text-xl font-bold text-white">Contre : </h4>
              <p className="text-md font-light mt-2 text-white">
                - Ridwan Oloyede
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Simons Bright
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Al Massae, BBC Arabia, Assabah (Media)
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
                - Facebook ,Google
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Développeurs et entreprises informatiques
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Producteurs des bases de données
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Chercheurs en technologie de Blockchain
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      {/* next question */}
      <div className=" bg-gray-200 flex flex-wrap items-center mt-32">
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
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
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Les procédures législatives actuelles assurent-elles une protection
            des données personnelles ?
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 text-justify">
            Le droit au respect de la vie privée est un droit humain
            fondamental. La vie privée des individus doit être protégée contre
            toutes les atteintes qui peuvent l’affecter, notamment celles qui
            portent sur leurs informations personnelles.
          </p>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 text-justify">
            Avec le développement croissant des technologies de l’information,
            Internet est devenu un outil incontournable de communication et
            d’échanges en tous genres. La protection de la vie privée et des
            données personnelles est devenue un sujet de préoccupation majeur de
            nos sociétés modernes, est d’une importance indéniable dans cette
            ère numérique, ce qui a engendré une impulsion forte pour promulguer
            et adopter des lois et des textes juridiques par certains
            organismes. Mais la question qui se pose sur l’efficacité de ces
            lois : Les procédures législatives actuelles assurent-elles une
            protection des données personnelles ?
          </p>

          <Link
            to="/axe/legi"
            className="font-bold text-gray-800 mt-8 inline-flex  shadow-sm cursor-pointer text-blue-500"
          >
            Lire la suite ...
          </Link>
        </div>
      </div>
      {/*next  */}
      <div className=" bg-gray-200 flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Le transfert de ces données vers des tierces entités ,doit-il encore
            être autorisé?
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 text-justify">
            Une fois stockées par des prestataires de services, les données
            personnelles, sont souvent traitées et regroupées en employant des
            technologies variantes selon le domaine pour lequel elles sont
            destinées, pour être transmises après à des tierces entités. Ces
            transferts sont souvent justifiés par une volonté d'amélioration de
            l'expérience utilisateur et de personnalisation de contenus.
            Toutefois, d'autres acteurs tels que des spécialistes en digital
            soulignent que ces données peuvent être transmises, même sans la
            conscience et le consentement du sujet, pour des objectifs de
            ciblage, de prospection personnalisée ou même pour des raisons de
            surveillance....
          </p>

          <Link
            to="/axe/tiers"
            className="font-bold text-gray-800 mt-8 inline-flex  shadow-sm cursor-pointer text-blue-500"
          >
            Lire la suite ...
          </Link>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex  rounded-lg flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500">
            <div className="text-md font-light m-10 text-white">
              <h4 className="text-xl font-bold text-white">Contre : </h4>
              <p className="text-md font-light mt-2 text-white">
                - Mallorie Wozny
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Simons Bright
              </p>
              <p className="text-md font-light mt-2 text-white">- DuckDuckGo</p>
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
              <p className="text-md font-light mt-2 text-white">- COHERIS</p>
              <p className="text-md font-light mt-2 text-white">
                - Raymond Onuoha
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Itissalate Al-Maghrib,Médi Telecom et Wana Corporate.
              </p>
              <p className="text-md font-light mt-2 text-white">- Experian</p>
            </blockquote>
          </div>
        </div>
      </div>
      {/*next  */}
      <div className=" bg-gray-200 flex flex-wrap items-center mt-32">
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex  rounded-lg flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500">
            <div className="text-md font-light m-10 text-white">
              <h4 className="text-xl font-bold text-white">Contre : </h4>

              <p className="text-md font-light mt-2 text-white">
                - l’Association Marocaine des Droits Humains
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Comité des Droits de l’Homme et autres
              </p>
              <p className="text-md font-light mt-2 text-white">
                - Media (AL MASSAE , BBC ARABIC ...)
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
                - Gouvernement marocain
              </p>
              <p className="text-md font-light mt-2 text-white">- CNDP</p>
            </blockquote>
          </div>
        </div>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Le gouvernement doit-il décider la collection et l'usage des données
            personnelles ?
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 text-justify">
            Compte tenu de l'autorité et le champs d'actions du gouvernement via
            ces entités ce dernier peut y accéder à des bases volumineux de
            données à caractère personnelles traité et utilisé sous le couvert
            de l'intérêt public .Ou bien elle peut mettre en place des
            technologies permettant l'accès aux données personnelles des
            citoyens sans consentement . Ces actions qui contredit selon
            plusieurs acteurs les principes des législations mise en place pour
            garantir une protection de la vie privées des individus .
          </p>

          <Link
            to="/axe/gouv"
            className="font-bold text-gray-800 mt-8 inline-flex  shadow-sm cursor-pointer text-blue-500"
          >
            Lire la suite
          </Link>
        </div>
      </div>
    </section>
  );
}
