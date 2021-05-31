import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserModel, UsersState } from "../../models/users";
import { RootState, Dispatch } from "../../store";
import { User } from "../user/user";
import { Loader } from "../loader/loader";
import { createNavBar } from "../../services";
import { withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

const Content = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Users = (props: any) => {
  const loadingState = useSelector((state: RootState) => state.loading);
  const { users, current_page, total_pages }: UsersState = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.users.getUsers(current_page);
  }, [current_page]);

  const onClick = (event: any) => {
    dispatch.users.setCurrentPage(event.target.value);
  };

  // dispatch.users.setCurrentPage(props.match.params.id);
  // dispatch.users.setCurrentPage(props.location.search);

  const userData = () => {
    return (
      <Content>
        {users.map((item: UserModel) => (
          <User user={item} key={item.id} />
        ))}
        <div>{createNavBar(total_pages, onClick)}</div>
      </Content>
    );
  };

  return <>{loadingState.models.users ? <Loader /> : userData()}</>;
};

export default withRouter(Users);
