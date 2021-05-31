import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserModel, UsersState } from "../../models/users";
import { RootState, Dispatch } from "../../store";
import { User } from "../user/user";
import { Loader } from "../loader/loader";
import { createNavBar } from "../../services";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

const Content = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Users = (props: any) => {
  const loadingState = useSelector((state: RootState) => state.loading);
  const { users, currentPage, totalPages }: UsersState = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<Dispatch>();

  if (!(props.match.params.page === currentPage)) {
    dispatch.users.setCurrentPage(props.match.params.page);
  }

  useEffect(() => {
    dispatch.users.getUsers(currentPage);
  }, [currentPage]);

  const onClick = (event: any) => {
    dispatch.users.setCurrentPage(event.target.value);
  };

  const userData = (
    <Content>
      {users.map((item: UserModel) => (
        <User user={item} key={item.id} />
      ))}
      <div>{createNavBar(totalPages, onClick)}</div>
    </Content>
  );

  return <>{loadingState.models.users ? <Loader /> : userData}</>;
};
