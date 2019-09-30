import React from 'react'
import NextLink from 'next/link'
import Anchor from './Anchor'
import isAbsoluteUrl from '../lib/isAbsoluteUrl'

export default function Link({href, children}) {
  if (isAbsoluteUrl(href)) {
    return (
      <Anchor href={href} rel="noopener noreferrer">
        {children}
      </Anchor>
    )
  } else {
    return (
      <NextLink href={href}>
        <Anchor href={href}>{children}</Anchor>
      </NextLink>
    )
  }
}
