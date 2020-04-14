import React from "react";

function Card(props) {
  return (
    <div className="max-w-sm md:w-1/2 lg:w-1/4  m-6  rounded-lg overflow-hidden shadow-lg ">
      <img
        className=" w-full "
        src="https://www.educative.io/static/imgs/flip_book.png"
        alt="Display"
      />
      <div className="px-6 py-4  bg-white">
        <div className="font-bold text-xl mb-2">Blessing Krofegha</div>
        <p className="text-gray-700 text-base">
          When i’m not coding i switch to netflix with biscuits and cold tea as
          my companion. <span></span>😜
        </p>
      </div>
      <div className="px-6 py-4  flex  flex-wrap bg-white">
        <span className="inline-block bg-gray-200 rounded-full p-2 m-2 text-sm font-semibold text-gray-700 mr-2">
          #Software Engineer
        </span>
        <span className="inline-block bg-gray-200 rounded-full p-2 m-2 text-sm font-semibold text-gray-700 mr-2">
          #Writter
        </span>
        <span className="inline-block bg-gray-200 rounded-full p-2 m-2 text-sm font-semibold text-gray-700 ">
          #Public Speaker
        </span>
        <span className="inline-block bg-gray-200 rounded-full p-2 m-2 text-sm font-semibold text-gray-700 mr-2">
          #Software Engineer
        </span>
      </div>
    </div>
  );
}

export default Card;
