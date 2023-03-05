import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import resultsSlice from "./resultsSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        results: resultsSlice,
    },
});


export default store;