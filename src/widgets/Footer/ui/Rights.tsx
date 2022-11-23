import { FC } from 'react'
import { Logo, ReservedRights } from 'src/shared'

import { RightsClassName } from '../constants'

/** Блок футера с лого и @ all rights reserved */
export const Rights: FC = () => {
  return (
    <section className={RightsClassName}>
      <a href="/">
        <Logo />
      </a>

      <ReservedRights className="md:inline-block max-md:hidden" />
    </section>
  )
}
