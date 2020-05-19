import React from "react";
import BarChart from "components/barChart";
import LineChart from "components/lineChart";
const Card = ({ title, content }) => (
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
    <div className="px-4 py-5 flex-auto">
      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
        <i className="fas fa-fingerprint"></i>
      </div>
      <h6 className="text-xl font-semibold">{title}</h6>
      <p className="mt-2 mb-4 text-gray-600">{content}</p>
    </div>
  </div>
);
const GraphWithText = () => (
  <div className="flex flex-wrap items-center justify-between mt-10">
    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Les données personelles : une Source de convoitise
      </h3>

      <p className="text-justify text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
        Les données personnelles correspondent à toute information relative à
        une personne physique identifiée ou qui peut être identifiée,
        directement ou indirectement, par référence à un numéro d’identification
        ou à un ou plusieurs éléments qui lui sont propres. Aujourd’hui, la
        problématique de la protection des données personnelles est plus que
        jamais d’actualité.
      </p>
      <p className="text-justify text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
        {" "}
        Les données personnelles constituent une ressource précieuse pour les
        entreprises. Source de convoitise, elles circulent et se monnayent entre
        les différents acteurs de la vie économique. Mais à l’ère du numérique,
        elles sont malheureusement aussi l’objet de mauvais traitements et de
        nombreux détournements à l’insu des personnes dont elles émanent. Ainsi,
        tandis que le volume de données à caractère personnel explose avec le
        développement du numérique, le périmètre de la vie privée tend en retour
        à s’amenuiser et devenir une ressource rare
      </p>
    </div>

    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <BarChart />
    </div>
  </div>
);
const GraphWithText2 = () => (
  <div className="flex flex-wrap items-center justify-between mt-10">
    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <LineChart />
    </div>
    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Fact about data
      </h3>

      <p className="text-justify  text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
        La protection de la vie privée est un droit fondamental garanti par la
        Déclaration universelle des droits de l’Homme. Dans une société
        démocratique, la vie privée est essentielle à la mise en œuvre d’autres
        droits fondamentaux, tels que les droits d’expression ou d’association.
        Or, de nombreux acteurs ont aujourd’hui intérêt à voir assouplie la
        protection de ce droit fondamental, afin d’augmenter la surveillance des
        citoyens ou de tirer profit des informations les concernant, par leur
        collecte, leur traitement, leur stockage et leur commerce.
      </p>
      <p className="text-justify text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
        Ces pratiques, dangereuses pour nos libertés en ligne et hors ligne,
        sont particulièrement répandues sur Internet. C’est pour cette raison
        qu’il est aujourd’hui crucial de poser le débat de la protection des
        données personnelles afin de garantir une meilleure utilisation de
        l’internet dans le respect des droits de tout un chacun.
      </p>
    </div>
  </div>
);
export default function Section2() {
  return (
    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <Card
              title="4,1 milliards"
              content="nombre d'enregistrements de données compromis au cours des six premiers mois de 2019 seulement"
            />
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <Card
              title="
              534 465"
              content="nombre de fichiers contenant des données sensibles dans l'entreprise courante"
            />
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <Card
              title="45%"
              content="
               Part des utilisateurs qui ont déclaré que leur informations personnelles avaient été compromises au moins une fois au cours des cinq dernières années"
            />
          </div>
        </div>

        <GraphWithText />
        <GraphWithText2 />
      </div>
    </section>
  );
}
