import { FC } from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon
} from 'src/shared'

import { SocialMediaClassName } from '../../constants'

/** Блок футера с ссылками на социальные сети */
export const SocialMedia: FC = () => {
  return (
    <section className={SocialMediaClassName}>
      <a href="/">
        <FacebookIcon />
      </a>

      <a href="/">
        <TwitterIcon />
      </a>

      <a href="/">
        <YouTubeIcon />
      </a>

      <a href="/">
        <InstagramIcon />
      </a>
    </section>
  )
}
