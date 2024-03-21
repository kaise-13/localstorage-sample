import React, { FC } from "react";
import { Header } from "./Header";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './homePage.scss'

export const HomePage: FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {}, Object.keys(localStorage));

  return (
    <div>
      <Header />
      <table className="design01">
        <tr>
          <th>サイト名</th>
          <th>URL</th>
        </tr>
        {Object.keys(localStorage).map((key) => {
          const url = localStorage.getItem(key);
          return (
            <tr>
              <td>{key}</td>
              <td><a href={"" + url}>{url}</a></td>
            </tr>
          );
        })}
      </table>
      <div className="link">
        <Link to={"/newSite"}>新規サイト登録</Link>
      </div>
    </div>
  );
};
