import { useVoteMutation, useGetPollByIdQuery } from '@repo/store'
import { View, Text, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container } from '../../components/container'
import { useState } from 'react'
import { Option } from './components/option'
import { LoadingCover } from '../../components/loading'

export const Poll = () => {
  const pollId = '1'
  const { data, isLoading, isError } = useGetPollByIdQuery(pollId)
  const [vote, { isLoading: isMuationLoading }] = useVoteMutation()
  const [voted, setVoted] = useState<string | void>()

  async function handleVote(optionId: string) {
    const res = await vote({ id: pollId, optionId })
    if (res.error) return

    setVoted(optionId)
  }

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size='large' />
      </Container>
    )
  }

  if (isError) {
    return (
      <Container>
        <Text>Something went wrong while getting the poll.</Text>
      </Container>
    )
  }

  if (!data) {
    return (
      <Container>
        <Text>The poll you are looking for doesn't exist.</Text>
      </Container>
    )
  }

  return (
    <>
      <LoadingCover active={isMuationLoading} />

      <Container>
        <View className='h-full justify-center'>
          <Text className='font-medium text-2xl text-center'>
            {data.question}
          </Text>

          <Text className='mt-4 mb-1 text-sm'>Press any option to vote</Text>
          <View className='gap-2'>
            {data.options.map((option) => (
              <Option
                key={option.id}
                option={option}
                handleVote={handleVote}
                voted={voted}
              />
            ))}
          </View>
        </View>
      </Container>
    </>
  )
}
