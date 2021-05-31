import React from "react";
import { Users } from "../users/users";
import icon from "./icon.png";
import { Link, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

const Header = styled.header`
  background-color: #ffa600;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Footer = styled.footer`
  height: 40px;
  background-color: #ffa600;
  margin-top: 10px;
`;

export const App = () => {
  return (
    <>
      <Header>
        <Link to="/users/1">
          <img src={icon} height="80" width="80"></img>
        </Link>
        <Link to="/users/1">Пользователи</Link>
        <Link to="/todos">Задачи</Link>
        <Link to="/">Demian</Link>
      </Header>
      <Switch>
        <Route exact path="/">
          <h2>home</h2>
        </Route>
        <Route path="/users/:page" component={Users} />
        <Route path="/todos">
          <h2>todos</h2>
        </Route>
      </Switch>
      <Footer></Footer>
    </>
  );
};
