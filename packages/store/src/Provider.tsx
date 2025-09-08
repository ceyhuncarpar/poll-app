import { ReactNode } from 'react'
import { store } from './config/store'
import { Provider } from 'react-redux'

export const StoreProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
)
