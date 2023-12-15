import { configureStore } from "@reduxjs/toolkit";
import storySlice from "./slices/storySlice";
import seenSlice from "./slices/seenSlice";
const store = configureStore({
  reducer: {
    story: storySlice,
    seen: seenSlice,
  },
});
export default store;
