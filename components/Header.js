import React, {Component} from 'react'
import Link from 'next/link'
import Anchor from './Anchor'
import {MetaContext} from './Container'
import Heading from './Heading'
import Wrapper from './Wrapper'

export default class Header extends Component {
  static contextType = MetaContext

  render() {
    return (
      <Wrapper as="header">
        <Heading>
          <Link href={'/'}>
            <Anchor active={!this.context.title}>Jan Kaßel</Anchor>
          </Link>

          {this.context.title && <> — {this.context.title}</>}
        </Heading>
      </Wrapper>
    )
  }
}
