import {useMemo, ReactNode} from 'react'
import Head from 'next/head'

type Props = {
  meta: {
    title: string
  }
  children: ReactNode
}

export default function PageLayout({meta, children}: Props) {
  const title = useMemo(
    () => (meta.title ? `Jan Kaßel - ${meta.title}` : 'Jan Kaßel'),
    [meta],
  )
  return (
    <article>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>
      {children}
    </article>
  )
}
