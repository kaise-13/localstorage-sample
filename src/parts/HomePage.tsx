import React, { FC } from "react";
import { Header } from "./Header";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage: FC = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {}, Object.keys(localStorage));

  return (
    <div>
      <Header />
      {Object.keys(localStorage).map(key => {
        const url = localStorage.getItem(key);
        return (
            <li>{key} : {url}</li>
        )
      })}
      <div>
        <Link to={"/newSite"}>新規サイト登録</Link>
      </div>
    </div>
  );
};
