import React, {Component} from 'react'
import Head from 'next/head'
import {MetaContext} from './Container'

const prefix = 'Jan Kaßel'

export default class Title extends Component {
  static contextType = MetaContext

  state = {
    title: null,
    interpolatedTitle: null,
  }

  static getDerivedStateFromProps(props) {
    let title, interpolatedTitle

    if (!props.value) {
      title = null
      interpolatedTitle = prefix
    } else {
      title = props.shortened || props.value
      interpolatedTitle = !!props.noPrefix
        ? props.value
        : `${prefix} ◦ ${props.value}`
    }

    return {title, interpolatedTitle}
  }

  propagateTitle() {
    if (this.state.title !== this.context.title) {
      this.context.setTitle(this.state.title)
    }
  }

  componentDidMount() {
    this.propagateTitle()
  }

  componentDidUpdate() {
    this.propagateTitle()
  }

  render() {
    return (
      <Head>
        <title>{this.state.interpolatedTitle}</title>
      </Head>
    )
  }
}
