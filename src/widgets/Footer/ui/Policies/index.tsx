import { FC } from 'react'

import {
  COOKIE_POLICY,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS
} from '../../constants'

/** Блок футера с ссылками на политики */
export const Policies: FC = () => {
  return (
    <section className="flex flex-col gap-1 max-md:justify-self-center max-md:items-center whitespace-pre md:order-1 max-md:order-2">
      <a href="/">{PRIVACY_POLICY}</a>
      <a href="/">{TERMS_AND_CONDITIONS}</a>
      <a href="/">{COOKIE_POLICY}</a>
    </section>
  )
}
