import React, {Component} from 'react'
import Head from 'next/head'
import {MetaContext} from './Container'

const prefix = 'Jan Kaßel'

export default class Title extends Component {
  static contextType = MetaContext

  state = {
    title: '',
    interpolatedTitle: '',
  }

  static getDerivedStateFromProps(props) {
    const title = props.value || prefix

    return {
      title: props.shortened || title,
      interpolatedTitle: !!props.noPrefix ? title : `${prefix} ◦ ${title}`,
    }
  }

  render() {
    if (this.state.title !== this.context.title) {
      this.context.setTitle(this.state.title)
    }

    return (
      <Head>
        <title>{this.state.interpolatedTitle}</title>
      </Head>
    )
  }
}
