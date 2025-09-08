import { ReactNode } from 'react'

// Reusable screen container with safe area
export const Container = ({ children }: { children: ReactNode }) => (
  <div className='w-full h-[100vh]'>
    <div className='p-4 h-full items-center justify-center'>{children}</div>
  </div>
)
