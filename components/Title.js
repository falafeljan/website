import React, {Component} from 'react'
import Head from 'next/head'
import {MetaContext} from './Container'

export default class Title extends Component {
  static contextType = MetaContext

  render() {
    if (this.props.value !== this.context.title) {
      this.context.setTitle(this.props.value)
    }

    return (
      <Head>
        <title>{this.props.value || 'Jan Kaßel'}</title>
      </Head>
    )
  }
}
