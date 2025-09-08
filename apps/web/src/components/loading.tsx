import { Spinner } from './spinner'

// Component to show while waiting for the result of certain async actions,
// Covers over the content
export const LoadingCover = ({ active }: { active: boolean }) => {
  if (!active) return null

  return (
    <div className='z-10 flex flex-1 h-full w-full items-center justify-center absolute bg-[#0000008a]'>
      <Spinner />
    </div>
  )
}
