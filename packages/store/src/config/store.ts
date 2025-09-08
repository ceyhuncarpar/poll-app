import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pollsApi } from '../api/polls'

export const store = configureStore({
  reducer: {
    [pollsApi.reducerPath]: pollsApi.reducer
  },
  // RTK Query: Adding the api middleware enables caching, invalidation, polling,
  // and other useful features
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pollsApi.middleware)
})

// RTK Query: Required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
