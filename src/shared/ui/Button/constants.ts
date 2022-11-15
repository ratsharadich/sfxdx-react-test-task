import cn from 'classnames'

export const buttonClassName = (active?: Boolean, className?: string) =>
  cn(
    className,
    'w-[12.5rem] h-[3rem] bg-disabled-bg-gray text-disabled-text-gray rounded-lg font-bold text-lg leading-[1.5rem] pointer-events-none',
    { 'button-shadow bg-[#08D899] text-white pointer-events-auto': active }
  )
