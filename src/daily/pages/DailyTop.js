import React, { useState, useEffect } from "react";
import { getDaily } from "../api/getDaily";
import { DailyContent } from "../components/DailyContent";
import { CategoryList } from "../components/CategoryList";
import { CustomForm } from "../components/CustomForm";
import "../../tailwind.css";

export const DailyTop = () => {
  const initialState = {
    id: "",
    date: "",
    evaluation: "",
  };

  const [daily, setDaily] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDaily()
      .then((d) => {
        setDaily(d);
        setLoading(false);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div class="container mx-auto flex flex-wrap p-8">
          {daily.map((d) => (
            <DailyContent {...d} />
          ))}
        </div>
      )}
      <div>
        <p class="mt-12 text-2xl">日報作成</p>
        <br />
        <CustomForm requestType="post" dailyId={null} btnText="Create" />
      </div>
    </div>
  );
};
