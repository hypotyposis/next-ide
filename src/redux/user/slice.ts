import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  walletAddress: string;
  name: string;
}

const initialState: UserState = {
  walletAddress: '',
  name: ' ',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.walletAddress = action.payload.walletAddress;
      state.name = action.payload.name;
    },
    logout: state => {
      state.walletAddress = '';
      state.name = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
