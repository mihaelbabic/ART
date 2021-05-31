import React from "react";

function Kucica(props) {
  return (
    <div classname="haus" key={props.key}>
      <img src={props.data.Image} alt="cekaj malo" />
      {props.data.Name +
        ", " +
        props.data.Artist +
        ", " +
        props.data.year +
        ", " +
        props.data.price}
    </div>
  );
}

export default Kucica;
