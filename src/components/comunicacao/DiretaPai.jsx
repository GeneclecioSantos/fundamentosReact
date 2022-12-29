import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Filho 1" idade={20} nerd={true} />
      <DiretaFilho nome="Filho 1" idade={20} nerd={false} />
    </div>
  );
};
