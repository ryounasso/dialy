import React from "react";
import { Link } from "react-router-dom";
import "./tailwind.css";

import bird from "./images/daily/Top.webp";

export const Top = () => {
  return (
    <>
      <div class="grid grid-cols-5">
        <div class="col-span-3 text-center flex items-center justify-center">
          <Link class="p-4 bg-blue-300 rounded-lg  " to="/daily">
            日報を見る
          </Link>
        </div>
        <div class="float-right">
          <img src={bird} alt="imgaes" />
        </div>
      </div>
    </>
  );
};
