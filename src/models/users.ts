import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { serverRequest } from "../services";

export interface UserModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type UsersState = {
  users: UserModel[];
  totalPages: number;
  currentPage: number;
};

export const users = createModel<RootModel>()({
  state: {
    users: [],
    totalPages: 0,
    currentPage: 1,
  } as UsersState,
  reducers: {
    setUsersReducer: (
      state: UsersState,
      users: UserModel[],
      totalPages: number
    ) => {
      return { users, totalPages, currentPage: state.currentPage };
    },
    setCurrentPageReducer: (state: UsersState, currentPage: number) => {
      return { ...state, currentPage };
    },
  },
  effects: (dispatch) => {
    const { users } = dispatch;
    return {
      async getUsers(page: number): Promise<any> {
        const response = await serverRequest(
          `https://reqres.in/api/users`,
          page
        );
        const {
          data,
          total_pages,
        }: { data: UserModel[]; total_pages: number } = response.data;

        users.setUsersReducer(data, total_pages);
      },
      setCurrentPage(page: number) {
        users.setCurrentPageReducer(page);
      },
    };
  },
});
