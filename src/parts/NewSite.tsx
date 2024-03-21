import React, { FC } from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";
import './newSite.scss';

export const NewSite: FC = () => {
  const navigate = useNavigate();
  const [siteName, setSiteName] = useState("");
  const [url, setUrl] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const handleSiteNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSiteName(e.target.value);
  const handleUrlOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(e.target.value);
  const saveWebPage = () => {
    localStorage.setItem(siteName, url);
    if (!(siteName === "" && url === "")) {
      if (siteName === "") {
        setErrorMessage1("サイト名が入力されていません");
      }
      if (url === "") {
        setErrorMessage2("urlが入力されていません");
      }
    }
    navigate('/');
  };

  return (
    <div>
      <Header />
      <main>
        <span>{errorMessage1}</span>
        <br />
        <span>{errorMessage2}</span>
        <div>
          <label>サイト名</label>
          <br />
          <input type="text" onChange={handleSiteNameOnChange} />
          <br />
          <label>URL</label>
          <br />
          <input type="text" onChange={handleUrlOnChange} />
          <br />
          <button onClick={saveWebPage}>webページ保存</button>
        </div>
        <div className="link">
          <Link to={"/"}>ホーム</Link>
        </div>
      </main>
    </div>
  );
};
