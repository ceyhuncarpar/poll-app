import { ReactNode } from 'react'
import { SafeAreaView, View } from 'react-native'

// Reusable screen contaner with safe area
export const Container = ({ children }: { children: ReactNode }) => (
  <SafeAreaView>
    <View className='p-4 h-full items-center justify-center'>{children}</View>
  </SafeAreaView>
)
