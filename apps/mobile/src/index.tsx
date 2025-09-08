import { StoreProvider } from '@repo/store'
import { Poll } from './screens/poll'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <Poll />
      </SafeAreaProvider>
    </StoreProvider>
  )
}
