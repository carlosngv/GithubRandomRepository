import { createSlice } from '@reduxjs/toolkit';

export interface RepositoriesState {
   activeRepository: any;
   repositoryList: any[];
   isLoading: boolean;
}

const initialState: RepositoriesState = {
   activeRepository: {},
   repositoryList: [],
   isLoading: true,
}
export const repositorySlice = createSlice({
   name: 'repository',
   initialState,
   reducers: {

      setActiveRepository: (state, payload ) => {
           state.activeRepository = payload;
       },
   }
});


export const {
    setActiveRepository
 } = repositorySlice.actions;
