import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../images/daily/sign.png";
import img2 from "../../images/daily/sign.png";
import img3 from "../../images/daily/bad.png";
import img4 from "../../images/daily/DSC02474.png";

import "../../tailwind.css";

export const DailyContent = (daily) => {
  let eva;
  if (daily.evaluation === "perfect") {
    eva = img1;
  } else if (daily.evaluation === 1) {
    eva = img2;
  } else if (daily.evaluation === 2) {
    eva = img3;
  } else {
    eva = img4;
  }

  return (
    <div class="flex flex-wrap p-8">
      <div class="w-full md:w-1/10">
        <Link to={`daily/${daily.id}`}>
          {" "}
          <h1>{daily.date}</h1>{" "}
        </Link>
        <img src={eva} />
      </div>
    </div>
  );
};
