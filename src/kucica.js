import React from "react";

function Kucica(props) {
  return (
    <div id="haus" key={props.key}>
      <img src={props.data.Image} alt="" />
      <br />
      <div id="haus3">
        {props.data.Artist}
        <br />
        {props.data.Name}
        <br />
        {props.data.year}
        <br />
        {props.data.price}
        <br />
        <button type="button">Kupi</button>
      </div>
    </div>
  );
}

export default Kucica;
