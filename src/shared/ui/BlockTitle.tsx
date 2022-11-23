import { FC } from 'react'

/** Титул для блоков ордеров */
export const BlockTitle: FC<{ text: string }> = ({ text }) => {
  return <pre className="font-manrope text-4xl font-bold">{text}</pre>
}
