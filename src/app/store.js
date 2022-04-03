import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../pages/Home/features/Cart/cartSlice";
import userReducer from "../pages/Login/userSlice";


const rootReducer = {
  cart: cartReducer,
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
