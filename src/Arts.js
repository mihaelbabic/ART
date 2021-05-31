import React from 'react'

import Kucica from "./kucica"
import { Paintings } from "./umjetnine";

export const Arts = () => {
    return (
      <>
        <div className="stock-container">
        {Paintings.map((data, key) => {
          return (
            <Kucica key={key} data={data}/>
          );
        })}
      </div>
      </>
    );
  };