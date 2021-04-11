import React from "react";
import { Link } from "react-router-dom";
import "./tailwind.css";

export const Top = () => {
  return (
    <>
      <div class="flex py-8 bg-gray-50 justify-center">
        <div>日報を共有して、新たな発見に出会う</div>
      </div>
      <div class="flex py-8 bg-gray-50 justify-center">
        <Link class="p-4 bg-blue-300 rounded-lg" to="/daily">
          日報を見る
        </Link>
      </div>
    </>
  );
};
