import React from 'react'
import fetchPost from '../../lib/fetchPost'
import months from '../../lib/months'
import useDate from '../../effects/useDate'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote} from 'next-mdx-remote'
import index from '../../log-index.json'
import styles from '../../layout/Blog.module.css'

export default function Post({body, meta}) {
  const postDate = useDate(meta.date)

  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className={styles.post}
    >
      <div className={styles.meta}>
        <h1 itemProp="headline">{meta.title}</h1>

        <ul>
          <li>Jan Kaßel</li>
          <li>
            <time itemProp="datePublished" dateTime={postDate.toISOString()}>
              {months[postDate.getMonth()]} {postDate.getDate()},{' '}
              {postDate.getFullYear()}
            </time>
          </li>
          {meta.location && <li>{meta.location}</li>}
        </ul>
      </div>

      <MDXRemote {...body} />
    </article>
  )
}

export async function getStaticProps(context) {
  const {body, meta} = await fetchPost(context.params.slug)
  return {
    props: {
      body: await serialize(body),
      meta: {
        ...meta,
        date: meta.date.toJSON(),
      },
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: index.map((post) => ({params: {slug: post.slug}})),
    fallback: false, // can also be true or 'blocking'
  }
}
