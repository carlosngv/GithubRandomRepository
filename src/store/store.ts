import { configureStore } from '@reduxjs/toolkit'
import { repositorySlice } from './repository/repositorySlice'
import { authSlice } from './auth/authSlice'
// ...

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    repositories: repositorySlice.reducer,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
