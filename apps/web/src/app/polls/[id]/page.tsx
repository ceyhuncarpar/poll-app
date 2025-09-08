'use client'
import { StoreProvider } from '@repo/store'
import Poll from './poll'

// Since everything is rendered on the server initially, we separately
// make the initial Poll component a consumer of our store in order to handle
// it's state and server-state on the front-end.
export default function ProvidedPage() {
  return (
    <StoreProvider>
      <Poll />
    </StoreProvider>
  )
}
