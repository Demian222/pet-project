import React from "react";
import { UserModel } from "../../models/users";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

const UserBlock = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  background-color: #cac8c829;
  width: 580px;
`;

const InfoBlock = styled.div`
  padding: 10px 40px 10px 20px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const User = ({ user }: { user: UserModel }) => {
  const { avatar, first_name, last_name, email } = user;

  return (
    <UserBlock>
      <img src={avatar} height={200} width={200}></img>
      <InfoBlock>
        <p>First name: {first_name}</p>
        <p>Last name: {last_name}</p>
        <p>email: {email}</p>
      </InfoBlock>
    </UserBlock>
  );
};
