import {
  useDispatch as rootDispatch,
  useSelector as rootSelector
} from 'react-redux'
import type { RootState, AppDispatch } from './config/store'

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useDispatch = rootDispatch.withTypes<AppDispatch>()
export const useSelector = rootSelector.withTypes<RootState>()

// Other regular exports
export * from './api/polls'
export * from './Provider'
