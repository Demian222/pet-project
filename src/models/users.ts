import { createModel } from "@rematch/core";
import { RootModel } from ".";
import axios from "axios";

export interface UserModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type UsersState = {
  users: UserModel[];
  total_pages: number;
  current_page: number;
};

export const users = createModel<RootModel>()({
  state: {
    users: [],
    total_pages: 0,
    current_page: 1,
  } as UsersState,
  reducers: {
    SET_USERS: (state: UsersState, users: UserModel[], total_pages: number) => {
      return { users, total_pages, current_page: state.current_page };
    },
    SET_CURRENT_PAGE: (state: UsersState, current_page: number) => {
      return { ...state, current_page };
    },
  },
  effects: (dispatch) => {
    const { users } = dispatch;
    return {
      async getUsers(page: number): Promise<any> {
        const response = await axios.get(`https://reqres.in/api/users`, {
          params: { page },
        });
        const {
          data,
          total_pages,
        }: { data: UserModel[]; total_pages: number } = response.data;

        users.SET_USERS(data, total_pages);
      },
      setCurrentPage(page: number) {
        users.SET_CURRENT_PAGE(page);
      },
    };
  },
});
