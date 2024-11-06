import { cn } from '@/lib/utils'
import * as React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: React.ReactNode
}

const InputBase = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, className, type = 'text', ...props }, ref) => {
    return (
      <div className='w-full'>
        <label
          htmlFor={props.id}
          className=' block 
    label-text
    font-semibold
    text-gray-600 
    mb-1
    transition-colors 
    duration-200
    dark:text-gray-300'
        >
          {label}
        </label>
        <div className='relative'>
          <input
            type={type}
            ref={ref}
            className={cn(
              'w-full rounded-lg border px-4 py-2 input-text',
              'bg-white dark:bg-gray-800',
              'border-gray-300 dark:border-gray-600',
              'placeholder-gray-400 dark:placeholder-gray-500',
              'focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400',
              'transition duration-200 ease-in-out',
              icon ? 'pr-10' : '',
              className
            )}
            {...props}
          />
          {icon && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
              {icon}
            </div>
          )}
        </div>
      </div>
    )
  }
)

InputBase.displayName = 'InputBase'

export { InputBase }
