import { createSlice } from '@reduxjs/toolkit';

type AuthStatus = 'non-authenticated' | 'authenticated' | 'validating';

export interface AuthState {
   authStatus: AuthStatus;
   uid: string;
   email: string;
   displayName: string;
   errorMessage?: string;

}

const initialState: AuthState = {
   authStatus: 'non-authenticated',
   uid: '',
   email: '',
   displayName: '',
   errorMessage: '',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {

      checkingCredentials: ( state ) => {
         state.authStatus = 'validating'
      },

      logout: (state, { payload } ) => {
         state.authStatus = 'non-authenticated',
         state.uid = '',
         state.email = '',
         state.displayName = '',
         state.errorMessage = payload.errorMessage
      },

      login: ( state, { payload }) => {
         state.authStatus = 'authenticated';
         state.email = payload.email;
         state.uid = payload.uid
         state.displayName = payload.displayName

      }
   }
});
export const {
   login,
   logout,
   checkingCredentials,
} = authSlice.actions;
