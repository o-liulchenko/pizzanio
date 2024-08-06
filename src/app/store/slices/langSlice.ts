import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface LangState {
  lang: string;
}

export const LANG_LIST = {
  ua: "ua",
  en: "en",
  pl: "pl",
};

// const getInitState: () => LangState = () => {
//   const maybeLang = localStorage.getItem("lang");
//   !maybeLang && localStorage.setItem("lang", LANG_LIST.UA)
//   return localStorage.getItem("lang")
// };

export const LangSlice = createSlice({
  name: "lang",
  initialState: LANG_LIST.ua,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
        return state = action.payload
    }
  },
});

export const { changeLanguage } = LangSlice.actions;

export const SelectLang = (state: RootState) => state.lang;

export default LangSlice.reducer;
