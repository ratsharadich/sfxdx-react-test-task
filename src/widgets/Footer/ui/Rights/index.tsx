import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Logo, ReservedRights } from 'src/shared'

/** Блок футера с лого и @ all rights reserved */
export const Rights: FC = () => {
  return (
    <section className="flex flex-col h-full justify-between items-center pt-0.5 md:order-2 max-md:order-1">
      <Link to="/">
        <Logo />
      </Link>

      <ReservedRights className="md:inline-block max-md:hidden" />
    </section>
  )
}
