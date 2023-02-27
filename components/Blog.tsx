import React from 'react'
import Link from 'next/link'
import index from '../log-index.json'
import styles from '../layout/Blog.module.css'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

function LogEntry({title, date, slug}) {
  const postDate = new Date(date)

  return (
    <article itemScope itemType="https://schema.org/BlogPosting">
      <Link href={`/blog/${slug}`} itemProp="url">
        <div className={styles.post}>
          <time dateTime={postDate.toISOString()} itemProp="datePublished">
            {months[postDate.getMonth()]} {postDate.getDate()}
          </time>
          <h4 itemProp="headline">{title}</h4>
        </div>
      </Link>
    </article>
  )
}

export default function Blog() {
  return (
    <div>
      <h2>Research Log</h2>

      <ul className={styles.posts}>
        {index.map((entry) => (
          <li key={entry.slug}>
            <LogEntry {...entry} />
          </li>
        ))}
      </ul>
    </div>
  )
}
