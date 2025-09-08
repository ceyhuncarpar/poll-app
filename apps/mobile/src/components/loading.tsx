import { ActivityIndicator, View } from 'react-native'

// Component to show while waiting for the result of certain async actions,
// Covers over the content, including unsafe area
export const LoadingCover = ({ active }: { active: boolean }) => {
  if (!active) return null

  return (
    <View className='z-10 flex-1 h-full w-full items-center justify-center absolute bg-[#0000008a]'>
      <ActivityIndicator size='large' />
    </View>
  )
}
