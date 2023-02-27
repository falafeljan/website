import React from 'react'
import Link from 'next/link'
import months from '../lib/months'
import index from '../log-index.json'
import styles from '../layout/Blog.module.css'

function Item({title, date, slug}) {
  const postDate = new Date(date)

  return (
    <article itemScope itemType="https://schema.org/BlogPosting">
      <Link href={`/blog/${slug}`} itemProp="url">
        <div className={styles.item}>
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
            <Item {...entry} />
          </li>
        ))}
      </ul>
    </div>
  )
}
