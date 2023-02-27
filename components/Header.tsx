import Link from 'next/link'
import styles from '../layout/layout.module.css'

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <a
          href="https://kinopio.club/jan-s-portfolio-zgvQLiOhDpLTUnMxPMqEV"
          className={styles.button}
        >
          <img
            src="https://help.kinopio.club/assets/logo-base.png"
            alt="Kinopio logo"
          />
          Portfolio
        </a>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/hyperwell">Hyperwell</Link>
          </li>
          <li>
            <Link href="/mediating-hafiz">Mediating Hafiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
