import React, { useEffect } from "react";
import { data } from "./data";
import View from "./view";
export default function Index(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <View
      title={data[props.match.params.id].title}
      content={data[props.match.params.id].content}
    />
  );
}
