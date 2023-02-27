import Link from 'next/link'
import styles from '../layout/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav aria-label="Footer">
        <p>⌁</p>
        <ul>
          <li>
            <Link href="/legal">Legal</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
