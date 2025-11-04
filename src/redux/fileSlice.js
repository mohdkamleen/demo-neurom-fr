import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
  name: "file",
  initialState: {
    modalType: "",
    fileInfo: null,
  },
  reducers: {
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setFileInfo: (state, action) => {
      state.fileInfo = action.payload;
    },
  },
});

export const { setModalType, setFileInfo } = fileSlice.actions;
export default fileSlice.reducer;
