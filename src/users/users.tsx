import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserModel } from "../models/users";
import { RootState, Dispatch } from "../store";
import { User } from "../user/user";
import { Loader } from "../loader/loader";

export const Users = () => {
  const loadingState = useSelector((state: RootState) => state.loading);
  const {
    users,
    current_page,
    total_pages,
  }: { users: UserModel[]; current_page: number; total_pages: number } =
    useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.users.getUsers(current_page);
  }, [current_page]);

  const onClick = (event: any) => {
    dispatch.users.setCurrentPage(event.target.value);
  };

  const createNavBar = (quantity: number) => {
    const pages = [];
    for (let i = 1; i <= quantity; i++) {
      pages.push(i);
    }
    console.log(pages, quantity);
    return pages.map((number: number) => (
      <input type="button" onClick={onClick} value={number}></input>
    ));
  };

  const userData = () => {
    return (
      <>
        {users.map((item: UserModel) => (
          <User user={item} />
        ))}
        {createNavBar(total_pages)}
      </>
    );
  };

  return <>{loadingState.models.users ? <Loader /> : userData()}</>;
};
