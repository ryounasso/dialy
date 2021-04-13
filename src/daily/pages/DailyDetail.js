import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDailyDetail } from "../api/getDaily";
import marked from "marked";
import { CategoryList } from "../components/CategoryList";
import axios from "axios";
import createHistory from "history/createBrowserHistory";
import { Link } from "react-router-dom";

export const DailyDetail = (props) => {
  const initialState = {
    date: "",
    study: "",
    other: "",
    wanna_do: "",
  };

  const history = createHistory();

  const [detail, setDetail] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getDailyDetail(id)
      .then((d) => {
        setDetail(d);
        setLoading(false);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  const handleDelete = () => {
    axios.delete(`https://daily-rep.herokuapp.com/daily/${id}`);
    history.push("/");
    this.forceUpdate();
  };

  return (
    <>
      <div>
        {loading ? (
          <h1>loading....</h1>
        ) : (
          <div class="ml-8">
            <h1>{detail.date}</h1>
            <h1 class="text-2xl my-4 underline">勉強</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: `${marked(`${detail.study}`)}`,
              }}
              className="detail-content"
            ></div>
            <h1 class="text-2xl my-4 underline">その他</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: `${marked(`${detail.other}`)}`,
              }}
              className="detail-content"
            ></div>
            <h1 class="text-2xl my-4 underline">やりたいこと</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: `${marked(`${detail.wanna_do}`)}`,
              }}
              className="detail-content"
            ></div>
          </div>
        )}
        {/* <CategoryList /> */}
        <form onSubmit={handleDelete}>
          <button
            type="danger"
            type="submit"
            class="p-4 bg-red-500 rounded-lg mt-8 ml-8 text-white"
          >
            削除
          </button>
        </form>
      </div>
      <div class="mt-4 p-8 bg-gray-50">
        <Link class="p-4 bg-blue-300 rounded-lg text-white" to="/daily">
          日報一覧に戻る
        </Link>
      </div>
    </>
  );
};
