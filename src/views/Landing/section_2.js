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
        Fact about data
      </h3>

      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
        in this part explain chart and put weight on data subject to show reader
        that its worth it <p className="text-black">(should change this )</p>
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

      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
        in this part explain chart and put weight on data subject to show reader
        that its worth it
        <p className="text-black">(should change this )</p>
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
              title="4,1 milliards"
              content="nombre d'enregistrements de données compromis au cours des six premiers mois de 2019 seulement"
            />
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <Card
              title="4,1 milliards"
              content="nombre d'enregistrements de données compromis au cours des six premiers mois de 2019 seulement"
            />
          </div>
        </div>

        <GraphWithText />
        <GraphWithText2 />
      </div>
    </section>
  );
}
