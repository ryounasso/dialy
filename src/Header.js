import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div class="container mx-auto flex bg-gray-50">
        <Link class="p-4 bg-yellow-100" to="/">
          Top
        </Link>
      </div>
      <div class="flex py-8 bg-gray-50 justify-center text-3xl">
        <div>日報</div>
      </div>
    </>
  );
};
