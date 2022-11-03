import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import ReduxThunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ReduxThunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;