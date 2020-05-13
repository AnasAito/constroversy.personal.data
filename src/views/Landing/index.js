import React from "react";
import Navbar from "components/navbar.js";
import Section1 from "./section_1";
import Section2 from "./section_2";
import Tour from "./tour";
import Section4 from "./section_4";
import Section5 from "./section_5";
export default function Index() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Section1 />
        <Section2 />
        <Tour />
        <Section4 />
        <Section5 />
      </main>
    </>
  );
}
