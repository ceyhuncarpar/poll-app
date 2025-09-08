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
    <button key={option.id} onClick={() => handleVote(option.id)}>
      <div
        className={
          'flex flex-row between justify-between border rounded-lg border-gray-500 p-2 cursor-pointer' +
          (isVoted ? ' bg-gray-500' : '')
        }
      >
        <p className={isVoted ? 'text-white' : ''}>{option.text}</p>
        <p className={isVoted ? 'text-white' : ''}>{option.votes}</p>
      </div>
    </button>
  )
}
