import { FC } from 'react'

import {
  COOKIE_POLICY,
  policiesClassName,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS
} from '../../constants'

/** Блок футера с ссылками на политики */
export const Policies: FC = () => {
  return (
    <section className={policiesClassName}>
      <a href="/">{PRIVACY_POLICY}</a>
      <a href="/">{TERMS_AND_CONDITIONS}</a>
      <a href="/">{COOKIE_POLICY}</a>
    </section>
  )
}
