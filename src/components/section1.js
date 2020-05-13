import React from "react";
import Table from "./table";
export default function Tour5() {
  return (
    <section className="pb-20 bg-blue-900 -mt-24 ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-around ">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center  ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Données passives</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h6 className="text-xl font-semibold">Données actives</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center mt-20">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold text-white text-center leading-normal">
              Stockage des donnees
            </h3>

            <p className="text-lg font-light text-center leading-relaxed mt-0 mb-4 text-gray-400">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              Just make sure you enable them first via JavaScript.
            </p>
          </div>

          <div className="break-words bg-transparent  mb-6 shadow-lg rounded-lg  border-4 border-dashed border-gray-400 p-10 ">
            <Table />
          </div>
        </div>
        <div className="flex flex-row items-center justify-around px-4">
          <div className=" flex flex-row justify-between break-words bg-transparent  mb-6 shadow-lg rounded-lg  border-4 border-dashed border-gray-400 p-10 ">
            <div className="w-24 h-24 bg-gray-100  flex text-center items-center shadow-lg rounded m-3">
              <p className="font-bold  "> Employes cluster 1</p>
            </div>
            <div className="w-24 h-24 bg-gray-100 mt-20  flex text-center items-center shadow-lg rounded m-3">
              <p className="font-bold  "> Employes cluster 2</p>
            </div>
            <div className="w-24 h-24 bg-gray-100  flex text-center items-center shadow-lg rounded m-3">
              <p className="font-bold  "> Employes cluster 3</p>
            </div>
          </div>
          <div className=" flex flex-row justify-between break-words bg-transparent  mb-6 shadow-lg rounded-lg  border-4 border-dashed border-gray-400 p-10 ">
            <div className="w-24 h-24 bg-gray-100  flex text-center items-center shadow-lg rounded m-3">
              <p className="font-bold  "> Third parties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
