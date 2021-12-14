import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import postsReducer from '../features/posts/postsSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
