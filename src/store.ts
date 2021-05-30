import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";
import loading, { ExtraModelsFromLoading } from "@rematch/loading";
import updated, { ExtraModelsFromUpdated } from "@rematch/updated";

type FullModel = ExtraModelsFromLoading<RootModel> &
  ExtraModelsFromUpdated<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  plugins: [updated(), loading()],
});

export type Store = typeof store;
export type RootState = RematchRootState<RootModel, FullModel>;
export type Dispatch = RematchDispatch<RootModel>;
