import { FC } from 'react'
import { ReservedRights } from 'src/shared'

import { footerClassName } from './constants'
import { Policies, Rights, SocialMedia } from './ui'

/** Футер сайта с лого и ссылками на ресурсы  */
export const Footer: FC = () => {
  return (
    <footer className={footerClassName}>
      <Policies />
      <Rights />
      <SocialMedia />

      <ReservedRights className="md:hidden order-4 justify-self-center" />
    </footer>
  )
}
