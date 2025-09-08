import { TouchableOpacity, View, Text } from 'react-native'
import { VoteOption } from '@repo/types/poll'

export const Option = ({
  option,
  handleVote,
  voted
}: {
  option: VoteOption
  handleVote: (optionId: string) => Promise<void>
  voted: string | void
}) => {
  const isVoted = voted === option.id

  return (
    <TouchableOpacity
      key={option.id}
      onPress={() => handleVote(option.id)}
      // disabled={!!voted}
    >
      <View
        className={
          'flex-row between justify-between border rounded-lg border-gray-500 p-2' +
          (isVoted ? ' bg-gray-500' : '')
        }
      >
        <Text className={isVoted ? 'text-white' : ''}>{option.text}</Text>
        <Text className={isVoted ? 'text-white' : ''}>{option.votes}</Text>
      </View>
    </TouchableOpacity>
  )
}
