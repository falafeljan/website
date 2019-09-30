import React from 'react'
import App from 'next/app'
import Container from '../components/Container'
import Layout from '../layout'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <>
        <Layout />

        <Container>
          <Header />

          <Wrapper grow>
            <Component {...pageProps} />
          </Wrapper>
        </Container>
      </>
    )
  }
}
