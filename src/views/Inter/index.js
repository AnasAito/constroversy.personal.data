import React, { useEffect } from "react";
import View from "./view.js";
import { data } from "./data";
export default function Index(props) {
  console.log(props.match.params.id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <View
      inter={data[props.match.params.id].content}
      title={data[props.match.params.id].title}
      subTitle={data[props.match.params.id].subTitle}
    />
  );
}
