import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersState } from "../../models/users";
import { RootState, Dispatch } from "../../models/store";
import { UserCard } from "../userCard/userCard";
import { Loader } from "../loader/loader";
import { createNavBar } from "./createList";
import styled from "@emotion/styled";
import { ModalWindow } from "../modalWindow/modalWindow";
import { useModal } from "./customHooks";

const Content = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const UsersList = (props: any) => {
  const loadingState = useSelector((state: RootState) => state.loading);
  const { users, currentPage, totalPages }: UsersState = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<Dispatch>();
  const { openModal, closeModal, isOpen, Modal } = useModal();

  const [currentUserIndex, setCurrentUserIndex] = useState(-1);

  if (props.match.params.page !== currentPage) {
    dispatch.users.setCurrentPage(props.match.params.page);
  }

  useEffect(() => {
    dispatch.users.getUsers(currentPage);
  }, [currentPage]);

  const onClick = (event: any) => {
    dispatch.users.setCurrentPage(event.target.value);
  };

  const handle = (id: number) => (event: any) => {
    openModal(event);
    setCurrentUserIndex(--id);
  };

  const userData = (
    <Content>
      {users.map((item) => (
        <UserCard user={item} key={item.id} handle={handle} />
      ))}
      <div>{createNavBar(totalPages, onClick)}</div>
    </Content>
  );

  return (
    <>
      {loadingState.models.users ? <Loader /> : userData}
      {isOpen && (
        <Modal>
          <ModalWindow user={users[currentUserIndex]} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};
