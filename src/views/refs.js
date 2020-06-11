import React from "react";
import Navbar from "components/navbar.js";
export default function Refs() {
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
                <h2 className="text-4xl font-semibold">Nos Sources</h2>
              </div>
            </div>
            <div className="text-justify">
              <p className=" ml-3 font-medium text-xl text-red-400">Sites : </p>
              <p>
                <span className="font-bold ">
                  2020 is a crucial year to fight for data protection in Africa
                </span>
                , Giacomo Zandonini, Privacy International,
                <a
                  href="https://privacyinternational.org/"
                  className="text-blue-600 underline"
                >
                  https://privacyinternational.org/
                </a>
                , 03/03/2020.
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  [RGPD] Où sont stockées vos données ? Le Cloud pour les nuls{" "}
                </span>{" "}
                , Guillume Lecanou, Koban, Koban LE BLOG,
                <a
                  href="https://privacyinternational.org/"
                  className="text-blue-600 underline"
                >
                  https://www.koban.cloud/le_blog/
                </a>
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  Les enjeux de la data de la personnalisation de l’expérience
                  client
                </span>
                , Romuald Cetkovic, LEMONDE INFORMATIQUE,
                <a
                  href="  https://www.lemondeinformatique.fr/"
                  className="text-blue-600 underline"
                >
                  https://www.lemondeinformatique.fr/
                </a>
                , 21/03/2019.
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  COMMENT LE DATA MINING PERMET-IL D’AMELIORER L’EXPERIENCE
                  CLIENT ?{" "}
                </span>
                , COHERIS, Intelligence Artificielle & Analytique – Actus &
                solutions logicielles,{" "}
                <a
                  href="https://ia-data-analytics.fr/"
                  className="text-blue-600 underline"
                >
                  {" "}
                  https://ia-data-analytics.fr/
                </a>
                , 09/01/2020.
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  La CNDP, l’ANRT et les opérateurs télécoms discutent de la
                  prospection commerciale directe pas SMS{" "}
                </span>
                , CNDP,{" "}
                <a
                  href=" https://www.cndp.ma/fr/"
                  className="text-blue-600 underline"
                >
                  https://www.cndp.ma/fr/
                </a>
                , 23/04/2019.
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  {" "}
                  DE BLOCKCHAIN À HOLOCHAIN : VERS UNE DÉCENTRALISATION COMPLÈTE
                  D’INTERNET ?{" "}
                </span>
                , Chadi El Adnani, ALUMNEYE,
                <a
                  href=" https://www.alumneye.fr/de-blockchain-a-holochain-vers-une-decentralisation-complete-dinternet/"
                  className="text-blue-600 underline"
                >
                  https://www.alumneye.fr/de-blockchain-a-holochain-vers-une-decentralisation-complete-dinternet/,
                </a>
                05/06/2020.
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  Part 3 : Data Protection Principles, Privacy International
                </span>
                ,
                <a
                  href=" https://privacyinternational.org/sites/default/files/2018-09/Data%20Protection%20COMPLETE.pdf"
                  className="text-blue-600 underline"
                >
                  https://privacyinternational.org/sites/default/files/2018-09/Data%20Protection%20COMPLETE.pdf
                </a>
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  Le règlement général sur la protection des données
                </span>
                , Parlement européen et du Conseil ,
                <a
                  href="  https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
                  className="text-blue-600 underline"
                >
                  https://www.cnil.fr/fr/reglement-europeen-protection-donnees
                </a>
                23/05/2018.
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  Protection des données personnelles : Le Maroc veut s’aligner
                  sur le modèle europée
                </span>
                , Souhir Benkirane,
                <a
                  href="  https://lematin.ma/journal/2019/protection-donnees-personnelles-maroc-veut-saligner-mode-europe/317616.html"
                  className="text-blue-600 underline"
                >
                  https://lematin.ma/journal/2019/protection-donnees-personnelles-maroc-veut-saligner-mode-europe/317616.html
                </a>
                , 13/06/2019.
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  Communication from the Commission to the European Parliament
                  and the Council Data protection rules as a trust-enabler in
                  the EU and beyond
                </span>
                , commission européenne,{" "}
                <a
                  href=" https://ec.europa.eu/"
                  className="text-blue-600 underline"
                >
                  {" "}
                  https://ec.europa.eu/
                </a>{" "}
                . 24/07/2019
              </p>

              <p className="my-2">
                <span className="font-bold ">
                  Utilisation des données personnelles : pourquoi ce n’est qu’un
                  début
                </span>
                , Alain Giguère , L’actualité, :{" "}
                <a
                  href="  https://lactualite.com/"
                  className="text-blue-600 underline"
                >
                  {" "}
                  https://lactualite.com/{" "}
                </a>
                , 29/0/.2019{" "}
              </p>

              <p className="my-2">
                <span className="font-bold ">
                  Protection des données personnelles et TIC au cœur des enjeux
                  de société et de la mondialisation : les mécanismes d’un
                  contrôle distribué
                </span>{" "}
                , Brigitte Juanals, journals.openedition.org,
                <a
                  href="   https://journals.openedition.org/"
                  className="text-blue-600 underline"
                >
                  {" "}
                  https://journals.openedition.org/{" "}
                </a>
                , N 1-2 2014
              </p>

              <p className="my-2">
                <span className="font-bold ">
                  Revealed: 50 million Facebook profiles harvested for Cambridge
                  Analytica in major data breach
                </span>{" "}
                , Carole Cadwalladr & Emma Graham-Harrison , TheGuardian,
                <a
                  href=" https://www.theguardian.com"
                  className="text-blue-600 underline"
                >
                  {" "}
                  https://www.theguardian.com
                </a>
                , 17.03.2018{" "}
              </p>
              <p className=" ml-3 font-medium text-xl text-red-400">
                livres :{" "}
              </p>
              <p className="my-2">
                <span className="font-bold ">
                  Mémoire Exploitation des données personnelles : raison
                  commerciale
                </span>
                , raison d’état et opportunités, Université de Lyon. Août 2017,
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
