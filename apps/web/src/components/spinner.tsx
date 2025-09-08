import { RotatingLines } from 'react-loader-spinner'
export const Spinner = () => (
  <RotatingLines
    visible={true}
    width='40'
    strokeWidth='2'
    animationDuration='200'
    strokeColor='grey'
  />
)
