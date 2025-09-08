import { ReactNode } from 'react'
import { SafeAreaView, View } from 'react-native'

// Reusable screen container with safe area
export const Container = ({ children }: { children: ReactNode }) => (
  <View>
    <SafeAreaView>
      <View className='p-4 h-full items-center justify-center'>{children}</View>
    </SafeAreaView>
  </View>
)
