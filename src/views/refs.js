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
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
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
                <h2 className="text-4xl font-semibold">Ressources</h2>
              </div>
            </div>
            <p>Sites : </p>

            <p>
              <span>
                {" "}
                2020 is a crucial year to fight for data protection in Africa
              </span>{" "}
              , Giacomo Zandonini, Privacy International,
              <span>https://privacyinternational.org/</span>, 03/03/2020.
            </p>
            <p>
              <span>
                {" "}
                [RGPD] Où sont stockées vos données ? Le Cloud pour les nuls{" "}
              </span>{" "}
              , Guillume Lecanou, Koban, Koban LE BLOG,
              https://www.koban.cloud/le_blog/
            </p>
            <p>
              <span>
                {" "}
                Les enjeux de la data de la personnalisation de l’expérience
                client
              </span>{" "}
              , Romuald Cetkovic, LEMONDE INFORMATIQUE,
              https://www.lemondeinformatique.fr/, 21/03/2019.
            </p>
            <p>
              <span>
                COMMENT LE DATA MINING PERMET-IL D’AMELIORER L’EXPERIENCE CLIENT
                ?{" "}
              </span>
              , COHERIS, Intelligence Artificielle & Analytique – Actus &
              solutions logicielles, https://ia-data-analytics.fr/, 09/01/2020.
            </p>
            <p>
              <span>
                {" "}
                La CNDP, l’ANRT et les opérateurs télécoms discutent de la
                prospection commerciale directe pas SMS{" "}
              </span>
              , CNDP, https://www.cndp.ma/fr/, 23/04/2019.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
