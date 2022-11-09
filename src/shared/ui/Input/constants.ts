import cn from 'classnames'

export const inputClassName = (className?: string) =>
  cn(
    className,
    [
      'bg-background-gray',
      'border',
      'border-border-gray',
      'rounded-[0.5rem]',
      'h-[2.75rem]',
      'px-[1rem]',
      'py-[0.75rem]'
    ].join(' ')
  )
