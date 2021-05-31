import React from "react";
import "./loader.css";
import styled from "@emotion/styled";

const Loading = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <Loading>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Loading>
  );
};
