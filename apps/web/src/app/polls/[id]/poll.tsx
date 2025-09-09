import { Container } from '@/components/container'
import { LoadingCover } from '@/components/loading'
import { useVoteMutation, useGetPollByIdQuery } from '@repo/store'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Option } from './components/option'

export default function Poll() {
  const { id: pollId } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetPollByIdQuery(pollId)
  const [vote, { isLoading: isMuationLoading }] = useVoteMutation()
  const [voted, setVoted] = useState<string | void>()

  async function handleVote(optionId: string) {
    const res = await vote({ id: pollId, optionId })
    if (res.error) return

    setVoted(optionId)
  }

  if (isLoading) {
    return <LoadingCover active={true} />
  }

  if (isError) {
    return (
      <Container>
        <p className='text-center'>
          Something went wrong while getting the poll.
        </p>
      </Container>
    )
  }

  if (!data) {
    return (
      <Container>
        <p className='text-center'>
          The poll you are looking for doesn't exist.
        </p>
      </Container>
    )
  }

  return (
    <>
      <LoadingCover active={isMuationLoading} />

      <Container>
        <div className='h-full justify-center content-center w-full max-w-[584px] self-center justify-self-center'>
          <p className='font-medium text-2xl text-center'>{data.question}</p>

          <p className='mt-4 mb-1 text-sm'>Click any option to vote</p>
          <div className='flex flex-col gap-2'>
            {data.options.map((option) => (
              <Option
                key={option.id}
                option={option}
                handleVote={handleVote}
                voted={voted}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
