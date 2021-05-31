import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const createNavBar = (quantity: number, handler: any) => {
  const pages = [];
  for (let i = 1; i <= quantity; i++) {
    pages.push(i);
  }
  return pages.map((number: number) => (
    <Link to={"/users/" + number} key={number}>
      <input type="button" onClick={handler} value={number}></input>
    </Link>
  ));
};

export const serverRequest = async (url: string, page: number) => {
  return await axios.get(url, {
    params: { page },
  });
};
