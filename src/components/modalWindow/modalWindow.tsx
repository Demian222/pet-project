import React from "react";
import { UserModel } from "../../models/users";
import styled from "@emotion/styled";
import { modalColor } from "../theme";

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserInfo = styled.div`
  padding: 5px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${modalColor};
  border: 3px ridge black;
  padding: 10px;
`;

export const ModalWindow = ({
  user,
  onClose,
}: {
  user: UserModel;
  onClose: any;
}) => {
  const { first_name, last_name, email } = user;

  return (
    <Modal>
      <ModalBody>
        <UserInfo>
          <p>First name: {first_name}</p>
          <p>Last name: {last_name}</p>
          <p>email: {email}</p>
        </UserInfo>
        <button onClick={onClose}>Close</button>
      </ModalBody>
    </Modal>
  );
};
