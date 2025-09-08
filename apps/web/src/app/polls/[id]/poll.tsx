import { Container } from '@/components/container'
import { LoadingCover } from '@/components/loading'
import { useVoteMutation, useGetPollByIdQuery } from '@repo/store'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Option } from './components/option'
import { Spinner } from '@/components/spinner'

export default function Poll() {
  const { id: pollId } = useParams<{ id: string }>()
  const { data, isLoading, isError, isFetching } = useGetPollByIdQuery(pollId)
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
        <p>Something went wrong while getting the poll.</p>
      </Container>
    )
  }

  if (!data) return null

  return (
    <>
      <LoadingCover active={isMuationLoading} />

      <Container>
        <div className='p-4 h-full justify-center content-center max-w-5xl self-center justify-self-center'>
          <p className='font-medium text-2xl text-center'>{data.question}</p>

          <div className='flex flex-col gap-2 mt-4'>
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
