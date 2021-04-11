import React, { useState, useEffect } from "react";
import "../../tailwind.css";
import axios from "axios";

export const CustomForm = (props) => {
  const { requestType, dailyId, btnText } = props;

  const handleFormsubmit = (event, requestType, dailyId) => {
    const date = event.target.elements.date.value;
    const study = event.target.elements.study.value;
    const others = event.target.elements.others.value;
    const want = event.target.elements.wanttodo.value;
    let evaluation;
    if (event.target.elements.evaluation.value === "good") {
      evaluation = 1;
    } else {
      evaluation = 2;
    }

    axios
      .post("http://localhost:8000/daily/", {
        date: date,
        study: study,
        other: others,
        wanna_do: want,
        evaluation: evaluation,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <form
      className="w-full max-w-lg"
      id="createDaily"
      onSubmit={(event) => handleFormsubmit(event, requestType, dailyId)}
    >
      {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          DATE
        </label>
        <input
          name="date"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="date"
          placeholder="Jane"
        />
      </div>
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
          for="grid-last-name"
        >
          Study
        </label>
        <input
          name="study"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="勉強したこと"
        />
      </div>
      {/* </div> */}
      {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Others
        </label>
        <input
          name="others"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="text"
          placeholder="その他気づいたこと"
        />
      </div>
      <div class="w-full px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          WANT TO DO
        </label>
        <input
          name="wanttodo"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          placeholder="今後やりたいこと"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          Evaluation
        </label>
        <div class="relative">
          <select
            name="evaluation"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>good</option>
            <option>bad</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <button
        class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
        type="submit"
        form="createDaily"
      >
        {btnText}
      </button>
      {/* </div> */}
    </form>
  );
};
