import cn from 'classnames'

const commonButtonClassName =
  'flex items-center justify-center cursor-pointer h-[2.25rem] w-[4.5rem]'
const selectedButtonClassName = 'border-b-2 border-[#08D899] text-black'

export const buttonClassName = (isActive: boolean) =>
  cn(commonButtonClassName, {
    [selectedButtonClassName]: isActive
  });
