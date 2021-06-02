import React from "react";
import { UserModel } from "../../models/users";
import styled from "@emotion/styled";
import { userCardsTheme } from "../theme";

const UserBlock = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  width: 580px;
  ${userCardsTheme}
`;

const InfoBlock = styled.div`
  padding: 10px 40px 10px 20px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserCard = ({
  user,
  handle,
}: {
  user: UserModel;
  handle: any;
}) => {
  const { avatar, first_name, last_name, email, id } = user;

  return (
    <UserBlock id={id.toString()} onClick={handle(id)}>
      <img src={avatar} height={200} width={200}></img>
      <InfoBlock>
        <p>First name: {first_name}</p>
        <p>Last name: {last_name}</p>
        <p>email: {email}</p>
      </InfoBlock>
    </UserBlock>
  );
};
