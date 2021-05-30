import React from "react";
import { UserModel } from "../models/users";

export const User = ({ user }: { user: UserModel }) => {
  const { avatar, first_name, last_name, email } = user;
  return (
    <>
      <img src={avatar} height={320} width={320}></img>
      <div>
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
      </div>
    </>
  );
};
