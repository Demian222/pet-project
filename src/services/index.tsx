import React from "react";
import axios from "axios";

export const createNavBar = (quantity: number, handler: any) => {
  const pages = [];
  for (let i = 1; i <= quantity; i++) {
    pages.push(i);
  }
  console.log(pages, quantity);
  return pages.map((number: number) => (
    <input type="button" onClick={handler} value={number}></input>
  ));
};

export const serverRequest = async (url: string, page: number) => {
  return await axios.get(url, {
    params: { page },
  });
};
