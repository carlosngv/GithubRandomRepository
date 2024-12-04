import { createSlice } from '@reduxjs/toolkit';

type AuthStatus = 'non-authenticated' | 'authenticated' | 'validating';

export interface AuthState {
   authStatus: AuthStatus;
}

const initialState: AuthState = {
   authStatus: 'authenticated'
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {

      startLogin: ( state, action ) => {
         state.authStatus = 'validating'
      },

      login: (state, action ) => {
           state.authStatus = 'authenticated'
      },

      logout: ( state ) => {
         state.authStatus = 'non-authenticated';
      }
   }
});
export const {
   login,
   logout,
   startLogin,
} = authSlice.actions;
