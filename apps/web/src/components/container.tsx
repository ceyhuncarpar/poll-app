import { ReactNode } from 'react'

// Reusable screen container with safe area
export const Container = ({ children }: { children: ReactNode }) => (
  <div className='w-full h-[100vh]'>
    <div className='p-4 h-full w-full content-center'>{children}</div>
  </div>
)
