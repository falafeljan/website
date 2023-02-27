import {useMemo, ReactNode} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../layout/layout.module.css'

type LinkProps = {
  href: string
  children: ReactNode
}

function NavLink({href, children}: LinkProps) {
  const router = useRouter()
  const active = useMemo(() => router.asPath === href, [router, href])

  return (
    <Link href={href} className={active ? styles.active : ''}>
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <nav aria-label="Main" className={styles.nav}>
        <a
          href="https://kinopio.club/jan-s-portfolio-zgvQLiOhDpLTUnMxPMqEV"
          className={styles.button}
        >
          Portfolio
          <img
            src="https://help.kinopio.club/assets/logo-base.png"
            alt="Kinopio"
          />
        </a>
        <ul>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/hyperwell">Hyperwell</NavLink>
          </li>
          <li>
            <NavLink href="/mediating-hafiz">Mediating Hafiz</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
