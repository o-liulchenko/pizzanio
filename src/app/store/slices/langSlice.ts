import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface LangState {
  currentLanguage: string;
}

export const LANG_LIST = {
  ua: "ua",
  en: "en",
  pl: "pl",
};

const getInitState: () => LangState = () => {
  const maybeLang = localStorage.getItem("lang");
  !maybeLang && localStorage.setItem("lang", LANG_LIST.ua)
  return {currentLanguage: `${localStorage.getItem("lang")}`}
};

export const LangSlice = createSlice({
  name: "lang",
  initialState: getInitState(),
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
        state.currentLanguage = action.payload
    }
  },
});

export const { changeLanguage } = LangSlice.actions;

export const SelectLang = (state: RootState) => state.lang.currentLanguage;

export default LangSlice.reducer;
