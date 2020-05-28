import React from "react";
import actors_t from "../views/Landing/assets/actors_t.png";
import args_t from "../views/Landing/assets/args_t.png";

import Nav from "./nav";
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";
export default function Tab({ color }) {
  const [openTab, setOpenTab] = React.useState(0);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 0
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(0);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Carte technique
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Carte
                legislative
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 0 ? "block" : "hidden"} id="link2">
                  <Nav />
                  <ReactCompareSlider
                    itemTwo={<ReactCompareSliderImage src={actors_t} />}
                    itemOne={<ReactCompareSliderImage src={args_t} />}
                  />
                </div>
                <div className={openTab === 1 ? "block" : "hidden"} id="link3">
                  <p>Protection legislative des données personnelles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
