import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,       
  showModal: false, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;   
      state.showModal = false;      
    },
    logoutUser: (state) => {
      state.user = null;            
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setShowModal } = authSlice.actions;
export default authSlice.reducer;