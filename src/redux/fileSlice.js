import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
  name: "file",
  initialState: {
    fileInfo: {},
    modalType: "",
    result: null,
  },
  reducers: {
    setFileInfo: (state, action) => {
      state.fileInfo = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});


export const { setModalType, setFileInfo, setResult } = fileSlice.actions;
export default fileSlice.reducer;
