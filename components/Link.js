import React from 'react'
import NextLink from 'next/link'
import Anchor from './Anchor'
import isAbsoluteUrl from '../lib/isAbsoluteUrl'

export default function Link({href, as, children}) {
  if (isAbsoluteUrl(href)) {
    return (
      <Anchor href={href} rel="noopener noreferrer">
        {children}
      </Anchor>
    )
  } else {
    const nextLinkProps = {href}
    if (as) {
      nextLinkProps.as = as
    }

    return (
      <NextLink {...nextLinkProps}>
        <Anchor href={as || href}>{children}</Anchor>
      </NextLink>
    )
  }
}
